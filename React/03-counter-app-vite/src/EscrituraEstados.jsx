// import { Fragment } from 'react';

import { useState } from "react"

const probando = () => { return <h1>Me gusta hacer esto ...</h1> }

const suma = (num, num2) => { return <h1>La suma de {num} y {num2} es {num + num2}  </h1> }

const suma2 = () => { return <h1>La suma de 1+1 es {1 + 1}</h1> }

export const EscrituraEstados = () => {
    const nums = [1, 2, 3, 4, 5];
    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)

    const sumar = () => {
        setResult(parseInt(num) + parseInt(num2))
    }

    return (
        //Fragment es sinonimo de <>
        <>

            {/* JSON.stringify es para mostrar un objeto, (un json como string) */}
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <h1> {probando()} </h1>
            <label htmlFor='num'>Numero 1 </label>
            <input type="number" id='num' onChange={(e) => setNum(e.target.value)}/>
            <br />
            <label htmlFor='num2' style={{color: "red"}}>Numero 2 </label>
            <input type="number"id='num2' onChange={(e) => setNum2(e.target.value)}/>
            <br />
            <button onClick={(evento) => sumar()}>SUMAR</button>
            <br />
            <label htmlFor='res'>El resultado es </label>
            <input type="number"id='res' value={result} disabled/>


            {nums.map(num=>suma(1,num))}
            <h1> BIENVENIDOS</h1>
            <p>ESCARATE</p>
        </>

    );
}
