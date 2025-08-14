import { useEffect } from "react"
import { Outlet } from "react-router";
import { Row, Col, Container } from "react-bootstrap"

export default function Contact()
{
    useEffect(() => {document.title = "EG | Contact"})

    return(<>
        <Container className="card">
            <span className="fs-1 fw-bold">HMU</span>
            <Row>
                <p>Want to reach out to discuss emploment or freelance opportunities, my projects, or just shoot the breeze? Feel free to contact me below!</p>
            </Row>
            <Row>
                
            </Row>
            <Outlet />
        </Container>
    </>)
}
