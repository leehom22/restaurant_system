import { Navigate, Route, Router, Routes, useNavigate } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Menu from "./pages/user/Menu"
import Checkout from "./pages/user/Checkout"
import Register from "./pages/user/Register"

function App() {
  

  return (
    
     <Routes>
        //** User Routes */
        <Route path="/" element={
          <div className="flex flex-col min-h-screen ">
            <Navbar/> 
                <main className="grow">
                    <Home/>
                </main>
            <Footer/>
          </div>
        }/>

        <Route path="/menu" element={
          <div className="flex flex-col min-h-screen">
              <Navbar/>
                  <main className="grow">
                      <Menu/>
                  </main>
              <Footer/>
          </div>
        }/>

        <Route path="/checkout" element={
          <div className="flex flex-col min-h-screen">
              <Navbar/>
                  <main className="grow">
                      <Checkout/>
                  </main>
              <Footer/>
          </div>
        }/>

        <Route path="/register" element={
          <div className="flex flex-col min-h-screen">
              <Navbar/>
                  <main className="grow">
                      <Register/>
                  </main>
              <Footer/>
          </div>
        }/>

        //** Default Routes */
        <Route path="*" element={<Navigate to='/' replace />}/>
     </Routes>

  )
}

export default App
