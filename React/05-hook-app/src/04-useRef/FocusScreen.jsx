import { useRef } from "react"

export const FocusScreen = () => {
   
    const inputRef = useRef();
    console.log(inputRef);
    const onClick= ()=>{
        // document.querySelector('input').focus();
     inputRef.current.select();
    }



    return (
    <>
        <h1>Focus Screen</h1>
        <hr/>
        <input
        ref={inputRef}
        type="text"
        placeholder="Escriba su nombre"
        className="form-control"
        />

        <button
         className="btn btn-primary mt-2"
         onClick={onClick}>
            Set focus
        </button>
    </>
    )
}
