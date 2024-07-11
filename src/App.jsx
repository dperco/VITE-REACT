import Header from "./componentes/Header.jsx"
import Footer from "./componentes/Footer.jsx";
import Main from "./componentes/Main.jsx"
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./componentes/CartProvider.jsx";
import UserProvider from "./componentes/UserProvider.jsx";
import "./firabase.js";
function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <UserProvider>
          <Header />
          <Main />
          <Footer />
        </UserProvider>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App;