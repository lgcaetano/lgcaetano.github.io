import React from "react";
import { Component } from "react";
import IntroductoryPanel from "./IntroductoryPanel";
import ProjectsPanel from "./ProjectsPanel";
import MainPanel from "./MainPanel";
import Navbar from "./Navbar";
import About from "./About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from "./Contact";



export default class HomePage extends Component{
    render(){
        return (
            <Router>
                <>
                    <Navbar></Navbar>
                    <Route exact path="/">
                        <IntroductoryPanel></IntroductoryPanel>
                        <MainPanel></MainPanel>
                        <ProjectsPanel></ProjectsPanel>
                    </Route>
                    <Route exact path="/about">
                        <About></About>
                    </Route>
                    <Route exact path="/contact">
                        <Contact></Contact>
                    </Route>
                </>
            </Router>
        )
    }
}