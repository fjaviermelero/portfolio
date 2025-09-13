import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Home} from "./pages/Home"
import {NotFound} from "./pages/NotFound"
import IndustrialPrediction from "./pages/IndustrialPrediction"
// import ChatCoachPage from "./pages/ChatCoachPage"

function App() {
   return (
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path = "*" element={<NotFound/>} />
          <Route path="/project/IndustrialPrediction" element={<IndustrialPrediction />} />
          <Route path="/project/ChatCoach" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
