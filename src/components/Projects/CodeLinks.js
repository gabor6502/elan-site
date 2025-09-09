import { useEffect, useState } from "react"

export default function CodeLinks({linkSet})
{
    const [links, setLinks] = useState([])
        
    useEffect(() => 
    {
        setLinks(linkSet.map((linkObj) => 
        {
            return {linkName: Object.keys(linkObj)[0], link: linkObj.link}
        }))
    }, [linkSet, links])

    return (<>
        <span>
            {
                links.map((linkObj) => { return <p>{linkObj.linkName}</p>})
            }
        </span>
    </>)
}