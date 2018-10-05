import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Register';

import {Actions} from 'react-native-router-flux';

export default class Signup extends Component<{}> {

  goBack() {
      Actions.pop();
  }

	render() {
		return(
			<View style={styles.container}>
				<Logo/>
				<Form type="Inscrivez-vous"/>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Vous avez deja un compte?</Text>
					<TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}> Connectez-vous</Text></TouchableOpacity>
				</View>
			</View>	
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#D4BFF9',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'#010200',
  	fontSize:13
  },
  signupButton: {
  	color:'#E54304',
  	fontSize:16,
  	fontWeight:'500'
  }
});
