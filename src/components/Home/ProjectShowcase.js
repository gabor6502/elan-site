import {useState} from "react"
import { Row, Col, Container } from "react-bootstrap"
import ProjectPreviewCard from "../Projects/ProjectPreviewCard"

export default function ProjectShowcase()
{
    const MAX_SHOWCASE = 5
    const [currProject, setCurrProject] = useState(0)

    return(<>
        <Container className="card">
            <Row>
                <Col>
                    <ProjectPreviewCard index={0} />
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