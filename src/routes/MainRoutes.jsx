
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { NotFound } from "../pages/NotFound";
import { About } from "../pages/About"
import { OfficeYoga } from "../pages/OfficeYoga"
import { PrivateSession } from "../pages/PrivateSession"
import { Schedule } from "../pages/Schedule"
import { Treatments } from "../pages/Treatments"
import { Workshops } from "../pages/Workshops";
import { Contact } from "../pages/Contact"
import { Retreats } from "../pages/Retreats";

export const MainRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<LandingPage/>}/>
        
        <Route path="/treatments" element={<Treatments/>}/>
        <Route path="/schedule" element={<Schedule/>}/>
        <Route path="/private-session" element={<PrivateSession/>}/>
        <Route path="/office-yoga" element={<OfficeYoga/>}/>
        <Route path="/workshops" element={<Workshops/>}/>
        <Route path="/retreats" element={<Retreats/>}/>
        <Route path="/*" element={<NotFound/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </div>
  )
}

