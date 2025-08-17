import { Row, Col, Container, Image } from "react-bootstrap"
import TechIconBadge from "./TechIconBadge"

export default function Project({project})
{
    return (
        <>
            <Container className="card">
                <Row>
                    <span>
                        <span className="fs-3 fst-italic fw-bold">{project.name}</span>
                        <span className="badgeRow">
                            {
                            project.techStack.map((techname) => {return <TechIconBadge name={techname}/>})
                            }
                        </span>
                    </span>
                </Row>
                <Row>
                    <Col>
                    <span>{project.headline}</span>
                    </Col>
                </Row>
            </Container> 
        </>)
}