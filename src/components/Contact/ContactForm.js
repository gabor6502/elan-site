import { useState } from "react"
import { Row, Col, Form, InputGroup, Button } from "react-bootstrap"
import WordCountTextarea from "./WordCountTextarea"

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
        <Row className="p-2">
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
                            <Form.Control required type="text" className="rounded-end" />
                            <Form.Control.Feedback type="invalid">Please enter your email.</Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mt-2">
                    <WordCountTextarea max={500}/>
                </Row>
                <Button type="submit" className="mt-2" variant="success">Send</Button>
            </Form>
        </Row>
    </>)
}