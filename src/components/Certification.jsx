import ioasys from "../imgs/ioasys.png"
import camp from "../imgs/camp.png"
import ioasysCertificate from "../docs/IoasysCertificado.pdf"

const icons = {
    "FCC": <img src="https://www.ffwd.org/wp-content/uploads/freecodeceamp-logo.png" alt="" className="icon"/>,
    "ioasys": <img src={ioasys} alt="" />
}

const names = {
    "ADS": "Javscript Algorithms and Data Structures Certification",
    "FEL": "Front End Development Libraries Certification",
    "BEA": "Back End Development and APIs Developer Certification",
    "ioasys": "Ioasys Camp 2022 Certification"
}

const urls = {
    "ADS": "https://www.freecodecamp.org/certification/lgcaetano/javascript-algorithms-and-data-structures",
    "FEL": "https://www.freecodecamp.org/certification/lgcaetano/front-end-development-libraries",
    "BEA": "https://www.freecodecamp.org/certification/lgcaetano/back-end-development-and-apis",
    "ioasys": ioasysCertificate,
}


const additionalIcons = {
    "FEL": <i className="fab fa-react extra-icon"></i>,
    "ADS": <i className="fab fa-js extra-icon"></i>,
    "BEA": <i className="fab fa-node-js extra-icon"></i>,
    ioasys: <img src={camp} alt="" />
}


export default function Certification(props){
    return(
        <a href={urls[props.name]} className="card-link">
            <div className="project-card">
                <b className="special-neon certificate-icon">{icons[props.provider]}</b>
                {additionalIcons[props.name] ?? ""}
                <b className="special-neon">{names[props.name]}</b>
            </div>
        </a>
    )
}