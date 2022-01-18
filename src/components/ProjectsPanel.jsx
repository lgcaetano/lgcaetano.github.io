import React from "react";
import { Component } from "react";
import ProjectCard from "./ProjectCard";
import Certification from "./Certification";

export default class ProjectsPanel extends Component{

    render(){
        return <div id="project-panel">
            <h1 className="barlow glowing-text">Certifications</h1>
            <div className="certifications">
                <Certification provider={"FCC"} name={"ADS"}></Certification>
                <Certification provider={"FCC"} name={"FEL"}></Certification>
                <Certification provider={"FCC"} name={"BEA"}></Certification>
            </div>
            <h1 className="barlow glowing-text">My Projects</h1>
            <div id="project-card-grid">
                <ProjectCard projectName="sudoku"></ProjectCard>
                <ProjectCard projectName="countries"></ProjectCard>
                <ProjectCard projectName="pomodori"></ProjectCard>
                <ProjectCard projectName="drums"></ProjectCard>
                <ProjectCard projectName="quotes"></ProjectCard>
                <ProjectCard projectName="markdown"></ProjectCard>
                <ProjectCard projectName="rps"></ProjectCard>
                <ProjectCard projectName="cadastro"></ProjectCard>
                <ProjectCard projectName="flappyBird"></ProjectCard>
                <ProjectCard projectName="calculadora"></ProjectCard>
                <ProjectCard projectName="blogr"></ProjectCard>
                <ProjectCard projectName="galeria"></ProjectCard>
            </div>
        </div>
    }
}