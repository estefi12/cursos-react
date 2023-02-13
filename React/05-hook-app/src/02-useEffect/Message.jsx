import { useEffect } from "react"

export const Message = () => {

  useEffect (() => {
    
    console.log('Message Mounted');

    return () => {
    console.log('Message UnMounted');
    }
    }, [])

  return (
    <>
       <h3>Usuario ya existe</h3>
    </>
  )
}
