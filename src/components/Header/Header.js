import { Link } from "react-router"
import { Row, Col, Container } from "react-bootstrap"

import "./header.css"

export default function Header()
{
    return(<>
        <Container id="header">
            <h1><i><Link class="undecLink" to="/"><span>Elan Gabor</span></Link></i></h1>
            <nav>
                <Row >
                    <span id="links">
                        <Link class="undecLink" to="/projects"><span>Projects</span></Link>
                        <Link class ="undecLink" to="/about"><span>About</span></Link>
                        <Link class="undecLink" to="/contact"><span>Contact</span></Link>
                    </span>
                </Row>
            </nav>
        </Container>
    </>)
}