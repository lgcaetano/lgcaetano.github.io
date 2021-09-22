import React from "react";
import { Component } from "react";
import SkillBar from "./SkillBar";

export default class TechSkill extends Component{
    render(){
        return <div className="skill">
            {this.props.skill}: <SkillBar skillValue={this.props.skillValue}></SkillBar> <b>{this.props.skillValue}/5</b>
        </div>
    }
}