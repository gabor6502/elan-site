import { useEffect } from "react"
import { Row, Col, Container, Image } from "react-bootstrap"

export default function Home()
{
    useEffect(() => {document.title = "Elan Gabor"})

    return (<>
        <Container>
            <Image style={{width: "10%", height: "10%"}} thumbnail src={require("../sitepfp.jpg")}/>
        </Container>
    </>)
}
