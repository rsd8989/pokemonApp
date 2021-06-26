import {createStore} from 'redux';
import PokemonReducer from './redux/Reducer';

const store=createStore(PokemonReducer);

export default store;