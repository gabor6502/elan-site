import { useState } from "react"
import { Row, Col, Form, InputGroup, Button, Alert, Spinner } from "react-bootstrap"

const FNAME_ID = "firstName"
const LNAME_ID = "lastName"
const EMAIL_ID = "email"
const MESSAGE_ID = "message"

const MAX_WORDS = 500

export default function ContactForm()
{
    const [validated, setValidated] = useState(false)
    const [showSentAlert, setShowSentAlert] = useState(false)
    const [succAlert, setSuccAlert] = useState(false)
    const [spinning, setSpinning] = useState(false)

    const [wordCount, setWordCount] = useState(0)
    const [content, setContent] = useState("")

    const contentChange = (value) => 
    {
        let text = value
        let splitText = text.split(/[ |\n]/)
        let currcount = splitText.filter((token) => token !== "").length

        if (currcount <= MAX_WORDS)
        {
            setContent(text)
            setWordCount(currcount)
        }
       
    }

    const handleSubmit = async (event) => 
    {
        const form = event.target
        let inputs

        event.preventDefault()
        event.stopPropagation()

        if (!form.checkValidity()) 
        {
            setValidated(true)
        }
        else
        {
            setSpinning(true)
            setValidated(false)

            inputs = event.target.querySelectorAll("input, textarea")

             // simulate what happens when it goes through
            setTimeout(() => {
                inputs.forEach((input) => {input.value = ""}) // wipe since we're done collecting the data
                setContent("") // clears text area

                setSpinning(false)
                setShowSentAlert(true)
                setSuccAlert(true) 
            }, 750) // simulate a request
        }
    }


    return(<>
        <Alert show={showSentAlert} variant={succAlert ? "success" : "danger"} onClose={() => setShowSentAlert(false)} dismissible>
            <Alert.Heading>
                {succAlert ? "Message sent successfuly!" : "Failed to send message."}
            </Alert.Heading>
        </Alert>

        <Row>
            <p><i>
                This is a pre-release build where the backend is going to be deployed very soon! 
                For the time being messages will not be sent, 
                however the form will behave as though messages have gone through.
            </i></p>
        </Row>
        
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
                    <Form.Group as={Col} controlId={MESSAGE_ID}>
                        <Form.Label>Message</Form.Label>
                        <Form.Control required as="textarea" rows={6} value={content} onChange={(event) => contentChange(event.target.value)} style={{resize:"none"}} placeholder="Type your message here"/>
                        <Form.Control.Feedback type="invalid">A message is required.</Form.Control.Feedback>
                        <p className="text-black-50">{wordCount}/{MAX_WORDS}</p>
                    </Form.Group>
                </Row>
                <span>
                    <Button className="mb-3" type="submit" variant="success" disabled={spinning}>Send</Button>
                    {spinning && <Spinner animation="border" role="status" id="spinner">
                        <span className="visually-hidden">Sending...</span> {/* accessibility */}
                    </Spinner>}
                </span>
            </Form>
        </Row>
    </>)
}