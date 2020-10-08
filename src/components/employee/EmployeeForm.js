import React, { useContext, useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"

export const EmployeeForm = () => {
    const { getEmployeeById, addEmployee, updateEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { employeeId } = useParams()
    const history = useHistory()

    const [employee, setEmployee] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const handleControlledInputChange = e => {
        const newEmployee = { ...employee }
        newEmployee[e.target.name] = e.target.value
        setEmployee(newEmployee)
    }

    // Use Effect gets the Locations for the dropdown,
    // Then, if we have an ID, sets the form fields
    // to the employee's data
    // Otherwise, just load the form with no data
    // Because we don't have that employee
    useEffect(() => {
        getLocations().then(() => {
            if (employeeId) {
                getEmployeeById(employeeId)
                .then(employee => {
                    setEmployee(employee)
                    setIsLoading(false)
                })
            } else {
                setIsLoading(false)
            }
        })
    }, [])

    const constructNewEmployee = () => {

        if (!parseInt(employee.locationId)) {
            window.alert("Please select a location.")
        } else {
            setIsLoading(true)
            if (employeeId) {
                updateEmployee({
                    id: employee.id,
                    name: employee.name,
                    locationId: parseInt(employee.locationId)
                })
                .then(() => history.push(`/employees/detail/${employee.id}`))
            } else {
                addEmployee({
                    name: employee.name,
                    locationId: parseInt(employee.locationId)
                })
                .then(() => history.push("/employees"))
            }
        }
    }

    const submitEmployee = (e) => {
        e.preventDefault()
        constructNewEmployee()
    }

    return (
        <form className="employeeForm" onSubmit={submitEmployee}>
            <h2 className="employeeForm__title">
                {employeeId ? "Edit Employee" : "New Employee"}
            </h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee name: </label>
                    <input type="text" id="employeeName" name="name" required autoFocus
                    className="form-control"
                    onChange={handleControlledInputChange}
                    placeholder="Employee name"
                    defaultValue={employee.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeLocation">Assign to location: </label>
                    <select value={employee.locationId} required name="locationId" id="employeeLocation" className="form-control" onChange={handleControlledInputChange}>
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit" className="btn btn-primary"
                disabled={isLoading}>
                {employeeId ? "Save Employee" : "Add Animal" }
            </button>
        </form>
    )
}