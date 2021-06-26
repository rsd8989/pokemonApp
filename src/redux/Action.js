import {SET_POKEMON} from './ActionTypes'
import {ADD_NEW_POKEMON,DELETE_POKEMON} from './ActionTypes'
export const set_pokemon=(pokemon)=>{
    return{
        type:SET_POKEMON,
        payload:pokemon

    }
}

export const add_new_pokemon=(pokemon)=>{
    return{
        type:ADD_NEW_POKEMON,
        payload:pokemon
    }
}

export const delete_pokemon=(index)=>{
    
    return{
        type:DELETE_POKEMON,
        payload:index
    }
}