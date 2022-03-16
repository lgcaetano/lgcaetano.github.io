import React from "react";
import { Component } from "react";
import calculadora from '../imgs/calculadora.jpg'
import flappyBird from '../imgs/flappyBird.jpg'
import galeria from '../imgs/galeria.jpg'
import sudoku from '../imgs/sudoku.jpg'



export default class ProjectCard extends Component{

    imagesObject = { calculadora, flappyBird, galeria, sudoku, 
        reminders: "https://d33wubrfki0l68.cloudfront.net/62326aeece17b600080d8612/screenshot_2022-03-16-22-57-33-0000.png",
        pokedex: "https://d33wubrfki0l68.cloudfront.net/621ecb65f4122a0008708c91/screenshot_2022-03-02-01-42-53-0000.png",
        cadastro: "https://d33wubrfki0l68.cloudfront.net/616e1efaa6a3d37f46c8073e/screenshot_2021-10-19-01-29-19-0000.png",
        countries: "https://d33wubrfki0l68.cloudfront.net/616e0cdfad504960c1379adc/screenshot_2021-10-19-00-11-19-0000.png",
        rps: "https://d33wubrfki0l68.cloudfront.net/616f627e586e7000083bd75b/screenshot_2021-10-20-00-28-29-0000.png",
        pomodori: 'https://d33wubrfki0l68.cloudfront.net/61b416a82d6bcc3bd5095b91/screenshot_2021-12-11-03-12-33-0000.png',
        drums: 'https://d33wubrfki0l68.cloudfront.net/61b416029069c64dcd705d7d/screenshot_2021-12-11-03-08-44-0000.png',
        quotes: 'https://d33wubrfki0l68.cloudfront.net/61b419733aaf6600089c4995/screenshot_2021-12-11-03-22-57-0000.png',
        markdown: 'https://d33wubrfki0l68.cloudfront.net/61b41687695b2e37b2623d24/screenshot_2021-12-11-03-11-24-0000.png',
        blogr: 'https://d33wubrfki0l68.cloudfront.net/61e7413aa2aebd007993d3b1/screenshot_2022-01-18-22-37-53-0000.png',
    }

    descriptionsObject = {
        reminders: "An application with user authentication that allows the user to create, read, update and delete scheduled appointments, wotrking as a sort of calendar",
        pokedex: "A web application that simulates a pokedex and also includes a quiz like those ones you'd see during commercial breaks for the Pokémon show",
        sudoku: 'A web page where you can play sudoku and solve any sudoku puzzle with the help of a backtracking algorithm',
        flappyBird: 'A clone of the original game for the browser written with pure JavaScript',
        galeria: 'An online gallery project that was built as a part of a course I took on Udemy on jQuery and Bootstrap.',
        calculadora: 'A browser based clone of the MacOS native calculator app.',
        countries: 'A site that provides information about every country in the world with the help of an API and also provides a flag quiz so that you can test your geography knowledge!',
        cadastro: 'A site that allows users to be created, read, updated and deleted (CRUD) in the context of a database with the help of a Firebase backend',
        rps: 'A site where you can play the game Rock, Paper, Scissors, Lizard, Spock from the sitcom The Big Bang Theory',
        pomodori: 'A site made to help you with your studies! It allows you to set timers for your study sessions and breaks',
        drums: 'A miniature synthesizer, an application that allows you to play sounds and create your own music',
        quotes: 'Need a subtitle for your Instagram post? This site will give you an inspirational quote on demand!',
        markdown: 'This site allows you to preview how your markdown text will look like.',
        blogr: 'A responsive, animated landing page for a blogging service'
    }

    titlesObject = {
        reminders: "Reminders CRUD",
        pokedex: "Pokédex",
        sudoku: "Sudoku Solver",
        flappyBird: "Flappy Bird",
        galeria: "Photo Gallery",
        calculadora: "Mac Calculator",
        countries: "Countries Wiki",
        cadastro: "Registration System",
        rps: "Rock, Paper, Scissors, Lizard, Spock",
        pomodori: "Pomodori Clock",
        drums: "Drum Machine",
        quotes: "Random Quote Generator",
        markdown: "Markdown Previewer",
        blogr: "Blogr Landing Page"
    }


    constructor(props){
        super(props)
        this.state = { description: this.descriptionsObject[props.projectName]}
        this.imageSrc = this.imagesObject[props.projectName]
    }



    render(){
        return <a href={`https://lgcaetano${this.props.projectName}.netlify.app`} className="card-link">
            <div className="project-card">
                <b className="special-neon">{this.titlesObject[this.props.projectName]}</b>
                <div className="image-container">
                    <img src={this.imageSrc} alt="" />
                </div>
                <div className="project-description">{this.state.description}</div>
            </div>
        </a>
    }
}