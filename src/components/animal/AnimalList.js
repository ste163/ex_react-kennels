import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"

export const AnimalList = () => {
   // This state changes when `getAnimals()` is invoked below
    const { animals, getAnimals } = useContext(AnimalContext)
	
    //useEffect - reach out to the world for something
    // useEffect doesn't run the first time. It only runs on a state-change event.
    // That's how the useEffect function works.
    useEffect(() => {
		console.log("AnimalList: useEffect - getAnimals")
		getAnimals()
		// The empty array means by default there is nothing, so only run when there is a change.
    }, [])


    return (	
		  <div className="animals">
		    {console.log("AnimalList: Render")}
        {
          animals.map(animal => {
            return <AnimalCard key={animal.id} animal={animal} />
			    })
        }
      </div>
    )
}