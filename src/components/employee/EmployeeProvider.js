import React, { useState, createContext } from "react"

export const EmployeeContext = createContext();

export const EmployeeProvider = props => {

    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        return fetch("http://localhost:8088/employees?_expand=location")
        .then(res => res.json())
        .then(setEmployees)
    }

    const addEmployee = employeeObj => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeObj)
        })
            .then(getEmployees)
    }

    const getEmployeeById = id => {
        return fetch(`http://localhost:8088/employees/${id}?_expand=location`)
            .then(res => res.json())
    }

    const fireEmployee = id => {
        return fetch(`http://localhost:8088/employees/${id}`, {
            method: "DELETE"
        })
    }

    return (
        <EmployeeContext.Provider value={{
            employees, addEmployee, getEmployees, getEmployeeById, fireEmployee
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}