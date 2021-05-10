import React,{Component} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Meetend from './meetend.js';
import Meeting from './meeting.js';
import Signup from './signup.js';
import Signin from './signin.js';
import Meethome from './meethome.js';
import Meetpreview from './meetpreview.js';
import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Switch>
          <Route path="/" exact component={ Signup } />
						<Route path="/signin" exact component={ Signin } />
						<Route path="/signup" exact component={ Signup } />
            <Route path="/meetend" exact component={ Meetend } />
            <Route path="/meethome" exact component={ Meethome } />
            <Route path="/meeting" exact component={ Meeting } />
            <Route path="/meetpreview" exact component={ Meetpreview } />
					</Switch>
				</Router>
			</div>
		)
	}
}

export default App ;
// export default Initial;