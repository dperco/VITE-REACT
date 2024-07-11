import { useEffect, useState } from "react";
import { app } from "../firabase.js";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import PageTitle from "./PageTitle";
import Productos from "./Productos";

const db = getFirestore(app);
const collectionDeProductos = collection(db, "productos")

function ProductosContainer() {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        data.products.forEach(producto => {
          addDoc(collectionDeProductos, producto)
            .then((res) => {
              console.log(res)
              console.log("Producto agregado correctamente")
            })
            .catch((err) => {
              console.log(err)
              console.log("Hubo un error al agregar el producto")
            })
        });
      })

    const obtenerProductos = async () => {
      const data = await getDocs(collectionDeProductos);
      setProductos(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    }

    obtenerProductos();
  }, [])

  return (
    <>
      <PageTitle title="Productos" />
      <Productos productos={productos} />
    </>
  )
}

export default ProductosContainer