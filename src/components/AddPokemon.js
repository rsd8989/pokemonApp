import React,{useState} from 'react';
import Popup from './Popup';
import {connect} from 'react-redux';
import {add_new_pokemon} from './../redux/Action'
import Style from './../Styles/addpokemon.module.css';

function AddPokemon(props){
    const [pokemon,setPokemon]=useState({name:"",breed:"",description:""})
    const [showPopup,setPopup]=useState({show:false,message:"",type:"none"});
    const add=()=>{
        //alert('added')
        if(pokemon.name!="" && pokemon.description!="" && pokemon.breed!=""){
            props.add_new_pokemon(pokemon)
            console.log(pokemon)
            setPopup({show:true,message:"pokemon added succesfully",type:"success"})

        }else{
            setPopup({show:true,message:"please fill all the field",type:"danger"})
        }
        
    }
    const closePopup=()=>{
        setPopup(false)
    }
    return (
        
        <div>
             {showPopup.show && <Popup closePopup={closePopup} type={showPopup.type} message={showPopup.message}/>}
            <div className={Style.form_container}>
                <h2>Add Pokemons</h2>
                
                    <div >
                        <label className={Style.pokemon_label}>Name</label>
                        <input onChange={(e)=>{setPokemon({...pokemon,name:e.target.value})}} className={Style.pokemon_input} type="text"/>
                    </div>
                    <div>
                        <label className={Style.pokemon_label}>Breed</label>
                        <input onChange={(e)=>{setPokemon({...pokemon,breed:e.target.value})}}  className={Style.pokemon_input} type="text"/>
                    </div>
                    <div>
                        <label className={Style.pokemon_label}>Description</label>
                        <input onChange={(e)=>{setPokemon({...pokemon,description:e.target.value})}} className={Style.pokemon_input} type="text"/>
                    </div>
                    <button className={Style.add_button} onClick={()=>add()}>Add Pokemon</button>
                
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
    add_new_pokemon:(pokemon)=>dispatch(add_new_pokemon(pokemon)),
  }
}

export default connect(mapStateToProp,mapDispatchToPorp)(AddPokemon);