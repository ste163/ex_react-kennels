// Import main React library and two functions
// useState is a hook that stores data about the component.
    // Think about it as "My component has its own state to maintain;
    // therefore, I will use the State hook to store it."
    import React, { useState, createContext } from "react"

    // Contexts store certain kinds of data used by the application.
    // When you create a data provider, you must create a context
    // Nothing is stored in the context at this point, it's just waiting
    export const CustomerContext = createContext();
    
    // Provider allows other components to use data in the context
    export const CustomerProvider = (props) => {
    
        // Define a variable to hold the component's state and a function to update it
        const [customers, setCustomers] = useState([])
    
        // Like the vanilla provider...
        const getCustomers = () => {
            return fetch("http://localhost:8088/customers")
                .then(response => response.json())
                .then(setCustomers)
        }

        const addCustomers = customer => {
            return fetch("http://localhost:8088/customers", {
                method: "POST",
                headers: {
                    "Content-Type": "application.json"
                },
                body: JSON.stringify(customer)
            })
            .then(getCustomers)
        }

        // Defines what this component will expose to other components
        // All we really are concerned with are the
        // variables in the value attribute
        return (
            <CustomerContext.Provider value={{
                customers, addCustomers, getCustomers
            }}>
                {props.children}
            </CustomerContext.Provider>
        )
    }