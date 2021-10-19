import React from "react";
import { Component } from "react";
import calculadora from '../imgs/calculadora.jpg'
import flappyBird from '../imgs/flappyBird.jpg'
import galeria from '../imgs/galeria.jpg'
import sudoku from '../imgs/sudoku.jpg'
// // import { Router } from "react-router"
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";



export default class ProjectCard extends Component{

    imagesObject = { calculadora, flappyBird, galeria, sudoku, 
        cadastro: "https://d33wubrfki0l68.cloudfront.net/616e1efaa6a3d37f46c8073e/screenshot_2021-10-19-01-29-19-0000.png",
        countries: "https://d33wubrfki0l68.cloudfront.net/616e0cdfad504960c1379adc/screenshot_2021-10-19-00-11-19-0000.png"
    }

    descriptionsObject = {
        sudoku: 'A web page wher you can play sudoku and solve any sudoku puzzle with the help of a backtracking algorithm',
        flappyBird: 'A clone of the original game for the browser written with pure JavaScript',
        galeria: 'An online gallery project that was built as a part of a course I took on Udemy on jQuery and Bootstrap.',
        calculadora: 'A browser based clone of the MacOS native calculator app.',
        countries: 'A site that provides information about every country in the world and also provides a flag quiz so that you can test your geography knowledge!',
        cadastro: 'A site that enables registration from users and is integrated with a Firebase server'
    }


    constructor(props){
        super(props)
        this.state = { description: this.descriptionsObject[props.projectName]}
        this.imageSrc = this.imagesObject[props.projectName]
    }



    render(){
        return <a href={`https://lgcaetano${this.props.projectName}.netlify.app`}>
            <div className="project-card">
                <b>{this.props.projectName}</b>
                <div className="image-container">
                    <img src={this.imageSrc} alt="" />
                </div>
                <div className="project-description">{this.state.description}</div>
            </div>
        </a>
    }
}