import { useState } from "react"
import { Row, Col, Container, Image, Button } from "react-bootstrap"
import TechIconBadge from "./TechIconBadge"

export default function Project({project})
{

    const [viewMore, setViewMore] = useState(false)

    const toggleView = () => {
        setViewMore(!viewMore)
    }

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
                {
                    viewMore ?
                    <Row>
                        <Col>
                            <Image className="projImg" src={require(`../../resources/pictures/projectPics/${project.galleryImages[0]}`)} alt={project.name+"0"}/> 
                        </Col>
                    </Row> 
                    
                    : null
                }

                <Row>
                    <Button onClick={toggleView} className="mt-2" variant="success">Reveal...</Button>
                </Row>
                
            </Container> 
        </>)
}