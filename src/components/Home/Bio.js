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
                                    Hi! My name is Elan, and I am a recent graduate of computer science from the University of Manitoba, with a minor in mathematics. 
                                    I have 12 months of professional software development expirience through my university's co-op program,
                                    where I had the chance to work with C/C++, Grails, NestJS, Node.js, React.js, and Spring. Aside from my co-op expirience, I have 
                                    been programming and learning computer science for 10+ years, and continue to learn through various personal projects. 
                                </p>
                                <p>
                                    As a dedicated and passionate software developer, I'm excited to start the next chapter, and have been looking for a company to 
                                    start my career with. I am lookign forward to making meaningful contributions alongside a motivated and knowledgeable team. 
                                </p>
                                <p>
                                    Thanks for checking out the site!
                                </p>
                            </span>
                        </Col>
                    </Row>
        </Container>
    </>)
}