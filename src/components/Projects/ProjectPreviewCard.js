import { Row, Col, Container } from "react-bootstrap"
import {useEffect, useState} from "react"
import useStore from "./ProjectsStore"

export default function ProjectPreviewCard({index})
{
    const { getProject } = useStore()
    const [project, setProject] = useState({})
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        
        try
        {
            setProject(getProject(index))
            setVisible(true)
        }
        catch (projectOutOfBoundsError)
        {
            setVisible(false)
        }

    }, [index, getProject])

    return (<>{visible ? 
                <Container className="card">
                    <Row>
                        <Col> 
                            <p>{project.name}</p>
                        </Col>
                    </Row>
                </Container> 
                : null
                }
            </>)
}