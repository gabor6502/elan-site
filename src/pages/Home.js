import { useEffect } from "react"

import Bio from "../components/Home/Bio"
import ProjectShowcase from "../components/Home/ProjectShowcase"

export default function Home()
{
    useEffect(() => {document.title = "Elan Gabor"})

    return (<>
        <Bio />
        <ProjectShowcase />
    </>)
}
