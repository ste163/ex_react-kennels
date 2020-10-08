import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"

export const AnimalSearch = () => {
    const { setSearchTerms } = useContext(AnimalContext)

    // sets the search input to an empty string on page load
    useEffect(() => {
        setSearchTerms("")
    }, [])

    return (
        <>
            Animal search:
            <input type="text"
                className="input--wide"
                onKeyUp={
                    (keyEvent) => setSearchTerms(keyEvent.target.value)
                }
                placeholder="Search for an animal... " />
        </>
    )
}