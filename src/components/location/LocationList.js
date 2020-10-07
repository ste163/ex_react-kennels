import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import "./Location.css"

export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)
    const history = useHistory()

    useEffect(() => {
        getLocations()
    }, [])

    return (
        <>
            <h2>Locations</h2>
            <button onClick={() => {history.push("/locations/create")}}>Add Location</button>
            <div className="locations">
                {console.log("LocationList: Render")}
                {
                    locations.map(location => {
                        return <LocationCard key={location.id} location={location} />
                    })
                }
            </div>
        </>
    )
}