import React from "react";
import { Component } from "react";
import TechSkill from "./TeckSkill";

export default class Skills extends Component{
    render(){
        return <div id="skills-container">
            <h2>Skills:</h2>
            <TechSkill skill="English" skillValue={5}></TechSkill>
            <TechSkill skill="JavaScript" skillValue={4}></TechSkill>
            <TechSkill skill="CSS" skillValue={4}></TechSkill>
            <TechSkill skill="HTML" skillValue={4}></TechSkill>
            <TechSkill skill="React" skillValue={3}></TechSkill>
            <TechSkill skill="jQuery" skillValue={3}></TechSkill>
            <TechSkill skill="Bootstrap" skillValue={3}></TechSkill>
            <TechSkill skill="SQL" skillValue={3}></TechSkill>
            <TechSkill skill="Typescript" skillValue={2}></TechSkill>
            <TechSkill skill="Node.js APIs" skillValue={2}></TechSkill>
        </div>
    }
}