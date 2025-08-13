import { Link } from "react-router"

import "./header.css"

export default function Header()
{
    return(<>
        <nav id="header" className="text-center">
            <span id="links">
                <Link class="undecLink" to="/"><span className="fs-1"><b>Elan Gabor</b></span></Link>
                <Link class="undecLink" to="/projects"><span>Projects</span></Link>
                <Link class ="undecLink" to="/about"><span>About</span></Link>
                <Link class="undecLink" to="/contact"><span>Contact</span></Link>
            </span>
        </nav>
    </>)
}