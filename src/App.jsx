import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Home} from "./pages/Home"
import {NotFound} from "./pages/NotFound"
import {ChatCoachLogin} from "./pages/ChatCoachLogin"
import {ChatCoachSelect} from "./pages/ChatCoachSelect"
import IndustrialPrediction from "./pages/IndustrialPrediction"
// import ChatCoachPage from "./pages/ChatCoachPage"

function App() {
   return (
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path = "*" element={<NotFound/>} />
          <Route path="/project/IndustrialPrediction" element={<IndustrialPrediction />} />
          <Route path="/project/ChatCoach" element={<ChatCoachLogin />} />
          <Route path="/project/ChatCoachSelect/:user" element={<ChatCoachSelect />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
