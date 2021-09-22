import React from "react";
import { Component } from "react";
import SkillBar from "./SkillBar";

export default class TechSkill extends Component{
    render(){
        return <div className="skill">
            <b>{this.props.skill}:</b> <SkillBar skillValue={this.props.skillValue}></SkillBar> <b>{this.props.skillValue}/5</b>
        </div>
    }
}