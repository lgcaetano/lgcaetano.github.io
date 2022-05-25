import ProfilePic from "../imgs/Perfil.jpg"


export default function About(){
    return <div className="clip">
        <div className="about-img">
            <img src={ProfilePic} alt="" />
        </div>
        <div className="about-me">
            <h2>About me:</h2>
            <p>
                Hi! My name is Luis Gabriel Caetano Diniz, I'm currently 21 years old and I am a front-end (hopefully future full-stack)
                web developer. I absolutely love what I do and I am always looking for opportunities to get better at my craft. I love 
                building personal projects, and I think many of them look pretty cool (check them out in my home page if you haven't already!).
                <br />
                The current technologies I've been working with the most are React (specially with the use of Next.js), TailwindCSS,
                 MongoDB and Express. I've been doing some cool projects with Python too (check my <a href="https://github.com/lgcaetano">GitHub</a> if you wanna see any of those).
                <br />
                I also study Information Systems at UFMG in Belo Horizonte, Brazil. I'm currently on my 5th semester.  
            </p>
        </div>
    </div>
}