import { memo } from "react";
export const Small = memo(({value}) => {
    console.log(' Me volvi a dibujar jeje');
  return (
    <small>{value}</small>
  )
})
