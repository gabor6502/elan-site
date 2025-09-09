import { Container } from "react-bootstrap"

import Project from "./Project"
import useProjectStore from "./ProjectsStore"

export default function Projects()
{
    const { getProjects } = useProjectStore();

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
