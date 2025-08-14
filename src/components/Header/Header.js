import { useEffect, useState } from "react"
import { Link, useLocation  } from "react-router"
import { Image } from "react-bootstrap"

import "./header.css"

function setClicked(pathname, link)
{
    if (link.to !== "/" && pathname === link.to) // not a fan of the way the box looks around the home button, but others are good
    {
        return "clicked"
    }
}

export default function Header()
{
    const openLinkedInProfile = () => { window.open("https://www.linkedin.com/in/elan-gabor/", "_blank", "noopener,noreferrer") }
    const openGitHubProfile = () => { window.open("https://github.com/gabor6502/", "_blank", "noopener,noreferrer") }

    const location = useLocation() // expecting object with 'pathname' as property

    const [links] = useState([
        {to: "/", content: "Elan Gabor", classNameAddon: "fs-1 fw-bold"},
        {to: "/projects", content: "Projects", classNameAddon: ""},
        {to: "/about", content: "About", classNameAddon: ""},
        {to: "/contact", content: "Contact", classNameAddon: ""}
    ])

    useEffect(() => {
        // do nothing, we want to re-render with proper indication in the header as to which page the user is on
    }, [location])

    return(<>
        <nav id="header" className="text-center">

            <span id="links">
            {
                links.map((link) => 
                {
                    return (<><Link className="undecLink" to={link.to}>
                                <span className={link.classNameAddon + " clickable " + setClicked(location.pathname, link)}>
                                    {link.content}
                                </span>
                            </Link></>)
                })
            }
            </span>

            <Image id="linkedIn" rounded src={require("../../resources/pictures/linkedinIcon.ico")} onClick={openLinkedInProfile} title="Open LinkedIn profile" alt="LinkedIn logo" />
            <Image id="GitHub" rounded src={require("../../resources/pictures/githubIcon.ico")} onClick={openGitHubProfile} title="Open GitHub profile" alt="GitHub logo" />
        </nav>

    </>)
}