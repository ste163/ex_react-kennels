import React from "react"
import { Link } from "react-router-dom"

// Or instead of props, you could do ({ animal }) -- parameter destructuring
// Because you're saying we're receiving an animal object
export const AnimalCard = ({ animal }) => (
    <section className="animal">
        <h3 className="animal__name">
            <Link to={`/animals/detail/${animal.id}`}>
                    { animal.name }
            </Link>
        </h3>
    </section>
)