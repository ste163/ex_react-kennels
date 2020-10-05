import React from "react"

// Or instead of props, you could do ({ animal }) -- parameter destructuring
// Because you're saying we're receiving an animal object
export const AnimalCard = (props) => (
    <section className="animal">
        <h3 className="animal__name">{props.animal.name}</h3>
        <address className="location__address">{props.animal.location.name}</address>
    </section>
)