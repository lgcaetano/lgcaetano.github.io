import React from "react";
import { Component } from "react";

export default class SkillBar extends Component{
    render(){
        return <div className="skill-bar">
            <div className={"star" + ((this.props.skillValue >= 1) ? " star-activated" : "")}></div>
            <div className={"star" + ((this.props.skillValue >= 2) ? " star-activated" : "")}></div>
            <div className={"star" + ((this.props.skillValue >= 3) ? " star-activated" : "")}></div>
            <div className={"star" + ((this.props.skillValue >= 4) ? " star-activated" : "")}></div>
            <div className={"star" + ((this.props.skillValue >= 5) ? " star-activated" : "")}></div>
        </div>
    }
}