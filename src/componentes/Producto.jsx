import { useContext } from "react"
import Button from "./Button"
import { miContexto } from "./CartProvider"

function Producto({ producto }) {

  const valorDelContexto = useContext(miContexto)


  const handleClick = () => {
    valorDelContexto.fn()
  }

  return (
    <article className="bg-white shadow-xl p-4 rounded-md text-black transition-all hover:scale-105">
      <img src={producto.images[0]} alt={producto.title} className="aspect-square object-contain" />
      <h2 className="font-bold truncate">{producto.title}</h2>
      <p className="text-gray-400">${producto.price}</p>
      <button onClick={handleClick}>agregar al carrito</button>
      <Button type="link" href="/detalle">
        ver detalle {valorDelContexto.cant}
      </Button>
    </article>
  )
}
export default Producto