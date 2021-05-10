
import React, { Component } from 'react';
import { Input, Button, IconButton } from '@material-ui/core';
import firebase from "firebase";
import Signup from './signup.js';
import { Redirect } from 'react-router';

// import GitHubIcon from '@material-ui/icons/GitHub';
// import "./Home.css"


class Meethome extends Component {
	componentDidMount = () => {
		firebase.auth().onAuthStateChanged(user => {
		  this.setState({ isSignedIn: !!user })
		  console.log("user", user)
		})
	  }

	render() {
		return (
			<div className="container2">
				<h1 className="text-success">Meet Home</h1>
				<ul>
					<li><a href="http://localhost:3000/signin">SignIn</a></li>
					<li><a href="http://localhost:3000/signup">SignUp</a></li>
					<li><a href="http://localhost:3000/meethome">MeetHome</a></li>
					<li><a href="http://localhost:3000/meetpreview">MeetPreview</a></li>
					<li><a href="http://localhost:3000/meeting">Meeting</a></li>
					<li><a href="http://localhost:3000/meetend">MeetEnd</a></li>
				</ul>
      <span className="bg-light">
				<div className="text-success">Signed In!</div>
				<button onClick={() => firebase.auth().signOut()}>Sign out!</button>
				
				<h1 className="text-success">Welcome {firebase.auth().currentUser.displayName}</h1>
				<img
				  alt="profile picture"
				  src={firebase.auth().currentUser.photoURL}
				/>
			  </span>
			 
			</div>
		)
	}
}

export default Meethome;