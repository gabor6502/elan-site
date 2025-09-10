import { Row, Container, Image } from "react-bootstrap"

export default function Education()
{
    return (<>
        <Container className="card">
            <span className="fs-2 fw-bold">Education</span>
            <Row>
                <Image className="educationIconBadge" src={require(`../../resources/pictures/about/education/uwclogo.png`)} />
            </Row>
            <Row>
                <Image className="educationIconBadge" src={require(`../../resources/pictures/about/education/uofmlogo.png`)} />
            </Row>
        </Container>
    </>)
}