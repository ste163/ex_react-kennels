import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"

export const EmployeeList = () => {
    
    const { employees, getEmployees } = useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()
    }, [])

    return (
        <>
            <h2>Employees</h2>
            <div className="employees">
                {
                    employees.map(employee => {
                        return <EmployeeCard key={employee.id} employee={employee} location={employee.location} />
                    })
                }
            </div>
        </>
    )
}