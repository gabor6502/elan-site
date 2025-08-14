import { useEffect } from "react"
import { Outlet } from "react-router";
import { Row, Col, Container } from "react-bootstrap"

export default function Projects()
{
    useEffect(() => {document.title = "EG | Projects"})

    return(<>
        <Container className="card">
            <h2>Projects</h2>
            <Outlet />
        </Container>
    </>)
}
