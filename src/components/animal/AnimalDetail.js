import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"

export const AnimalDetail = () => {
    const { getAnimalById, releaseAnimal } = useContext(AnimalContext)
	
	// Don't need to set useState to an empty object because
	// the null-safe operator in the return handles the undefined objects
	// until we fetch all the info.
	const [animal, setAnimal] = useState()
    
    // UseParams allows us to use the passed in animalId
	const { animalId } = useParams();
	const history = useHistory();

    useEffect(() => {
        getAnimalById(animalId)
        .then((response) => {
			// Try to keep this at one setting, so it only has to render once
			// We're able to do this, because of the animal? in the return. It's the null-safe operator
			setAnimal(response)
		})
	}, [])

    return (
        <section className="animal">
            <h3 className="animal__name">{animal?.name}</h3>
            <div className="animal__breed">{animal?.breed}</div>
			<div className="animal__location">Location: {animal?.location.name}</div>
			<div className="animal__owner">Customer: {animal?.customer?.name}</div>
			<button onClick={
   	 			() => {
					releaseAnimal(animal?.id)
						.then(() => {
							history.push("/animals")
						})
			}}>Release Animal
			</button>
			<button onClick={() => {
				history.push(`/animals/edit/${animal?.id}`)
			}}>Edit</button>
        </section>
    )
}