
export default function CodeLinkButton({name, link})
{
    const goToRepo = (url) => 
    {
        window.open(url, "_blank", "noopener,noreferrer")
    }

    return (<>
        <span className={"repoLinkButton"} onClick={() => {goToRepo(link)}}>{name}</span>
    </>)
}