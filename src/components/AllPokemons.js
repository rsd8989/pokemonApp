import React from 'react';
import {connect} from 'react-redux';
import { useHistory } from "react-router-dom";
import { delete_pokemon } from '../redux/Action';

import Style from './../Styles/allpokemons.module.css';

function AllPokemons(props){
    const history = useHistory();
    const update=(index)=>{
        history.push(`/update/${index}`)
    }
    const deletePokemon=(index)=>{
       // alert(index)
        props.delete_pokemon(index)
    }

    //console.log(props.pokemons)
    return(
        <div className={Style.pokemons_container}>
            <h4>List of All available pokemons</h4>
            <div >
                {props.pokemons.length>0 ?props.pokemons.map((pokemon,index)=>{
                    return(
                        <div key={Date.now()+Math.random(0,100)} className={Style.single_pokemon_container}>
                            <p>{pokemon.name}</p>
                            <div>
                            <button onClick={()=>deletePokemon(index)} className={Style.delete_pokemon}>delete</button>
                            <button onClick={()=>update(index)} style={{backgroundColor:'blue'}} className={Style.delete_pokemon}>update</button>
                            </div>
                            
                        </div>
                    )

                }):<p>No pokemons found</p>}
               

            </div>
        </div>
    )
}

const mapStateToProp=(state)=>{
    return{
        pokemons:state.pokemons,
    }

}

const mapDispatchToPorp=(dispatch)=>{
  return{
     delete_pokemon:(index)=>dispatch(delete_pokemon(index)),
  }
}

export default connect(mapStateToProp,mapDispatchToPorp)(AllPokemons)