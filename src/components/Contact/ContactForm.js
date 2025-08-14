import { useState } from "react"
import { Row, Col, Form, InputGroup, Button } from "react-bootstrap"

export default function ContactForm()
{
    const [validated, setValidated] = useState(false)

    const handleSubmit = (event) => 
    {
        const form = event.target

        if (!form.checkValidity()) 
        {
            event.preventDefault()
            event.stopPropagation()
        }

        setValidated(true);
    }

    return(<>
        <Row>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                    <Form.Group as={Col} controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control required type="text" />
                        <Form.Control.Feedback type="invalid">Please enter your first name.</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control required type="text" />
                        <Form.Control.Feedback type="invalid">Please enter your last name.</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="email">
                        <Form.Label>Email</Form.Label>
                        <InputGroup>
                            <InputGroup.Text>@</InputGroup.Text>
                            <Form.Control required type="text" />
                            <Form.Control.Feedback type="invalid">Please enter your email.</Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="subject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control required type="text" />
                        <Form.Control.Feedback type="invalid">A message subject is required.</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control required as="textarea" rows={5} />
                        <Form.Control.Feedback type="invalid">A message is required.</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button type="submit">Send</Button>
            </Form>
        </Row>
    </>)
}