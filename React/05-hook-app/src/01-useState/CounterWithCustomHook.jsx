import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {

const {counter, increment, decrement, reset}=useCounter();
    return (
        <>

            <h1>CounterWithCustomHook: { counter }</h1>
            <hr />

            <button className="btn btn-success" onClick={ () => increment (2) }>+1</button>
            <button className="btn btn-danger" onClick={() => decrement (2) }>-1</button>
            <button className="btn btn-primary" onClick={ reset }>Reinicio</button>




        </>
    )
}
