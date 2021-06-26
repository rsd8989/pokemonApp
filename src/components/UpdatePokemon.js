import React,{useState,useEffect} from 'react';
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux';
import Popup from './Popup';

import { set_pokemon } from '../redux/Action';

import Style from './../Styles/addpokemon.module.css';

function UpdatePokemon(props){
    const [showPopup,setPopup]=useState({show:false,message:"",type:"none"});

   const [pokemon,setPokemon]=useState(null)
    const history = useHistory();
    useEffect(()=>{
        console.log(props)
        props.pokemons.forEach((element,index)=>{
            if(index==props.match.params.id){
                setPokemon(element)

            }
        })
    },[])
    const closePopup=()=>{
        setPopup(false)
    }

    const update=()=>{
        console.log(pokemon)
        if(pokemon.name!=""  && pokemon.description!="" && pokemon.breed!=""){
            props.set_pokemon({id:props.match.params.id,pokemon:pokemon})
            history.push('/allpokemons')


        }else{
            setPopup({show:true,message:"please fill all the field",type:"danger"})

        }
  
    }
    return (
        <div>
            {showPopup.show && <Popup closePopup={closePopup} type={showPopup.type} message={showPopup.message}/>}

            {pokemon ?
            <div className={Style.form_container}>
                <h2>Update details</h2>
                
                <div >
                    <label className={Style.pokemon_label}>Name</label>
                    <input onChange={(e)=>{setPokemon({...pokemon,name:e.target.value})}} value={pokemon.name} className={Style.pokemon_input} type="text"/>
                </div>
                <div>
                    <label className={Style.pokemon_label}>breed</label>
                    <input onChange={(e)=>{setPokemon({...pokemon,breed:e.target.value})}} value={pokemon.breed} className={Style.pokemon_input} type="text"/>
                </div>
                <div>
                    <label className={Style.pokemon_label}>Description</label>
                    <input onChange={(e)=>{setPokemon({...pokemon,description:e.target.value})}} value={pokemon.description} className={Style.pokemon_input} type="text"/>
                </div>
                <button className={Style.add_button} onClick={()=>update()}>update Pokemon</button>
            
        </div>:
        <h1>please wait</h1>
        }
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
    set_pokemon:(pokemon_data)=>dispatch(set_pokemon(pokemon_data)),
  }
}
export default connect(mapStateToProp,mapDispatchToPorp)(UpdatePokemon);