import css from "./App.css"
import { AppProvider } from "./AppContext";
import Products from "./components/Products";
import { Link, Routes, Route } from "react-router-dom"
import Shopping from "./components/Shopping"

function App(){
  return(
    <div>
      <AppProvider>
        <Link to="/shopping">Shopping</Link>
        <Routes> 
            <Route path="/" element={<Products/>}></Route>
            <Route path="/shopping" element={<Shopping/>}></Route>
        </Routes>
      </AppProvider>
    </div>
  )
}
export default App