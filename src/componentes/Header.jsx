import { Link, Route, Routes } from "react-router-dom"
import NavBar from "./NavBar"
import { PackageOpen, Search } from "lucide-react"

function Header() {
  return (
    <header className="flex justify-between p-4">
      <h1 className="flex items-center gap-2 font-bold text-2xl">
        <PackageOpen />
        CoderCommerce
      </h1>
      <Routes>
        <Route path="/productos" element={
          <div className="lg:flex items-center gap-2 hidden">
            <input placeholder="Buscar..." className="px-2 py-1 rounded-lg" />
            <Search />
          </div>
        } />
      </Routes>
      <NavBar isHeader={true} />
    </header>
  )
}

export default Header