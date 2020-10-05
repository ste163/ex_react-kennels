import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { LocationCard } from "./location/LocationCard"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { CustomerCard } from "./customer/CustomerCard"
import { EmployeeCard } from "./employee/EmployeeCard"

export const ApplicationViews = () => {
    return (
        <>
            {/*
                Render the location list when http://localhost:3000/ 
                We have to put "exact" for first item because it only shows
                what's on that path and not that and everything after.
            */}
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/locations">
                <LocationCard />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <Route exact path="/animals">
                    <AnimalList />
                </Route>
            </AnimalProvider> 

            <Route path="/customers">
                <CustomerCard />
            </Route>

            <Route path="/employees">
                <EmployeeCard />
            </Route>
        </>
    )
}