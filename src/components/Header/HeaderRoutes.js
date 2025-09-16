import { Routes, Route } from "react-router"

import Home  from "../../pages/Home"
import About from "../../pages/About"
import Contact from "../../pages/Contact"

export default function HeaderRoutes()
{
    return (<>
        <Routes>
            <Route exact path="/elan-site/" element={<Home />} />
            <Route exact path="/elan-site/about" element={<About />} />
            <Route exact path="/elan-site/contact" element={<Contact /> } />
        </Routes>
    </>)
}