import Navbar from "../src/components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import './App.css'


function App() {

  return (
    <div className="App">
      <header>
       <Navbar/>
      </header>
      
      <main className="conteiner">
        <Outlet />
      </main>

    </div>
  )
}

export default App
