export default function Contact(){
    return (
        <div className="clip">
            <form action="mailto:luisgabrielcaetano@gmail.com" className="mail-box">
                <input type="text" placeholder="Who are you?"/>
                <input type="email" placeholder="Email adress"/>
                <input type="text" placeholder="Subject"/>
                <textarea name="" id="" cols="60" rows="10" className="message" placeholder="Your message..."></textarea>
                <input type="submit" value="Send"/>
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