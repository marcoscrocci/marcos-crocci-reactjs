import React, { createContext, useReducer } from 'react'
import { actions as testActions } from './TestActions'

const initialState = {
    user: null
}

const GlobalContext = createContext(initialState)


const actions = {
    ...testActions
}

export const GlobalProvider = props => {

    function reducer(state, action) {
        const fn = actions[action.type]
        return fn ? fn(state, action) : state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext