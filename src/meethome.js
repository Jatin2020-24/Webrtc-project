import React, { Component } from "react";
import { Input, Button, IconButton } from "@material-ui/core";
import firebase from "firebase";
import Signup from "./signup.js";
import { Redirect } from "react-router";
import "./meetHome.css";
// import GitHubIcon from '@material-ui/icons/GitHub';
class Meethome extends Component
{
    render(){
        return(
        <div className="Meethome">
                <div className="container">
                    <img
                        className="mt-4 logo"
                        src="output-onlinepngtools.png"
                        height="130"
                        width="270"
                    ></img>

                    <div class="vertical float-left mt-4">
                        <h1 className="text-light mt-3 p-4">Meetings</h1>
                    </div>
                </div>
                <div class="text-light mt-3 p-4">
                    <div className="text-center">
                        <div class="heading">
                            <h1>Welcome abc!</h1>
                        </div>
                    </div>
                </div>
                <div class="form">
                    <form class="form-center">
                        <div class="form-group mx-sm-2">
                            <input type="text" class="form-control" placeholder="Enter Meeting Code"/>
                        </div>
                    </form>
                </div>
                <div>
                    <h4 class="or">or</h4>
                </div>
                <div class="text-center" id="btn">
                    <button type="button" class="btn float-center btn-success">New Meet</button>
                </div>
        </div>
        );
    }

}

export default Meethome;
