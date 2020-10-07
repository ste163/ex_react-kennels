import React, { useContext, useRef, useEffect } from "react"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider"
import { useHistory } from 'react-router-dom';
import "./Employee.css"

export const EmployeeForm = props => {
    const { addEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)
    const history = useHistory()

    const name = useRef(null)
    const location = useRef(null)

    useEffect(() => {
        getLocations()
    }, [])

    const constructNewEmployee = () => {
        // ALL THE STUFF TO SAVE AN EMPLOYEE
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee name: </label>
                    <input type="text" id="employeeName" ref={name} required autoFocus className="form-control" placeholder="Employee name" />
                </div>
            </fieldset>
        </form>
    )
}