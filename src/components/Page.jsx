import React from "react";
import { Component } from "react";
import IntroductoryPanel from "./IntroductoryPanel";
import ProjectsPanel from "./ProjectsPanel";
import MainPanel from "./MainPanel";



export default class Page extends Component{
    render(){
        return <div>
            <IntroductoryPanel></IntroductoryPanel>
            <MainPanel></MainPanel>
            <ProjectsPanel></ProjectsPanel>
        </div>
    }
}