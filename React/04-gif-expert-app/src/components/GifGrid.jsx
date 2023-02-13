// import { getGifs } from "../helpers/getGifs"
import { useState, useEffect } from 'react';
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);




  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      <div className="card-grid">
        {
          images.map(({ title, id, url }) => (

            <GifItem key={id}
              title={title}
              url={url}
            />
            //se pudo usar el {...image} para pasar todas las propiedades 
          ))
        }
      </div>

      {/* <h5>{ counter }</h5>
    <button onClick={ ()=> setCounter(counter + 1)}> +1 </button> */}

    </>
  )
}
