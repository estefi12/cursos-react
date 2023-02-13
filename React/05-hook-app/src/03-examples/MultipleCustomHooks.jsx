import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {

    const { data, isLoading, hasError } = useFetch('https://pokeapi.co/api/v2/pokemon/');

    //si carga ejecuta el siguiente return, sino se queda en el cargando... 
    // if (isLoading) {
    //     return (
    //         <h1> Cargando... </h1>
    //     )
    // }

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                (isLoading)
                    ? (
                        <div className="alert alert-info text-center">

                            Loading...

                        </div>
                    )
                    :
                    data.results.map(pokemon =>
                        <blockquote key={pokemon.name} className="blockquote text-end">
                            <p className="m-2">{pokemon.name}</p>
                            <a href={pokemon.url} className="btn btn-primary">Ir</a>
                            <footer className="blockquote-footer mt-2">Pokemon</footer>
                        </blockquote>
                    )
            }


<button className="btn btn-primary" onClick={}>
    Next Quotes
</button>



        </>
    )
}
