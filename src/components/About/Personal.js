import { Container, Image } from "react-bootstrap"

export default function Personal()
{

    return (<>
        <Container className="card">
            <span className="fs-2 fw-bold">Bio</span>
            <span id="elanPicsContainer">
                <Image id="fade1" className="elanPic" src={require("../../resources/pictures/about/me/bike.jpg")}/>
                <Image id="fade2" className="elanPic" src={require("../../resources/pictures/about/me/ipluseplane.jpg")}/>
                <Image id="fade3" className="elanPic" src={require("../../resources/pictures/about/me/guitar.jpg")}/>
                <Image id="fade4" className="elanPic" src={require("../../resources/pictures/about/me/car.jpg")}/>
            </span>


        </Container>
    </>)
}