import { Row, Container, Image } from "react-bootstrap"

export default function Education()
{
    return (<>
        <Container className="card">
            <span className="fs-2 fw-bold">Education</span>
            <Row>
               <div className="educationEnty">
                    <Image id="uofwLogo" className="educationIconBadge" src={require(`../../resources/pictures/about/education/uwclogo.png`)} alt="UW Logo"/>
                    <span>
                        <div className="fs-4 fw-bold">University of Winnipeg Collegiate (2018)</div>
                        <div className="fs-5">High School Diploma</div>
                    </span>
                </div>
            </Row>
            <Row>
                <div className="educationEnty">
                    <Image id="uofmLogo" className="educationIconBadge" src={require(`../../resources/pictures/about/education/uofmlogo.png`)} alt="UM Logo"/>
                    <span>
                        <div className="fs-4 fw-bold">University of Manitoba (2025)</div>
                        <div className="fs-5">BSc. in Computer Science (co-op), minor in Mathematics</div>
                    </span>
                </div>
            </Row>
        </Container>
    </>)
}