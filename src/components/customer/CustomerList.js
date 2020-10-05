import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import { CustomerCard } from "./CustomerCard"
import "./Customer.css"

export const CustomerList = () => {
    // Get the data stored in the CustomerContext
    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(() => {
        console.log("CustomerList: useEffect - getCusomters")
        getCustomers()
    }, [])


    return (
        <div className="customers">
            {console.log("CustomerList: Render")}
            {
                customers.map(customer => {
                    // Although this looks like an HTML component, it's JSX for our CustomerCard function
                    return <CustomerCard key={customer.id} customer={customer}/>
                })
            }
        </div>
    )
}