import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Home from "./pages/home"
import { FC } from "react"
import NotFound from "./pages/notFound"

const App:FC = () => {
  return (
    <BrowserRouter>
    <div className="min-h-screen text-white">
    <Header/>


    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
