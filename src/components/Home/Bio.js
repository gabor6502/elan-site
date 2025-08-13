import { Row, Col, Container, Image } from "react-bootstrap"

export default function Bio()
{
    return (<>
        <Container className="card">
                <Row>
                    <Col>
                        <Image rounded style={{width: 200, height: 200}} src={require("../../resources/sitepfp.jpg")}/>
                    </Col>
                </Row>
        </Container>
    </>)
}