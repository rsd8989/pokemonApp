import React from 'react';
import { useHistory } from "react-router-dom";
import Style from './../Styles/navbar.module.css';

function Navbar(props){
    const history = useHistory();
    const allpokemons=()=>{
        history.push('/allpokemons')
    }
    const addPokemons=()=>{
        history.push('/')
    }

    return (
        <div className={Style.parent_container}>
        <div className={Style.navbar_brand}>
           <h2 style={{margin:0,color:'blue'}}>PokemonApp</h2> 
        </div>
        <div className={Style.nav_items_container}>
            <div onClick={()=>addPokemons()} className={Style.nav_item}>
                add pokemon
            </div>
            <div onClick={()=>allpokemons()} className={Style.nav_item}>
                all pokemons
            </div>

        </div>

    </div> 
    )
}
export default (Navbar)