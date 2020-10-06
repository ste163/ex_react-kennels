import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import "./Location.css"

export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, [])

    return (
        <>
            <h2>Locations</h2>
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