import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Home} from "./pages/Home"
import {NotFound} from "./pages/NotFound"
import DemandPrediction from "./pages/DemandPrediction"

function App() {
   return (
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path = "*" element={<NotFound/>} />
          <Route path="/project/:projectId" element={<DemandPrediction />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
