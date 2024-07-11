import { LogIn, LogOut, ShoppingCart } from "lucide-react"
import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { miContexto } from "./CartProvider"
import { userContext } from "./UserProvider"

function NavBar(props) {

  const valorDelContextoCart = useContext(miContexto)
  const valorDelContextoUser = useContext(userContext)

  const headerLinks = [
    { texto: "productos", ruta: "/productos" },
    { texto: "muebles", ruta: "/categoria/furniture" },
    { texto: "laptops", ruta: "/categoria/laptops" },
    { texto: "carrito", ruta: "/carrito" },
  ]

  const footerLinks = [
    { texto: "T.Y.C.", ruta: "/tyc" },
    { texto: "FAQ", ruta: "/faq" },
    { texto: "contacto", ruta: "/contacto" },
  ]

  const metodo1 = "flex gap-4" + props.isHeader ? " items-center" : " justify-center text-xs"
  const metodo2 = `flex gap-4 ${props.isHeader ? "items-center" : "justify-center text-xs"}`


  return (
    <nav className={metodo2}>
      <NavLink to="/">home</NavLink>

      {props.isHeader
        ? headerLinks.map((link, indice) => {
          return <NavLink to={link.ruta} key={indice}>{link.texto}</NavLink>
        })
        : footerLinks.map((link, indice) => {
          return <NavLink to={link.ruta} key={indice}>{link.texto}</NavLink>
        })
      }

      {valorDelContextoUser.loggedIn
        ? <LogOut onClick={valorDelContextoUser.handleUserLogout} />
        : <LogIn onClick={valorDelContextoUser.handleUserLogin} />
      }
    </nav>
  )
}

export default NavBar