import React from 'react';
import { useState, useEffect } from 'react';
import { getPokemon, getPokemonData} from './services.js/PokemonData';
import {CircularProgress} from '@mui/material';
import { BasicTable } from './components/BasicTable';



function App() {
  const[pokemonData, setPokemonData] = useState([])
  const[loading, setLoading] = useState(true);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon?limit=10'


  useEffect(() => {
    async function fetchPokemon() {
      let response = await getPokemonData(initialURL)
      await loadPokemon(response.results);
      setLoading(false);
    }
    fetchPokemon();
  }, [])

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setPokemonData(_pokemonData);
  }


  if(!pokemonData) {                                      
    return <CircularProgress large>Loading..</CircularProgress>
  }


  if(pokemonData){

  return (
    <div className="basic-table">
      <BasicTable data={pokemonData}/>
    </div>
  );
}}

export default App;

