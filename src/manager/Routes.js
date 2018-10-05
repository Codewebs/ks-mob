import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import progress from './pages/OpenAeur';



export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <scene key="progress" component={progress} title="progress" />
			      <Scene key="login" component={Login} title="Login" initial={true}/>
			      <Scene key="signup" component={Signup} title="Register" />
			     
			    </Stack>
			 </Router>

			)
	}
}