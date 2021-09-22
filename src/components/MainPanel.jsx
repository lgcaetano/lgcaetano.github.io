import React from "react";
import { Component } from "react";
import Info from "./Info";
import Skills from "./Skills";

export default class MainPanel extends Component{
    render(){
        return <div id="main-panel-container">
            <div id="profile-pic-container">
                <img src="https://pbs.twimg.com/profile_images/1170758946627510273/8SgXi9XN.jpg" alt="" />
            </div>
            <div id="main-panel">
                <Info></Info>
                <Skills></Skills>
            </div>
        </div>
    }
}