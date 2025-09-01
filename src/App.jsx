import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Home} from "./pages/Home"
import {NotFound} from "./pages/NotFound"
import IndustrialPrediction from "./pages/IndustrialPrediction"

function App() {
   return (
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path = "*" element={<NotFound/>} />
          <Route path="/project/:projectId" element={<IndustrialPrediction />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
