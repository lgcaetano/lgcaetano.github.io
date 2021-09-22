import React from "react";
import { Component } from "react";
import calculadora from '../imgs/calculadora.jpg'
import flappyBird from '../imgs/flappyBird.jpg'
import projetoGaleria from '../imgs/projetoGaleria.jpg'
import sudokuSolver from '../imgs/sudokuSolver.jpg'
// // import { Router } from "react-router"
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";



export default class ProjectCard extends Component{

    imagesObject = { calculadora, flappyBird, projetoGaleria, sudokuSolver }

    descriptionsObject = {
        sudokuSolver: 'A web page wher you can play sudoku and solve any sudoku puzzle with the help of a backtracking algorithm',
        flappyBird: 'A clone of the original game for the browser written with pure JavaScript',
        projetoGaleria: 'An online gallery project that was built as a part of a course I took on Udemy on jQuery and Bootstrap.',
        calculadora: 'A browser based clone of the MacOS native calculator app.'

    }


    constructor(props){
        super(props)
        this.state = { description: this.descriptionsObject[props.projectName]}
        this.imageSrc = this.imagesObject[props.projectName]
    }



    render(){
        return <a href={`/apps/${this.props.projectName}/index.html`}>
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