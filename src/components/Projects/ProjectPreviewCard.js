import { Row, Col, Container } from "react-bootstrap"
import useStore from "./ProjectsStore"

export default function ProjectPreviewCard({index})
{
    const {project} = useStore((state) => {state.getProject(index)})

    return (<>
        <Container className="card">
            <Row>
                <Col>
                    <p>{project.name}</p>
                </Col>
            </Row>
        </Container>
    </>)
}