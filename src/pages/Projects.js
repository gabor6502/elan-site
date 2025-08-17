import { useEffect } from "react"
import { Outlet } from "react-router"
import { Container } from "react-bootstrap"

import Project from "../components/Projects/Project"
import useStore from "../components/Projects/ProjectsStore"

export default function Projects()
{
    const { getProjects } = useStore();

    useEffect(() => {document.title = "EG | Projects"})

    return(<>
        <Container className="card">
            <span className="fs-1 fw-bold">Projects</span>
            <span id="projectsGrid"> 
                {
                    getProjects().map((project) => {
                        return <Project project={project} />
                    })
                }
            </span>
            
            <Outlet />
        </Container>
    </>)
}
