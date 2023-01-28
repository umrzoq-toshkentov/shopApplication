import React, { useState } from "react";


export type ContextProviderState = {
    isLoggedIn: boolean;
    setLoggedIn: (log: boolean) => void;
};

const contextDefaultValues: ContextProviderState = {
    isLoggedIn: false,
    setLoggedIn: () => {
        // correct code for this rule: /*eslint no-empty-function: "error"*/
    },

};
export const UserContext = React.createContext<ContextProviderState>(contextDefaultValues)

//@ts-ignore
export const UserProvider: React.FC = ({ children }) => {
    const [isLoggedIn, setLoggedIn] = useState(contextDefaultValues.isLoggedIn)


    return (
        <UserContext.Provider value={{
            isLoggedIn,
            setLoggedIn
        }}>
            {children}
        </UserContext.Provider>
    )
}