const icons = {
    "FCC": <img src="https://www.ffwd.org/wp-content/uploads/freecodeceamp-logo.png" alt="" className="icon"/>
}

const names = {
    "ADS": "Javscript Algorithms and Data Structures Certification",
    "FEL": "Front End Development Libraries Certification"
}

const urls = {
    "ADS": "https://www.freecodecamp.org/certification/lgcaetano/javascript-algorithms-and-data-structures",
    "FEL": "https://www.freecodecamp.org/certification/lgcaetano/front-end-development-libraries"
}


const additionalIcons = {
    "FEL": <i class="fab fa-react extra-icon"></i>,
    "ADS": <i class="fab fa-js extra-icon"></i>,
}


export default function Certification(props){
    return(
        <a href={urls[props.name]} className="card-link">
            <div className="project-card">
                <b className="special-neon">{icons[props.provider]}</b>
                {additionalIcons[props.name] ?? ""}
                <b className="special-neon">{names[props.name]}</b>
            </div>
        </a>
    )
}