import { Row, Col, Container, Image } from "react-bootstrap"
import TechIconBadge from "./TechIconBadge"

export default function Project({project})
{
    return (
        <>
            <Container className="card">
                <Row>
                    <Col xs={2}> 
                        <span className={"fs-5 fst-italic fw-bold"}>{project.name}</span>
                    </Col>
                    <Col>
                        {
                        project.techStack.map((techname) => {return <TechIconBadge name={techname}/>})
                        }
                    </Col>
                </Row>
                <Row className="d-inline-flex">
                    <Image />
                </Row>
            </Container> 
        </>)
}