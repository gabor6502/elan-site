import { useEffect, useState } from "react"
import { Link, useLocation  } from "react-router"
import { Container, Image, Row, Col } from "react-bootstrap"

import "./header.css"

function setClicked(pathname, linkto)
{
    if (linkto !== "/" && pathname === linkto)
    {
        return "headerClicked"
    }
}

export default function Header()
{
    const openLinkedInProfile = () => { window.open("https://www.linkedin.com/in/elan-gabor/", "_blank", "noopener,noreferrer") }
    const openGitHubProfile = () => { window.open("https://github.com/gabor6502/", "_blank", "noopener,noreferrer") }

    const currPath = useLocation().pathname

    const [pagelinks] = useState([
        {key:0, to: "/about", content: "About"},
        {key:1, to: "/contact", content: "Contact"}
    ])

    useEffect(() => {
        // do nothing, we want to re-render with proper indication in the header as to which page the user is on
    }, [currPath])

    return (<>
    <nav id="header">
        <Container>
            
                <Row>
                    <Col>
                        <Link className="undecLink" to="/">
                            <span className={"fs-1 fw-bold headerClickable "+setClicked(currPath, "/")}>Elan Gabor</span>
                        </Link>
                    </Col>
                    <Col id="links">
                        <span>
                            {
                                pagelinks.map((link) => 
                                {
                                    return (<><Link className="undecLink" to={link.to}>
                                                <span className={" headerClickable " + setClicked(currPath, link.to)}>
                                                    {link.content}
                                                </span>
                                            </Link></>)
                                })
                            }

                            <Image id="linkedIn" rounded src={require("../../resources/pictures/linkedinIcon.ico")} onClick={openLinkedInProfile} title="Open LinkedIn profile" alt="LinkedIn logo" />
                            <Image id="GitHub" rounded src={require("../../resources/pictures/githubIcon.ico")} onClick={openGitHubProfile} title="Open GitHub profile" alt="GitHub logo" />
                        </span>
                    </Col>
                </Row>
            
        </Container>
        </nav>
    </>)
}

// old header code
/*
return(<>
        <nav id="header" className="text-center">

            <span id="links">
            {
                links.map((link) => 
                {
                    return (<><Link className="undecLink" to={link.to}>
                                <span className={link.classNameAddon + " headerClickable " + setClicked(location.pathname, link)}>
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
    */