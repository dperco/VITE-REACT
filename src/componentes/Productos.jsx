import Producto from "./Producto"

function Productos({ productos }) {
  return (
    <section className="gap-8 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
      {productos.map((producto, indice) => {
        return (
          <Producto producto={producto} />
        )
      })}
    </section>
  )
}
export default Productos