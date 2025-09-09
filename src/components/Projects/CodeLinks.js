import { useEffect, useState } from "react"
import { Image } from "react-bootstrap"
import CodeLinkButton from "./CodeLinkButton"

export default function CodeLinks({linkSet})
{
    const [links, setLinks] = useState([])
        
    useEffect(() => 
    {
        setLinks(linkSet.map((linkObj) => 
        {
            let key = Object.keys(linkObj)[0]
            return {name: key, url: linkObj[key]}
        }))
    }, [linkSet])

  

    return (<>
        <div>
            <span className="repoLinksContainer">
                <Image className={"repobadge"} src={require(`../../resources/pictures/git.png`)} alt={"repo logo"} />
                {
                links.map((link) => { return <CodeLinkButton name={link.name} link={link.url}/>})
                }
            </span>
        </div>
    </>)
}