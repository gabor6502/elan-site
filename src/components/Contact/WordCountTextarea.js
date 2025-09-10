import { useEffect, useState } from "react"
import { Col, Form } from "react-bootstrap"

export default function WordCountTextarea({max, ctrlId, resetContent})
{
    const [wordCount, setWordCount] = useState(0)
    const [content, setContent] = useState("")
    
    // this is for the manual reset of the form when submit's default behaviour is overriden
    useEffect(() => {
        if (resetContent)
        {
            setContent("")
        }
    }, [resetContent])

    const contentChange = (value) => 
    {
        let text = value
        let splitText = text.split(/[ |\n]/)
        let currcount = splitText.filter((token) => token !== "").length

        if (currcount <= max)
        {
            setContent(text)
            setWordCount(currcount)
        }
       
    }

    return (<>
        <Form.Group as={Col} controlId={ctrlId}>
            <Form.Label>Message</Form.Label>
            <Form.Control required as="textarea" rows={6} value={content} onChange={(event) => contentChange(event.target.value)} style={{resize:"none"}} placeholder="Type your message here"/>
            <Form.Control.Feedback type="invalid">A message is required.</Form.Control.Feedback>
            <p className="text-black-50">{wordCount}/{max}</p>
        </Form.Group>
    </>)
}