// the react from looks different because it's looking in the package.json file
import React from "react"
import { AnimalCard } from "./animal/AnimalCard"
import "./Kennel.css"

// In a function, you can only return one thing. That's what the <> </> are. They are "fragments" which say the implicit return should 
// return all these individual html strings as one chunk.
export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>
    </>
)