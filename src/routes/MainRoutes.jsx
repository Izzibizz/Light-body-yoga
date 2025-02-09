
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { NotFound } from "../pages/NotFound";
import { About } from "../pages/About"

export const MainRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/*" element={<NotFound/>}/>
        </Routes>
    </div>
  )
}

