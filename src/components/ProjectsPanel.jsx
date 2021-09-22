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
                <ProjectCard projectName="sudokuSolver" clickFunction={src => this.handleClick(src)}></ProjectCard>
                <ProjectCard projectName="flappyBird" clickFunction={src => this.handleClick(src)}></ProjectCard>
                <ProjectCard projectName="calculadora" clickFunction={src => this.handleClick(src)}></ProjectCard>
                <ProjectCard projectName="projetoGaleria" clickFunction={src => this.handleClick(src)}></ProjectCard>
            </div>
            {/* <iframe title="shower" src={this.state.iFrameReference} style={{display: this.state.iFrameReference == '#' ? 'none' : 'initial'}}></iframe> */}
        </div>
    }
}