import { Row, Col, Container } from "react-bootstrap"

export default function ProjectShowcase()
{

    return(<>
        <Container className="card">
            <Row>
                <span className="fs-3 fw-bold">Fractal Generator</span>
            </Row>
            <Row className="card">
                <Col>
                   put small image panels here
                </Col>
            </Row>
            <Row>
                <span id="projectPreviewButtons">
                    <input type="radio" name="projButtons"/>
                    <input type="radio" name="projButtons"/>
                    <input type="radio" name="projButtons"/>
                    <input type="radio" name="projButtons"/>
                    <input type="radio" name="projButtons"/>
                </span>
            </Row>
        </Container>
    </>)
}