import { Row, Col, Container } from "react-bootstrap"
import ProjectPreviewCard from "../Projects/ProjectPreviewCard"

export default function ProjectShowcase()
{
    return(<>
        <Container className="card">
            <Row>
                <Col>
                    <ProjectPreviewCard index={0} />
                </Col>
            </Row>
        </Container>
    </>)
}