//import { Fragment } from "react";

import { useState } from "react";
import { useEffect } from "react";
import Gif from "./Gif";

// const newMessage = {
//     message: 'Este es mi primer proyecto',
//     title: 'Mi primer Proyecto',
// };

const getImages = async () => {
    try {
        // return 'https://jsdksjdks.com';
        const apiKey = 'TTI8Lw4CzSESuDGhRKJAJODAy6X0Btx6';
        //await espera a que la promesa termine para ejecutar la siguiente linea de codigo
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        //console.log(data);

        const { url } = data.images.original;
        return url;
    } catch (error) {
        //Manejo del error
        console.error(error);
        return '';
    }

}



export const FirstGif = () => {
    const [imageUrl, setImageUrl] = useState();
    const [counter, setCounter] = useState(0);
    const apiKey = 'TTI8Lw4CzSESuDGhRKJAJODAy6X0Btx6';

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
            .then(res => res.json()).then(({ data }) => {
                const { images: { original: { url: url } } } = data;
                setImageUrl(url)
            });
    }, [])

    return (
        //Fragment es sinonimo de <>
        <>
            {/* JSON.stringify es para mostrar un objeto, (un json como string) */}
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <Gif url={imageUrl} />
            <h1>Estefanía</h1>
            <p>Olivares</p>
        </>
    );
}