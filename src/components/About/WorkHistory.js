import { Container, Image, Row } from "react-bootstrap"

export default function WorkHistory()
{
    return (<>
        <Container className="card">
            <span className="fs-2 fw-bold">Work History (co-op)</span>
            <Row className="workEntry">
                <Image id="govCanBadge" className="workIconBadge" src={require(`../../resources/pictures/about/work/govcanlogo.png`)} alt="Agriculture and Agri-Food Canada" title="Agriculture and Agri-Food Canada"/>
                <span className="fs-4 fw-bold">Agriculture and Agri-Food Canada (Summer 2024)</span>
                <div>
                    <ul>
                        <li>Developed back-end REST applications in Java Spring, Express.js and NestJS (containerizing the latter two with Podman) to help facilitate the delivery of a key government program.</li>
                        <li>Secured each endpoint by implementing Role-based Access Control in Spring and Typescript, to ensure that only authorized users could access the services the app would provide.</li>
                        <li>Wrote and ran comprehensive unit and integration tests to guarantee proper functionality of all applications.</li>
                        <li>Programmed a React.js application that provided executives with a visualization of a future product.</li>
                    </ul>
                </div>
            </Row>
            <Row className="workEntry">
                <Image id="mhiBadge" className="workIconBadge" src={require(`../../resources/pictures/about/work/mhilogo.png`)} alt="Manitoba Hydro International" title="Manitoba Hydro International"/>
                <span className="fs-4 fw-bold">Manitoba Hydro International (Fall 2023)</span>
                <div>
                    <ul>
                        <li>Led development of a user prediction feature for PSCAD (a power systems/electrical circuitry CAD application) that would make it faster and easier for users to design circuits.</li>
                        <li>Engineered optimal algorithms/procedures needed with C++, such as an algorithm to find all possible placements an electrical component could fit within a circuit diagram, ensuring the feature ran quickly and correctly.</li>
                        <li>Updated the team in biweekly meetings and formally presented the feature to an internal company audience.</li>
                    </ul>
                </div>
            </Row>
            <Row className="workEntry">
                <Image id="govManBadge" className="workIconBadge" src={require(`../../resources/pictures/about/work/govmanlogo.png`)} alt="Government of Manitoba" title="Government of Manitoba"/>
                <span className="fs-4 fw-bold">Government of Manitoba (Winter 2023)</span>
                <div>
                    <ul>
                        <li>Produced and updated web forms, using HTML, CSS, and JavaScript, to facilitate the delivery of various government programs and services from departments/clients to countless members of the general public.</li>
                        <li>Innovated new tools to expedite form production and maintenance, including a partially automated French  translator for form content and scripts for aiding with the designing, building, and testing of forms.</li>
                        <li>Performed thorough testing of forms, XML schemas, and CSV output, ensuring proper form functionality</li>
                    </ul>
                </div>
            </Row>
        </Container>
    </>)
}