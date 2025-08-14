import { useEffect } from "react"
import { Outlet } from "react-router";
import { Row, Col, Container } from "react-bootstrap"

export default function About()
{
    useEffect(() => {document.title = "EG | About"})

    return(<>
        <Container className="card">
            <h2>About</h2>
            <Outlet />
        </Container>
    </>)
}
