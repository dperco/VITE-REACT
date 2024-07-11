import { useEffect, useState } from "react"

export const useDesktop = () => {

  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {

    const handleResize = () => {
      console.log("resize")
      const ancho = window.innerWidth
      if (ancho > 1000) {
        setIsDesktop(true)
      } else {
        setIsDesktop(false)
      }
    }

    window.addEventListener("resize", handleResize)

    //Esta funcion se ejecuta cuando el componente se desmonta, es decir, cuando se elimina de la vista
    return () => {
      console.log("se desmonta")
      window.removeEventListener("resize", handleResize)
    }

  }, [])

  return isDesktop

}