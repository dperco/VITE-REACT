import { useEffect } from "react"
import PageTitle from "./PageTitle"

function DetalleContainer() {

  useEffect(()=>{
    //aca va un fetch de la api
  },[])

  return (
    <>
      <PageTitle title="Detalle" />
    </>
  )
}
export default DetalleContainer