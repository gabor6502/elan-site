import axios from "axios"

// http status codes
export const HTTP_OK_RECORDED = 201
export const HTTP_FORBIDDEN = 403
export const HTTP_SERVER_ERROR = 500

export default async function sendMessage(firstName, lastName, email, message)
{
    let statusCode, response
    let request = {"firstName": firstName, "lastName": lastName, "emailAddress": email, "message": message}

    try
    {
        response = await axios.post("http://localhost:7000/send/", request, 
                        {
                            headers: { "Content-Type": "application/json"}
                        })

        statusCode = response.status
    } catch(error)
    {
        statusCode = error.status
    }
    
    return statusCode
}