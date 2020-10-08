import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import { useHistory } from "react-router-dom"
import "./Animal.css"

export const AnimalList = () => {
    const { animals, getAnimals, searchTerms } = useContext(AnimalContext)

    // Since you are no longer ALWAYS displaying all of the animals
    const [ filteredAnimals, setFiltered ] = useState([])

    const history = useHistory()

    // Empty dependency array - useEffect only runs after first render
    useEffect(() => {
        getAnimals()
    }, [])

    // useEffect dependency array with dependencies - will run if dependency changes (state)
    // searchTerms will cause a change
    useEffect(() => {
      if (searchTerms !== "") {
          // If the search field is not blank, display matching animals
          const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms.toLowerCase().trim()))
          setFiltered(subset)
      } else {
          // If the search field is blank, display all animals
          setFiltered(animals)
      }
    }, [searchTerms, animals])

    return (
      <>
        <h1>Animals</h1>
        <button onClick={() => history.push("/animals/create")}>
            Make Reservation
        </button>
        <div className="animals">
        {
        filteredAnimals.map(animal => {
          return <AnimalCard key={animal.id} animal={animal} />
        })
        }
        </div>
      </>
    )
}

// import React, { useContext, useEffect } from "react"
// import { AnimalContext } from "./AnimalProvider"
// import { AnimalCard } from "./AnimalCard"
// import { useHistory } from "react-router-dom"
// import "./Animal.css"

// export const AnimalList = () => {
//    // This state changes when `getAnimals()` is invoked below
//     const { animals, getAnimals } = useContext(AnimalContext)
  
//     const history = useHistory()
//     //useEffect - reach out to the world for something
//     // useEffect doesn't run the first time. It only runs on a state-change event.
//     // That's how the useEffect function works.
//     useEffect(() => {
//       console.log("AnimalList: useEffect - getAnimals")
//       getAnimals()
//       // The empty array means by default there is nothing, so only run when there is a change.
//     }, [])

//     return (	
//       <>
//         <h2>Animals</h2>
//         <button onClick={() => {history.push("/animals/create")}}>
//             Add Animal
//         </button>
//         <div className="animals">
//         {
//           animals.map(animal => {
//             return <AnimalCard key={animal.id} animal={animal} />
//           })
//         }
//         </div>
//       </>
//     )
// }

