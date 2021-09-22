import React from "react";
import { Component } from "react";
import TechSkill from "./TeckSkill";

export default class Skills extends Component{
    render(){
        return <div id="skills-container">
            <h3>Skills:</h3>
            <TechSkill skill="JavaScript" skillValue={4}></TechSkill>
            <TechSkill skill="CSS" skillValue={4}></TechSkill>
            <TechSkill skill="HTML" skillValue={4}></TechSkill>
            <TechSkill skill="React" skillValue={3}></TechSkill>
            <TechSkill skill="jQuery" skillValue={3}></TechSkill>
            <TechSkill skill="BootsTrap" skillValue={3}></TechSkill>
            <TechSkill skill="SQL" skillValue={3}></TechSkill>
        </div>
    }
}