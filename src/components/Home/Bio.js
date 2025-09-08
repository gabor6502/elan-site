import { Row, Col, Container, Image } from "react-bootstrap"

export default function Bio()
{
    return (<>
        <Container className="card">
                    <Row>
                        <span className="fs-2 fw-bold">Bio</span>
                    </Row>
                    <Row>
                        <Col className="d-inline-flex">
                            <Image rounded style={{width: 200, height: 200, "margin-right": "15px"}} src={require("../../resources/pictures/sitepfp.jpg")} alt="A picture of me"/>
                            <span>
                                <p>
                                    Hi! My name is Elan, and I am a recent graduate of computer science from the University of Manitoba. 
                                    I have 12 months of professional software development expirience through my university's co-op program,
                                    where I had the chance to work with C/C++, Grails, NestJS, Node.js, React.js, and Spring. 
                                </p>
                                <p>
                                    Aside from my co-op expirience, I have been programming and learning computer science for 10+ years. 
                                    I have embarked on personal projects with Angular, CUDA, JOGL, OpenGL, and the afformentioned lanugages.
                                </p>
                                <p>
                                    another paragraph
                                </p>
                            </span>
                        </Col>
                    </Row>
        </Container>
    </>)
}