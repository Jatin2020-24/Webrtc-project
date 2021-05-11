import React, { Component } from "react";
import { Input, Button, IconButton } from "@material-ui/core";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import { Redirect } from "react-router";

// import GitHubIcon from '@material-ui/icons/GitHub';
// import "./Home.css"

firebase.initializeApp({
    apiKey: "AIzaSyAVihggwV-iWKJDozK9eBa18N5tKeJqecg",
    authDomain: "login-d970e.firebaseapp.com"
});

class Signin extends Component {
    state = { isSignedIn: false };
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,

            firebase.auth.GithubAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    };

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({ isSignedIn: !!user });
            console.log("user", user);
        });
    };
    render() {
        return (
            <div className="Sigin">
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

                <div className="container d-flex mt-5">
                    <div className="container mt-5 pb-5">
                        <h1 className="text-light">
                            Introduction a free and secure <br></br>video
                            calling service accessible <br></br> for all
                        </h1>
                        <p className="text-light">
                            for more information, visit{" "}
                            <a
                                className="text-success"
                                href={"https://www.pclubuiet.com/"}
                            >
                                PClub
                            </a>
                        </p>
                    </div>

                    <div className="card w-50">
                        <div className="card-header bg-success">
                            <h3 className="text-center">Sign In</h3>
                        </div>
                        <div className="card-body ">
                            <form>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-user" />
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="username"
                                    />
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-key" />
                                        </span>
                                    </div>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="password"
                                    />
                                </div>
                                <div className="row align-items-center remember ml-3">
                                    <input type="checkbox" />{" "}
                                    &nbsp;&nbsp;&nbsp;Remember Me
                                </div>
                                <button className="btn float-right btn-success">
                                    Login
                                </button>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                Don't have an account? &nbsp;
                                <a className="text-success" href={"/signup"}>
                                    Sign Up
                                </a>
                            </div>
                            <div className="d-flex justify-content-center">
                                <a className="text-success" href="#">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>
                        {this.state.isSignedIn ? (
                            <Redirect to="./meethome" />
                        ) : (
                            <StyledFirebaseAuth
                                uiConfig={this.uiConfig}
                                firebaseAuth={firebase.auth()}
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
export default Signin;