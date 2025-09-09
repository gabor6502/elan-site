import { Row, Col, Container } from "react-bootstrap"
import TechIconBadge from "./TechIconBadge"
import CodeLinks from "./CodeLinks"

export default function Project({project})
{

    return (<>
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
                    <span className="fw-bold">{project.headline}</span>
                </Row>
                <Row>
                    <Col>
                        {/*<span className="fs-6 fw-bold">Challenges</span>*/}
                        <ul>
                        {
                        project.technicalPoints.map((point) => {return <li>{point}</li>})
                        }
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <CodeLinks linkSet={project.repository}/>
                </Row>
            </Container> 
        </>)
}