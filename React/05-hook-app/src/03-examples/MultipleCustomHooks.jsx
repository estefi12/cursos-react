import { useFetch, useCounter} from "../hooks";

export const MultipleCustomHooks = () => {
const {counter, increment} = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    console.log (data)
   
    console.log(counter)


    //si carga ejecuta el siguiente return, sino se queda en el cargando...
    // if (isLoading) {
    //     return (
    //         <h1> Cargando... </h1>
    //     )
    // }

    return (
        <>
            <h1>The Pokémons</h1>
            <hr />

            {
                (isLoading)
                    ? (
                        <div className="alert alert-info text-center">

                            Loading...

                        </div>
                    )
                    :
                    
                        <blockquote className="blockquote text-end">
                            <p className="m-2">{data.species.name}</p>
                            
                            <a href={data.species.url} className="btn btn-primary">Ir</a>
                            <img src={data.sprites.front_default} alt={data.species.name} />
                            <footer className="blockquote-footer mt-2">Pokemon</footer>
                        </blockquote>
                    
            }


<button 
disabled={isLoading} 
className="btn btn-primary" 
onClick={()=>increment()}>
    Next Quotes
    
</button>



        </>
    )
}
