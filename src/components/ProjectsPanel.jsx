import React from "react";
import { Component } from "react";
import ProjectCard from "./ProjectCard";

export default class ProjectsPanel extends Component{
    render(){
        return <div id="project-panel">
            <h1>My Projects</h1>
            <div id="project-card-grid">
                <ProjectCard projectName="sudokuSolver" ></ProjectCard>
                <ProjectCard projectName="flappyBird" ></ProjectCard>
                <ProjectCard projectName="calculadora" ></ProjectCard>
                <ProjectCard projectName="projetoGaleria" ></ProjectCard>
            </div>
        </div>
    }
}