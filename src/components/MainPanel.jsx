import React from "react";
import { Component } from "react";
import Info from "./Info";
import Skills from "./Skills";
import ProfilePic from "../imgs/Perfil.jpg"

export default class MainPanel extends Component{
    render(){
        return <div id="main-panel-container">
            <div id="profile-pic-container">
                <img src={ProfilePic} alt="" />
            </div>
            <div id="main-panel">
                <Info></Info>
                <Skills></Skills>
            </div>
        </div>
    }
}