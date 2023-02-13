import PropTypes from 'prop-types';
// import { Fragment } from 'react';

//ya no se usa esto
// props
// props.title
//ahora se usa la desestructuracion {title} que es lo que se utilizara de props
export const FirstApp = ({ title, subTitle, name }) => {

    // if( !title ){
    //     throw new Error('El title no existe');
    // }
    return (
        <>

            <h1>{title}</h1>
            <p>{subTitle }</p>
            <p>{name }</p>


        </>

    );
}

FirstApp.propTypes = {
title: PropTypes.string.isRequired,
subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
    name: 'Estefania Olivares',
    subTitle: 'No hay subTitulo ',
    title: 'No existe titulo',
};