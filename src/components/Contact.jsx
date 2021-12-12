import { init } from "emailjs-com"
import emailjs from "emailjs-com"
import { useState } from "react"
import { PuffLoader } from "react-spinners"  

console.log(emailjs)

let templateId = process.env.REACT_APP_TEMPLATE_ID
let serviceId = process.env.REACT_APP_SERVICE_ID
let userId = process.env.REACT_APP_USER_ID

console.log(userId)

init(userId)

export default function Contact(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState(false)
    const [loading, setLoading] = useState(false)



    function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        emailjs.send(serviceId, templateId, { subject, name, email, message }, userId)
            .then(() => {
                setSuccessMessage(true)
                setLoading(false)
            })
    }

    const successDiv = (
        <div className="callback-message" style={{
            color: "limegreen",
            border: "0",
            fontWeight: "700",
            margin: "auto",
            opacity: successMessage ? "1" : "0",
        }}>
            <i class="fas fa-check-circle"></i>Your message was sent successfully.
        </div>
    )

    const loader = <PuffLoader size={50} color="limegreen" css={"margin: 10px 0px"}></PuffLoader>


    return (
        <div className="clip">
            <form action="mailto:luisgabrielcaetano@gmail.com" className="mail-box" onSubmit={handleSubmit}>
                <input type="text" placeholder="Who are you?" onChange={e => setName(e.target.value)}/>
                <input type="email" placeholder="Email adress" onChange={e => setEmail(e.target.value)}/>
                <input type="text" placeholder="Subject" onChange={e => setSubject(e.target.value)}/>
                <textarea name="" id="" cols="60" rows="10" className="message" placeholder="Your message..." onChange={e => setMessage(e.target.value)} ></textarea>
                <input type="submit" value="Send" />
                {loading ? loader : successDiv}
            </form> 
            
            <div className="contact-info">
                <h1>Contact Info:</h1>
                <div className="line">
                    <b>E-mail:</b> luisgabrielcaetano@gmail.com
                </div>
                <div className="line">
                    <b>LinkedIn:</b> <a href="https://www.linkedin.com/in/luis-gabriel-caetano-diniz-77a767206/">linkedin.com/in/luis-gabriel-caetano-diniz-77a767206/</a>
                </div>
                <div className="line">
                    <b>WhatsApp:</b> <a href="https://api.whatsapp.com/send?phone=5531982010404&text=Luis%20Gabriel">Click to start messaging me!</a>
                </div>
            </div>
        </div>
    )
}