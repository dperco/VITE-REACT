import { createContext, useState } from "react";

export const userContext = createContext() // { Provider , Consumer , _getContext , ....}
const Provider = userContext.Provider // Componente {}


function UserProvider({ children }) {

  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})

  const handleUserLogin = () => {
    setLoggedIn(true)
    setUser({
      nombre: "Horacio",
      email: "horacio@gmail.com",
      password: "12345678",
    })
  }

  const handleUserLogout = () => {
    setLoggedIn(false)
    setUser({})
  }

  const valorDelContexto = {
    loggedIn: loggedIn, //true | false
    user: user, //{}
    handleUserLogin: handleUserLogin, //fn()=>{}
    handleUserLogout: handleUserLogout, //fn()=>{}
  }


  return (
    <Provider value={valorDelContexto}>
      {children}
    </Provider>
  )
}

export default UserProvider