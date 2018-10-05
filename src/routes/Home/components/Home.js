import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";

import {Container} from "native-base";
import {Actions}  from "react-native-router-flux";

import MapContainer from "./MapContainer";
import HeaderComponent from "../../../components/HeaderComponent";
import FooterComponent from "../../../components/FooterComponent";
import FetchLocation from "./Location/FetchLocation";
import Fare from "./Fare";
import Fab from "./Fab";
import FindDriver from "./FindDriver";


const ksLogo = require("../../../assets/appUtilImg/kusani.png")
const carMarker = require("../../../assets/appUtilImg/carMarker.png")

class Home extends React.Component{ 
		/*  getUserLocationHandler = () =>{
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        userLocation:{
          latitude:position.coords.latitude,
          longitude:position.coords.longitude,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0421
        }
      })

    }, err => console.log(err));
  }*/
	componentDidMount() {
		var rx = this;
		this.props.getCurrentLocation();
		setTimeout(function(){
			rx.props.getNearByDrivers();

		}, 6000);
	}
	componentDidUpdate(prevProps, prevState) {
		//console.log("Avant---->", this.props.booking.status);
        if (this.props.booking.status === "confirmed" ){
        	console.log("---->", this.props.booking.status);
            Actions.trackCommerce({type: "reset"});
        }
        this.props.getCurrentLocation();
    //console.log("Tom Hodell", this.props.booking);
	}
	
	render(){
		const region = {
			latitude:3.834070,
			longitude:11.520092,
			latitudeDelta:0.1, 
			longitudeDelta:0.1 
		}
		const {status} = this.props.booking;
		return(
			<Container >
			{ (status !== "pending") &&
			<View style={{flex:1}}>
			<HeaderComponent logo={ksLogo}/>
			<FooterComponent />
			{/*
			<Text style={styles.mainText}> {this.props.name} from Taxi App 5</Text> 
			<Text> -- </Text>	
			*/}		
			{this.props.region.latitude &&			
			<MapContainer 
			region={this.props.region} 
			getInputData={this.props.getInputData} 
			toggleSearchResultModal={this.props.toggleSearchResultModal}
			getAddressPredictions={this.props.getAddressPredictions}
			resultTypes={this.props.resultTypes}
			predictions={this.props.predictions}
			getSelectedAddress={this.props.getSelectedAddress}
			selectedAddress={this.props.selectedAddress}
			carMarker= {carMarker}
			nearByDrivers={this.props.nearByDrivers}

			/>
			 
			}
			
			<Fab onPressAction={()=>this.props.bookCar()}/>

			
			{
                this.props.fare &&
				<Fare fare={this.props.fare} />
			}
			</View>
				|| 
				<FindDriver selectedAddress={this.props.selectedAddress} />

			}
			</Container>
	
		);
	}
}


const styles = StyleSheet.create({
  mainText: {
    color: '#333333',
    fontSize: 20
  },
  });
export default Home;
