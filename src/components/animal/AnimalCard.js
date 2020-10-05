import React from "react"

// Or instead of props, you could do ({ animal }) -- parameter destructuring
// Because you're saying we're receiving an animal object
export const AnimalCard = ({animal, location}) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <address className="location__address">{location.name}</address>
    </section>
)