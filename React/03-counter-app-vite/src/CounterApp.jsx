import PropTypes from 'prop-types';
import {useState} from 'react';
// # Tarea

// 1. Crear un nuevo componente dentro de la carpeta SRC llamado
//     ```CounterApp```

// 2. El CounterApp debe de ser un __Functional Component__

// 3. El contenido del __CounterApp__ debe de ser:
//     ```
//         <h1>CounterApp</h1>
//         <h2> { value } </h2>
//     ```

// 4. Donde ```"value"``` es una propiedad enviada desde el padre hacia
//     el componente __CounterApp__ __(Debe ser númerica validada con PropTypes)__

// 5. Reemplazar en el index.js ó main.jsx el componente de ```<PrimeraApp />```
//     por el componente ```<CounterApp />```
//         (no se olviden del value que debe de ser un número)

// 6. Asegúrense de no tener errores ni warnings
//     (Cualquier warning no usado, comentar el código)

//documentacion para eventos
//https://es.reactjs.org/docs/events.html

//documentacion para hooks
//https://es.reactjs.org/docs/hooks-intro.html


// function handlesAdd(event, newValue){
//     // console.log(event)
//     for(let i=1;i<=5;i++){
//        console.log(newValue+i);
//     }
   
//     }

export const CounterApp = ({value}) => {
    const [counter, setCounter]=useState(0);

    const handlesAdd = ()=>{
        // setCounter(counter+1);
       setCounter((c) => c + 1 )
    }
       
    const handlesSubtrac = ()=> setCounter((c) => c - 1 );
      

    const handlesReset = ()=> setCounter((c) => value );
    

    return (
        <>
        <h1> CounterApp</h1>
        <h2> {counter} </h2>
        <button onClick={handlesAdd }> +1 </button>
        <button onClick={handlesSubtrac}> -1 </button>
        <button onClick={handlesReset }> Reset </button>

        </> 
        );
}

CounterApp.propTypes ={
    value: PropTypes.number.isRequired,
}