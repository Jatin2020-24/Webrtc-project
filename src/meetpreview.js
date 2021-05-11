import React, { Component } from "react";
import { Input, Button, IconButton } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./meetpreview.css";

class Meetpreview extends Component {
    getCurrentDate(separator = "") {
        let newDate = new Date();
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        return `${year}${separator}${
            month < 10 ? `0${month}` : `${month}`
        }${separator}${date}`;
    }

    state = {
        myCurrentTime: new Date().toLocaleString()
    };
    render() {
        return (
            <div className="meetpreview">
                <div className="basic-nav">
                    <div className="basic-row">
                        <div className="basic-time">
                            <div className="time-data">
                                {this.state.myCurrentTime}
                            </div>
                        </div>
                    </div>

                    <div className="basic-row">
                        <AccountCircleIcon />
                    </div>
                </div>
                <h1 className="room-name">Room #1</h1>
                <div className="video-preview">
                    <div className="video-controls">Hello</div>
                </div>
                <ul className="ul-li">
                    <li>
                        <a href="http://localhost:3000/signin"> SignIn |</a>
                    </li>
                    <li>
                        <a href="http://localhost:3000/signup"> SignUp |</a>
                    </li>
                    <li>
                        <a href="http://localhost:3000/meethome"> MeetHome |</a>
                    </li>
                    <li>
                        <a href="http://localhost:3000/meetpreview">
                            {" "}
                            MeetPreview |
                        </a>
                    </li>
                    <li>
                        <a href="http://localhost:3000/meeting"> Meeting |</a>
                    </li>
                    <li>
                        <a href="http://localhost:3000/meetend"> MeetEnd |</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Meetpreview;
