import React, { useContext, useRef, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { useHistory } from 'react-router-dom'
import "./Location.css"

export const LocationForm = props => {
    const { addLocation } = useContext(LocationContext)
    const history = useHistory()

    const name = useRef(null)
    const address = useRef(null)

    const constructNewLocation = () => {
        addLocation({
            name: name.current.value,
            address: address.current.value
        })
        .then(() => history.push("/locations"))
    }

    const submitLocation = e => {
        e.preventDefault()
        constructNewLocation()
    }

    return (
        <form className="locationForm" onSubmit={submitLocation}>
        <h2 className="locationForm__title">New Location</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="locationName">Location name: </label>
                <input type="text" id="locationName" ref={name} required autoFocus className="form-control" placeholder="Location name" />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="addressName">Address name: </label>
                <input type="text" id="addressName" ref={address} required autoFocus className="form-control" placeholder="Address name" />
            </div>
        </fieldset>
        <button type="submit" className="btn btn-primary">Save Location</button>
    </form>
    )
}