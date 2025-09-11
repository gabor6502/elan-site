import { Container, Image, Row } from "react-bootstrap"

export default function WorkHistory()
{
    return (<>
        <Container className="card">
            <span className="fs-2 fw-bold">Work History (co-op)</span>
            <Row>
                <Image id="govCanBadge" className="workIconBadge" src={require(`../../resources/pictures/about/work/govcanlogo.png`)} />
            </Row>
            <Row>
                <Image id="mhiBadge" className="workIconBadge" src={require(`../../resources/pictures/about/work/mhilogo.png`)} />
            </Row>
            <Row>
                <Image id="govManBadge" className="workIconBadge" src={require(`../../resources/pictures/about/work/govmanlogo.png`)} />
            </Row>
        </Container>
    </>)
}