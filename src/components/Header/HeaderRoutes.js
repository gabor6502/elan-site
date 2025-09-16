import { Routes, Route } from "react-router"

import Home  from "../../pages/Home"
import About from "../../pages/About"
import Contact from "../../pages/Contact"

export default function HeaderRoutes()
{
    return (<>
        <Routes>
            <Route exact path="" element={<Home />} />
            <Route exact path="about" element={<About />} />
            <Route exact path="contact" element={<Contact /> } />
        </Routes>
    </>)
}