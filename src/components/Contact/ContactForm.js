import { useState } from "react"
import { Row, Col, Form, InputGroup, Button } from "react-bootstrap"
import { Resend } from 'resend';
import WordCountTextarea from "./WordCountTextarea"

const FNAME_ID = "firstName"
const LNAME_ID = "lastName"
const EMAIL_ID = "email"
const MESSAGE_ID = "message"

export default function ContactForm()
{
    const [validated, setValidated] = useState(false)

    const handleSubmit = async (event) => 
    {
        const form = event.target

        if (!form.checkValidity()) 
        {
            event.preventDefault()
            event.stopPropagation()
        }

        const inputs = event.target.querySelectorAll("input, textarea")
        const formData = {}

        inputs.forEach((input) => {formData[input.id] = input.value})



        // TODO: use resend API to email contact.egabor@gmail.com
        //
    
        const resend = new Resend(process.env.REACT_APP_RESEND_KEY);

        console.log(resend)

        const {data, error} = await resend.emails.send({
                from: 'onboarding@resend.dev',
                to: 'contact.egabor@gmail.com',
                subject: 'Hello World',
                html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
                });

        if (error)
        {
            console.log(error)
        }
        console.log(data)
    
        setValidated(true);
    }

    return(<>
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
                    <WordCountTextarea max={500} ctrlId={MESSAGE_ID}/>
                </Row>
                <Button type="submit" className="mt-2" variant="success">Send</Button>
            </Form>
        </Row>
    </>)
}