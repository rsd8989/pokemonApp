import {SET_POKEMON,ADD_NEW_POKEMON,DELETE_POKEMON} from './ActionTypes'

const initialaState={

    pokemons:[
       
    ]

}
const PokemonReducer=(state=initialaState,action)=>{
    
    switch(action.type){
        case SET_POKEMON:
            state.pokemons[action.payload.id]=action.payload.pokemon
            return state;
        case ADD_NEW_POKEMON:
            state.pokemons.push(action.payload)
            return state;
        case DELETE_POKEMON:
            const newState=state.pokemons.filter((element,index)=>{
                if(index==action.payload){
                   // console.log("yes")
                    return false
                }else{
                    return true
                }
            })
            console.log(newState)
            return {pokemons:newState}
            
            
        default: return state
    }

}
export default PokemonReducer;