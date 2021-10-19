import React from "react";
import { Component } from "react";
import ProjectCard from "./ProjectCard";

export default class ProjectsPanel extends Component{

    constructor(props){
        super(props)
        this.state = { iFrameReference: '#' }
    }

    handleClick(src){
        this.setState({ iFrameReference: src })
    }


    render(){
        return <div id="project-panel">
            <h1>My Projects</h1>
            <div id="project-card-grid">
                <ProjectCard projectName="sudoku" clickFunction={src => this.handleClick(src)}></ProjectCard>
                <ProjectCard projectName="countries" clickFunction={src => this.handleClick(src)}></ProjectCard>
                <ProjectCard projectName="cadastro" clickFunction={src => this.handleClick(src)}></ProjectCard>
                <ProjectCard projectName="flappyBird" clickFunction={src => this.handleClick(src)}></ProjectCard>
                <ProjectCard projectName="calculadora" clickFunction={src => this.handleClick(src)}></ProjectCard>
                <ProjectCard projectName="galeria" clickFunction={src => this.handleClick(src)}></ProjectCard>
            </div>
        </div>
    }
}