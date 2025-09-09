import { useEffect, useState } from "react"
import { Row, Container } from "react-bootstrap"
import TechIconBadge from "./TechIconBadge"

export default function Project({project})
{
    
    const [links, setLinks] = useState([])
    
    useEffect(() => 
    {
        setLinks(project.repository.map((linkObj) => 
        {
            return {linkName: Object.keys(linkObj)[0], link: linkObj.link}
        }))
    }, [project, links])

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
                    <span>{project.headline}</span>
                    <span>
                        {
                            links.map((linkObj) => { return <p>{linkObj.linkName}</p>})
                        }
                    </span>
                </Row>
            </Container> 
        </>)
}