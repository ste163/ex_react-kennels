// Import main React library and two functions
// useState is a hook that stores data about the component.
    // Think about it as "My component has its own state to maintain;
    // therefore, I will use the State hook to store it."
import React, { useState, createContext } from "react"

// Contexts store certain kinds of data used by the application.
// When you create a data provider, you must create a context
// Nothing is stored in the context at this point, it's just waiting
export const LocationContext = createContext();

// Provider allows other components to use data in the context
export const LocationProvider = (props) => {
    const [locations, setLocation] = useState([])

    const getLocations = () => {
        return fetch("http://localhost:8088/locations")
        .then(res => res.json())
        .then(setLocation)
    }

    const addLocation = location => {
        return fetch("http://localhost:8088/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(location)
        })
        .then(getLocations)
    }

    // Defines what this component will expose to other components
    // All we really are concerned with are the
    // variables in the value attribute
    return (
        <LocationContext.Provider value={{
            locations, addLocation, getLocations
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}