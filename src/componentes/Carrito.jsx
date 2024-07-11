import { useCallback, useState } from "react"
import Input from "./Input"
import PageTitle from "./PageTitle"

/* 

useEffect(()=>{},[])


useMemo (Hook)
useMemo(() => { return  },[])


useCallback (Hook)
useCallback(()=>{},[])


memo (HoC)

*/

const Carrito = () => {

  const [data, setData] = useState(0)
  const [error, setError] = useState(false)
  const [nombre, setNombre] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleStateUplifting = (value) => {
    setNombre(value)
  }

  const handleStateUpliftingMemo = useCallback(handleStateUplifting,[])

  console.log("Render Carrito")

  return (
    <div>
      <PageTitle title="Carrito" />
      <p className="mb-8">Complete el formulario para enviar tu pedido!</p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-4">
          <label htmlFor="nombre" className="text-gray-400 text-sm">Nombre</label>
          <Input
            onStateUplifting={handleStateUpliftingMemo}
          />
        </div>
        {/* <div className="flex flex-col mb-4">
          <label htmlFor="email"  className="text-gray-400 text-sm">Email</label>
          <Input
            onStateUplifting={handleStateUplifting}
          />
        </div> */}

        <button className="bg-blue-500 p-2 rounded-lg text-white">Enviar</button>
      </form>
    </div>
  )
}
export default Carrito