import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

// Estructuración de proyectos y nomenclatura de componentes en React
// https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76

// https://es.reactjs.org/docs/faq-structure.html

// archivo de estilos
// https://gist.github.com/Klerith/e4fca6ac127ccb9abd1e8ad77fcd52f1
//<ol> enumera un listado de cosas... eje: 1.nombres, 2.Apellidos...3.algo...


//Codigo fuente de la seccion 
// https://github.com/Klerith/react-vite-gif-expert/tree/fin-seccion-6

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Rick and Morty']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        // categories.push(newCategory);
        setCategories([newCategory, ...categories]);


    }

    return (
        <>
            {/* titulo */}

            <h1> GifExpertApp </h1>

            {/* input */}

            <AddCategory

                onNewCategory={event => onAddCategory(event)}
            />

            {/* Listado de gif */}

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }


        </>
    )
}
