import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
// import { configureStore } from '@reduxjs/toolkit'

export const updateName = (firstname) => {
    return {
        type : 'NEW_NAME',
        payload :firstname
    }
}

const redux = require('redux')


const createStore = redux.createStore

const initialState = {
    users : []
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        case "REGISTRATION" :
            return {
                ...state,
                users : [...state.users, action.payload]
            }

            // case "UPDATENAME" :
            //     return {
                    
            //     }

            default :
            return state;
    }
}
const store = createStore(reducer,composeWithDevTools(redux.applyMiddleware(logger)))

export default store;