import { useEffect } from "react"
import { Outlet } from "react-router";
import { Container, Row } from "react-bootstrap"

export default function About()
{
    useEffect(() => {document.title = "EG | About"})

    return(<>
        <Container className="card">
            <Row>
                <span className="fs-1 fw-bold">About</span>
                
            </Row>
        
            <Outlet />
        </Container>
    </>)
}
