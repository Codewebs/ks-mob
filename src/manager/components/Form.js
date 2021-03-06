import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

export default class Logos extends Component<{}> {

	render(){
		return(
			<View style={styles.container}>
       
           <TouchableOpacity style={styles.button}>
             <Text onPress={this.login} style={styles.buttonText}>{this.props.type}</Text>
           </TouchableOpacity>     
  		</View>
			)
	}



}



const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'#FFDDB0',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'red',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#E54304',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
  
});