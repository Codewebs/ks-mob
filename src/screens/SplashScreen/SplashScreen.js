import React, { Component } from 'react';

import { StyleSheet, AsyncStorage, Text, View,Navigator, Button} from 'react-native';
import { NavigationActions,StackActions, StackNavigator } from 'react-navigation'
import * as Progress from 'react-native-progress';
import Logo from '../../manager/components/Logo';
//import Login from '../../manager/pages/Login';
import OfflineNotice from '../../OfflineNotice'
import {Actions} from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 150,
  },
  welcome: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color:'#CCC'
  },
  bienve: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'orange',
  },
  circles: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progress: {
    margin: 10,
  },
});



export default class SplashScreen extends Component {



  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      indeterminate: true,
    };
  }

  componentDidMount() {

    this.animate();

    setTimeout(() => {
      AsyncStorage.multiGet(['email', 'password']).then((data) => {
    let email = data[0][1];
    let password = data[1][1];

    if (email !== null)
       this.navigateFor()
     else
      this.navigateTo()
});
      
    }, 4500);


  }

navigateFor = () => {
  this.props.navigation.navigate('MainScreen');
}
navigateTo = () => {
   this.props.navigation.navigate('LoginScreen');
}

  animate() {
    let progress = 0;
    this.setState({ progress });
    setTimeout(() => {
      this.setState({ indeterminate: false });
      setInterval(() => {
        progress += Math.random() / 5;
        if (progress > 1) {
          progress = 1;
        }
        this.setState({ progress });
      }, 500);
    }, 1500);
  }

  render() {
    return (
      <View style={styles.container}>
      
      <Logo/>
      <Text style={styles.bienve}> Welcome to kusani </Text>
        <Text style={styles.welcome}>Connexion a Internet</Text>
        <Progress.Bar
          style={styles.progress}
          progress={this.state.progress}
          indeterminate={this.state.indeterminate}
        />


      </View>
    );
  }
}