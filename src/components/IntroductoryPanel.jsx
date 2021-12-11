import React from "react";
import { Component } from "react";

export default class IntroductoryPanel extends Component{
    render(){
        return <div id="introductory-container">
                <div id="introductory-panel">
                    <h1 className="glowing-text barlow">Luis Gabriel Caetano Diniz</h1>
                    <h2 className="glowing-text barlow">Front-End Software Developer</h2> <br />
                    <h1 className="glowing-text barlow special-neon cursive">Portfolio</h1>
            </div>
        </div>
    }
}