import { useEffect } from "react"
import { Row, Container } from "react-bootstrap"

import Bio from "../components/Home/Bio"
import ProjectShowcase from "../components/Home/ProjectShowcase"

export default function Home()
{
    useEffect(() => {document.title = "Elan Gabor"})

    return (<>
        <Container>
            <Row>
                <Bio />
                <ProjectShowcase />
            </Row>
        </Container>
    </>)
}
