import React from 'react'
import { Text} from 'react-native';

const usuarios = [
                    {
                        nome: 'Miliano Fernandes de Oliveira Junior' 
                    },
                    {
                        nome: 'Gelson Fernandes de Oliveira' 
                    }
                ]

const initialState = {usuarios}
const UsersContext = React.createContext({oi: 1});

const UsersProvider = (props) => {
    
    function reducer(state, action){
        state.oi = state.oi + 1
        return state
    }

    const [state, dispatch ] = React.useReducer(reducer, initialState)

    return (
        <UsersContext.Provider value={{ state, dispatch }}>
            <Text>toggle theme</Text>
            {props.children}
        </UsersContext.Provider>
    )
}

export { UsersContext, UsersProvider }