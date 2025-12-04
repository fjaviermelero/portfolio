import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Home} from "./pages/Home"
import {NotFound} from "./pages/NotFound"
import {ChatCoachLogin} from "./pages/ChatCoachLogin"
import {ChatCoachSelect} from "./pages/ChatCoachSelect"
import {ChatCoachCorrections} from "./pages/ChatCoachCorrections"
import IndustrialPrediction from "./pages/IndustrialPrediction"
import ChatCoachPage from "./pages/ChatCoachPage"
import NowNews from "./pages/NowNews"

function App() {
   return (
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path = "*" element={<NotFound/>} />
          <Route path="/project/IndustrialPrediction" element={<IndustrialPrediction />} />
          <Route path="/project/ChatCoachLogin" element={<ChatCoachLogin />} />
          <Route path="/project/ChatCoachSelect/:user" element={<ChatCoachSelect />} />
          <Route path="/project/ChatCoachCorrections/:user/:language" element={<ChatCoachCorrections />} />
          <Route path="/project/ChatCoachPage/:user/:conversation" element={<ChatCoachPage />} />
          <Route path="/project/NowNews" element={<NowNews />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
