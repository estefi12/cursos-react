import React from 'react';
// El componente recibe props y estos se ponen entre {} para desestructurarlos
const Gif = ({ url }) => {
    return (
        <img src={url}></img>
    );
}

export default Gif;