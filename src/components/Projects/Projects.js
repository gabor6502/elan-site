import { useEffect } from "react"
import { Container } from "react-bootstrap"

import Project from "./Project"
import useStore from "./ProjectsStore"

export default function Projects()
{
    const { getProjects } = useStore();

    useEffect(() => {document.title = "EG | Projects"})

    return(<>
        <Container className="card">
            <span className="fs-2 fw-bold">Projects</span>
            <span id="projectsGrid"> 
                {
                    getProjects().map((project) => {
                        return <Project project={project} />
                    })
                }
            </span>
        </Container>
    </>)
}
