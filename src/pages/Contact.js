import { useEffect } from "react"
import { Outlet } from "react-router";
import { Row, Col, Container } from "react-bootstrap"

export default function Contact()
{
    useEffect(() => {document.title = "EG | Contact"})

    return(<>
        <Container>
            <h2>Contact</h2>
            <Outlet />
        </Container>
    </>)
}
