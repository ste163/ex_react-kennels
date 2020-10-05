import React from "react"

export const EmployeeCard = ({employee, location}) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__info">{location.name}</div>
    </section>
)