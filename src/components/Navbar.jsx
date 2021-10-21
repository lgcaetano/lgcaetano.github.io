import { Link } from "react-router-dom"
import { useLocation } from "react-router"

export default function Navbar(){

    const location = useLocation()
    // console.log(location.pathname)

    return (
        <>
            <div className="links-container">
                <a href="https://www.linkedin.com/in/luis-gabriel-caetano-diniz-77a767206/" className="nav-link nav-glow">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.instagram.com/lg_caetano/" className="nav-link nav-glow">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://api.whatsapp.com/send?phone=5531982010404&text=Luis%20Gabriel" className="nav-link nav-glow">
                    <i class="fab fa-whatsapp"></i>
                </a>
                <div className="gap"></div>
                <Link to="/" className={`nav-glow simple-link ${location.pathname === "/" ? "cur-route" : ""}`}>
                    <i className="fas fa-home"></i> <span className="hide-name"> HOME</span> 
                </Link>
                <Link to="/about" className={`nav-glow simple-link ${location.pathname === "/about" ? "cur-route" : ""}`}>
                    <i className="fas fa-info-circle"></i> <span className="hide-name"> ABOUT</span> 
                </Link>
                <Link to="/contact" className={`nav-glow simple-link ${location.pathname === "/contact" ? "cur-route" : ""}`}>
                    <i className="fas fa-phone-square-alt"></i> <span className="hide-name"> CONTACT</span> 
                </Link>
            </div>
        </>
    )
}