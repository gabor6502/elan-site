import { Row, Col, Container } from "react-bootstrap"

export default function ProjectPreviewCard({project})
{
    return (
        <>
            <Container className="card">
                <Row>
                    <Col> 
                        <p>{project.name}</p>
                    </Col>
                </Row>
            </Container> 
        </>)
}