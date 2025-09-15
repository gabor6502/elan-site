import { Container, Image } from "react-bootstrap"

export default function Personal()
{

    return (<>
        <Container className="card">
            <span className="fs-2 fw-bold">Bio</span>
            <span id="elanPicsContainer" className="mt-2">
                <Image id="fade1" className="elanPic" src={require("../../resources/pictures/about/me/bike.jpg")}/>
                <Image id="fade2" className="elanPic" src={require("../../resources/pictures/about/me/ipluseplane.jpg")}/>
                <Image id="fade3" className="elanPic" src={require("../../resources/pictures/about/me/guitar.jpg")}/>
                <Image id="fade4" className="elanPic" src={require("../../resources/pictures/about/me/car.jpg")}/>
            </span>
            <span className="mt-2">
                <p>
                    My life outside tech is also exciting and rewarding! I used to run my own guitar teaching business and 
                    played in a band for a few years, where I also managed the Instagram and booked shows.  
                    My friend and I also maintain our own cars which is a great way to learn systems beyond computer science. 
                    Some of my hobbies include guitar, biking, boxing, and every so often I fly in a Cessna!
                    I dog sit on the side too, which is a very rewarding responsibility.
                </p>
            </span>
        </Container>
    </>)
}