import React,{ useEffect, useState}from 'react'
import {URL_ESPECIES, URL_POKEMON} from '../../../api/apiRest'
import css from './card.module.scss'
import axios from 'axios'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { FaHeart } from 'react-icons/fa'; 

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);



export default function Card({card}) {

    const [itemPokemon, setitemPokemon] = useState({})
    const [especiePokemon, setespeciePokemon] = useState({})

    useEffect(() => {
      const dataPokemon = async()=>{
        const api = await axios.get(`${URL_POKEMON}/${card.name}`)
        setitemPokemon(api.data)
      }
    
      dataPokemon()
      
    }, []);
    useEffect(() => {
      const especiePokemon = async() =>{
        const URL = card.url.split("/");

        const api = await axios.get(`${URL_ESPECIES}/${URL[6]}`);
        setespeciePokemon(api.data);
      }
        especiePokemon();
  
    }, [])
    
    // const dataValues = itemPokemon?.stats?.map((sta) => sta.base_stat) || [];
    // const labels = itemPokemon?.stats?.map((sta) => sta.stat.name) || [];

    // const data = {
    //   labels: labels,
    //   datasets: [
    //     {
    //       label: '# Estadisticas',
    //       data: dataValues,
    //       backgroundColor: 'rgba(25, 10, 233, 0.2)',
    //       borderColor: 'rgb(99, 148, 255)',
    //       borderWidth: 0.5,
    //     },
    //   ],
    // };
      // Estado para manejar si el Pokémon es favorito
  const [isFavorite, setIsFavorite] = useState(false);

  // Función para alternar el estado de favorito
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
<div className={`bg-${especiePokemon?.color?.name} ${css.cardpokemon}`}>
      <div className={css.datepokemon}>
        <div className={css.idpokemon}>
          <p><strong>ID:</strong> #{itemPokemon?.id}</p>
        </div>
        <div className={css.favorite} onClick={toggleFavorite}>
          <FaHeart
            className={isFavorite ? css.favoriteIconActive : css.favoriteIcon}
          />
        </div>
      </div>
      <div className={css.imgpokemon}>
        <img
          src={itemPokemon?.sprites?.other["official-artwork"]?.front_default}
          alt={itemPokemon?.name || "pokemon"}
        />
        <p>{itemPokemon?.name}</p>
      </div>
      <div className={css.typepokemon}>
        {itemPokemon?.types?.map((ti,index) => {
          return <h6 key={index} className={`color-${ti.type.name} ${css.typecolor}`}>{ti.type.name}
          </h6>

          
        })}




        {/* <p><strong>Tipo:</strong></p>
        <div>
          {itemPokemon?.types?.map((type, index) => (
            <span
              key={index}
              className={css.typeBox}
              style={{ backgroundColor: typeColors[type.type.name] }}
            >
              {type.type.name}
            </span>
          ))}
        </div> */}
      </div>
    </div>
  );
}
