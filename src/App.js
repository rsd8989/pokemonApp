import logo from './logo.svg';
import './App.css';
// import FunctionCounter from './components/FunctionCounter';
// import ClassCounter from './components/ClassCounter';
// ClassCounter
// FunctionCounter
import React from 'react';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import Home from './components/Home'

import AllPokemons from './components/AllPokemons';
import store from './store';
import {Provider} from 'react-redux'
import UpdatePokemon from './components/UpdatePokemon';
import Navbar from './components/Navbar';
function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/allPokemons" component={AllPokemons}/>
          <Route path="/update/:id" component={UpdatePokemon}/>
        </Switch>
        
      </div>
    </Router>
    </Provider>
    
  );
}

export default App;
