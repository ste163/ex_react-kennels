import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import { useHistory } from "react-router-dom"
import "./Animal.css"

export const AnimalList = () => {
   // This state changes when `getAnimals()` is invoked below
    const { animals, getAnimals } = useContext(AnimalContext)
  
    const history = useHistory()
    //useEffect - reach out to the world for something
    // useEffect doesn't run the first time. It only runs on a state-change event.
    // That's how the useEffect function works.
    useEffect(() => {
      console.log("AnimalList: useEffect - getAnimals")
      getAnimals()
      // The empty array means by default there is nothing, so only run when there is a change.
    }, [])

    return (	
      <>
        <h2>Animals</h2>
        <button onClick={() => {history.push("/animals/create")}}>
            Add Animal
        </button>
        <div className="animals">
        {
          animals.map(animal => {
            return <AnimalCard key={animal.id} animal={animal} location={animal.location} />
          })
        }
        </div>
      </>
    )
}

