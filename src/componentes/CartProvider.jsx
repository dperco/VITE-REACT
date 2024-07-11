import { createContext, useState } from "react";

export const miContexto = createContext() 
const Provider = miContexto.Provider


function CartProvider(props) {

  const [carritoCant, setCarritoCant] = useState(0)

  const valorDelContexto = {
    cant : carritoCant,
    loggedIn: false,
    fn: () => {
      setCarritoCant(carritoCant + 1)
    },
  }

  return (
    <Provider value={valorDelContexto}>
      {props.children}
    </Provider>
  )
}

export default CartProvider