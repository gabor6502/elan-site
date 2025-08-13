import { Link } from "react-router"

import "./header.css"

export default function Header()
{
    return(<>
        <nav id="header" className="text-center">
            <span id="links">
                <Link class="undecLink" to="/"><span className="fs-1 fw-bold clickable">Elan Gabor</span></Link>
                <Link class="undecLink" to="/projects"><span className="clickable">Projects</span></Link>
                <Link class ="undecLink" to="/about"><span className="clickable">About</span></Link>
                <Link class="undecLink" to="/contact"><span className="clickable">Contact</span></Link>
            </span>
        </nav>
    </>)
}