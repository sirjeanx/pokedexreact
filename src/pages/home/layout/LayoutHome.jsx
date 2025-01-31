import React, { useEffect,useState } from 'react';
import Header from '../header/Header'
import css from './layout.module.scss'
import Card from '../card/Card'
import axios from 'axios'
import {URL_POKEMON} from '../../../api/apiRest'


export default function LayoutHome() {
 
  const [arrayPokemon, setArrayPokemon] = useState([])

 useEffect(() => {

    const api = async () => {
      
      const apiPoke = await axios.get(`${URL_POKEMON}`)
      
      setArrayPokemon(apiPoke.data.results)
    }
    api()

 }, [])
 
 
  return (
    <div className={css.layout}>  
      <Header/>

      <div className={css.containercard}>
        {arrayPokemon.map((card, index) =>{
          return <Card   key={index} card={card} /> 
        })}
      </div>
      
    </div>

  )
}

