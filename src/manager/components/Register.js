import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity 
} from 'react-native';

export default class Logo extends Component<{}> {

	render(){
		return(
			<View style={styles.container}>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#004304"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              />
              <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Telephone"
              placeholderTextColor = "#004304"
              selectionColor="#000"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Mot de passe"
              secureTextEntry={true}
              placeholderTextColor = "#004304"
              ref={(input) => this.password = input}
              />  
           <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText}>{this.props.type}</Text>
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