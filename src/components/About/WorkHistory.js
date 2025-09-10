import { Container, Image, Row } from "react-bootstrap"

export default function WorkHistory()
{
    return (<>
        <Container className="card">
            <span className="fs-2 fw-bold">Work History</span>
            <Row>
                <Image className="workIconBadge" src={require(`../../resources/pictures/about/work/govcanlogo.png`)} />
            </Row>
            <Row>
                <Image className="workIconBadge" src={require(`../../resources/pictures/about/work/mhilogo.png`)} />
                <Image className="workIconBadge" src={require(`../../resources/pictures/about/work/pscadlogo.png`)} />
            </Row>
            <Row>
                <Image className="workIconBadge" src={require(`../../resources/pictures/about/work/govmanlogo.png`)} />
            </Row>
        </Container>
    </>)
}