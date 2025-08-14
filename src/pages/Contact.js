import { useEffect } from "react"
import { Outlet } from "react-router";
import { Row, Container } from "react-bootstrap"
import ContactForm from "../components/Contact/ContactForm";

export default function Contact()
{
    useEffect(() => {document.title = "EG | Contact"})

    return(<>
        <Container className="card">
            <Row>
                <span className="fs-1 fw-bold">Hmu!</span>
                <p>Want to reach out to discuss emploment or freelance opportunities, my projects, or just shoot the breeze? Feel free to contact me below:</p>
            </Row>

            <ContactForm />

            <Outlet />
        </Container>
    </>)
}
