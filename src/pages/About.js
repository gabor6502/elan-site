import { useEffect } from "react"
import { Outlet } from "react-router";
import { Container } from "react-bootstrap"
import Personal from "../components/About/Personal";
import Education from "../components/About/Education";
import WorkHistory from "../components/About/WorkHistory";

export default function About()
{
    useEffect(() => {document.title = "EG | About"})

    return(<>
        <Container >
            <Personal />
            <Education />
            <WorkHistory />
            
            <Outlet />
        </Container>
    </>)
}
