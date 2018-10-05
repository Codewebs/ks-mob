import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  TextInput,  
  AsyncStorage,
  Navigator,
  Alert,

} from 'react-native';
import { NavigationActions,StackActions } from 'react-navigation'

//import Swal from 'sweetalert2';
import Logo from '../components/Logo';
import Form from '../components/Form';
//import Home from '../../../App';

import request from "superagent";
import {Actions} from 'react-native-router-flux';

request.Request.prototype.finish = function (callback) {
    // this replaces superagent's .end() function to include our custom error handling (see above)
    this.end((err,res)=>{
        callback(err,res);
    });
  };

  var requestWrapper = function(method) {
    // this is here so that we can append the .timeout call to all of our ajax requests with the default value.
    return function(url) {
        return request[method](url)
            .type("form")
            .timeout(defaultAjaxTimeout);
    };
  };



export default class Login extends Component<{}> {
componentDidMount() {
    setTimeout(() => {
      this.navigateToWalkthrough()
    }, 3500);

}

navigateToWalkthrough = () => {
  this.props.navigation.navigate('HomeStack', {}, NavigationActions.navigate({ routeName: 'Home' }))
}
	signup() {
		Actions.signup()
	}
  App(){
    Actions.App()
  }
  componentDidUpdate(prevProps, prevState) {
    var myname = this.state.first_name;
  }
	render() {
     var myname = "this name";
		return(
			<View style={styles.container}>
				<Logo/>
              <View style={styles.container}>
              <Text>navState.routeName</Text>
              <TextInput style={styles.inputBox} 
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#000000"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              />
              <TextInput style={styles.inputBox} 
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Mot de passe"
              secureTextEntry={true}
              placeholderTextColor = "#000000"
              ref={(input) => this.password = input}
              />  
              
      </View>
				   <TouchableOpacity style={styles.button}>
             <Text onPress={this.login} style={styles.buttonText}>Connectez-vous</Text>
           </TouchableOpacity>  
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Pas encore de compte?</Text>
					<TouchableOpacity onPress={() => this.props.navigation.dispatch(navigateAction)}><Text style={styles.signupButton}> Inscrivez-vous</Text></TouchableOpacity>
				</View>
			</View>	
			)
	}

  constructor(props){
  super(props)  ;
  this.state ={ isLoading: true}
  this.state = {
    email:'', 
    password:''
  };

}
login = () =>{
  request.get("http://192.168.137.46:3000/api/login")
  .query({
       email:this.state.email,
        password:this.state.password, 
    })
  .finish((error, res)=>{
    console.log(res);
      if(res.body.success === true) {
      var first_name = res.message;
      //on garde le nom de l'utilisateur dans la bd locale
      AsyncStorage.setItem('username', first_name);      
      //ensuite on le redirige dans la zone des membres
     //this.props.navigation.dispatch(navigateAction);

    }
    else{ //Si la connexion n'a pas eté effectuée
       Alert.alert(
        'Kusani Connexion',
        res.body.message,
        [
          
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
          )//End of ALERT
     console.log(res.message);
    }

    //console.log(res);
    });

  /*fetch('http://192.168.137.13:3000/api/login' , {
    method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
        body:JSON.stringify({
          email:this.state.email,
          password:this.state.password,
        }),
  }) .then((response) => response.json())
  .then((res) => {
    console.log(res);
    if(res.success === true) {
      var first_name = res.message;
      //on garde le nom de l'utilisateur dans la bd locale
      AsyncStorage.setItem('username', first_name);      
      //ensuite on le redirige dans la zone des membres
      this.props.navigator.push({
        id:'Memberarea'
      }); 

    }
    else{ //Si la connexion n'a pas eté effectuée
      console.log(res.message);
    }

  })
  .done();*/
}


}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#FFF',   
    flexGrow: 1,
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
  	color:'#012d45',
  	fontSize:14
  },
  signupButton: {
  	color:'#E54304',
  	fontSize:16,
  	fontWeight:'500'
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
