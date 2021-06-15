import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// Initial State

const initialState = {
    users: []
}

// Create Context
export const GlobalContext = createContext(initialState)

// Provider Component
export const ProviderComponent = ( { children } ) => {
    const [state, dispatch] =  useReducer(AppReducer, initialState)

    // Actions

    const removeUser = (id) => {
        dispatch({
            type: 'REMOVE_USER',
            payload: id
        })
    }

    const addUser = (name) => {
        dispatch({
            type: 'ADD_USER',
            payload: name
        })
    }

    const editUser = (user) => {
        dispatch({
            type: 'EDIT_USER',
            payload: user
        })
    }

    return (
        <GlobalContext.Provider value={{
            users: state.users,
            removeUser,
            addUser,
            editUser
        }}>
            { children }
        </GlobalContext.Provider>
    )

}