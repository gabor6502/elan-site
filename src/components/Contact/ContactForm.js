import { useState } from "react"
import { Row, Col, Form, InputGroup, Button, Alert } from "react-bootstrap"
import WordCountTextarea from "./WordCountTextarea"
import sendMessage from "./ContactAPI"

const FNAME_ID = "firstName"
const LNAME_ID = "lastName"
const EMAIL_ID = "email"
const MESSAGE_ID = "message"


export default function ContactForm()
{
    const [validated, setValidated] = useState(false)
    const [showSentAlert, setShowSentAlert] = useState(false)
    const [succAlert, setSuccAlert] = useState(false)

    const handleSubmit = async (event) => 
    {
        const form = event.target

        if (!form.checkValidity()) 
        {
            event.preventDefault()
            event.stopPropagation()

            setValidated(true)
        }
        else
        {
            // we want to show an alert after sending a message, and default submit behaviour prevents this as it reloads the page completely
            event.preventDefault()
            event.stopPropagation()

            // organize the fields and inputs in a dictionary to make calling the API easier
            const inputs = event.target.querySelectorAll("input, textarea")
            const formData = {}
            let sendSuccess

            inputs.forEach((input) => {formData[input.id] = input.value})

            inputs.forEach((input) => {input.value = ""}) // wipe since we're done collecting the data

            sendSuccess = sendMessage(formData[FNAME_ID], formData[LNAME_ID], formData[EMAIL_ID], formData[MESSAGE_ID])

            setSuccAlert(sendSuccess)
            setShowSentAlert(true)

            setValidated(false) // turns off validation decoration since we're done  with it
        }

        
    }


    return(<>
        <Alert show={showSentAlert} variant={succAlert ? "success" : "danger"} onClose={() => setShowSentAlert(false)} dismissible>
            <Alert.Heading>
                Message sent {succAlert ? "successfuly!" : "unsuccessfully."}
            </Alert.Heading>
        </Alert>
        <Row className="p-2">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                    <Form.Group as={Col} controlId={FNAME_ID}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control required type="text" pattern="[\w\-]+" placeholder="Enter your first name"/>
                        <Form.Control.Feedback type="invalid">Please enter your first name.</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId={LNAME_ID}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control required type="text" pattern="[\w\-]+" placeholder="Enter your last name"/>
                        <Form.Control.Feedback type="invalid">Please enter your last name.</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId={EMAIL_ID}>
                        <Form.Label>Email</Form.Label>
                        <InputGroup>
                            <InputGroup.Text>@</InputGroup.Text>
                            <Form.Control required type="text" className="rounded-end" pattern="[\w\-\.]+[@]([\w]+\.)+[\w\-]{2,}" placeholder="me@example.com"/>
                            <Form.Control.Feedback type="invalid">Please a valid email.</Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mt-2">
                    <WordCountTextarea max={500} ctrlId={MESSAGE_ID} resetContent={showSentAlert}/> {/* if we ended up showing a sent alert, we should reset its content*/}
                </Row>
                <Button type="submit" className="mt-2" variant="success">Send</Button>
            </Form>
        </Row>
    </>)
}