import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"

export const EmployeeList = () => {
    const history = useHistory()
    const { employees, getEmployees } = useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()
    }, [])

    return (
        <>
            <h2>Employees</h2>
            <button onClick={() => {history.push("/employees/create")}}>Add Employee</button>
            <div className="employees">
                {
                    employees.map(employee => {
                        return <EmployeeCard key={employee.id} employee={employee} />
                    })
                }
            </div>
        </>
    )
}