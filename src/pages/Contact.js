import { useEffect, useState } from "react"
import { Outlet } from "react-router";
import { Row, Col, Container, Form, InputGroup } from "react-bootstrap"

export default function Contact()
{
    useEffect(() => {document.title = "EG | Contact"})

    const [validated, setValidated] = useState(false)

    return(<>
        <Container className="card">
            <span className="fs-1 fw-bold">Hmu!</span>
            <Row>
                <p>Want to reach out to discuss emploment or freelance opportunities, my projects, or just shoot the breeze? Feel free to contact me below:</p>
            </Row>
            <Row>
                <Form>
                    
                </Form>
            </Row>
            <Outlet />
        </Container>
    </>)
}
