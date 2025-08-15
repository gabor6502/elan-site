import { Image } from "react-bootstrap"

export default function TechIconBadge({name})
{
    return(<>
        <Image className="techIconBadge" src={require(`../../resources/pictures/techbadges/${name}.png`)} alt={name + " logo"} title={name}/>
    </>)
}