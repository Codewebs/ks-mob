import React from "react";
import {View, Text} from "react-native";

import { Container }  from "native-base";
import HeaderComponent from "../../../components/HeaderComponent";
import MapTrack from "./MapTrack";
import CommerceFound from "./CommerceFound";
import CommerceFooterProfile from "./CommerceFooterProfile";
import CommerceOnTheWayFooter from "./CommerceOnTheWayFooter";
const ksLogo = require("../../../assets/appUtilImg/kusani.png")
const carMarker = require("../../../assets/appUtilImg/carMarker.png")
class TrackCommerce extends React.Component{

	componentDidMount() {
		this.props.getCurrentLocation();
		this.props.getCommerceInfo();
	}
	componentWillReceiveProps(nextProps) {
		if(this.props.commerceLocation && nextProps.commerceLocation !== this.props.commerceLocation){
			this.props.getDistanceFromCommerce();
		}
	}

	render(){
		const region = {
			latitude:3.834070,
			longitude:11.520092,
			latitudeDelta:0.1, 
			longitudeDelta:0.1 
		}
		return(
			<Container>
				<View style={{flex:1}}>
					<HeaderComponent />
					{
						this.props.region &&
						<MapTrack
							region={this.props.region}
							selectedAddress={this.props.selectedAddress}
							commerceLocation={this.props.commerceLocation}
							showCarMaker={this.props.showCarMaker}
							carMarker={carMarker}

						/>

					}

					{
						this.props.distanceFromCommerce.rows &&
					
						<CommerceOnTheWayFooter
							commerceInfo={this.props.commerceInfo}
							distanceFromCommerce={this.props.distanceFromCommerce}

						/>
					}
					<CommerceFooterProfile
						commerceInfo={this.props.commerceInfo}
					/>

					{
						this.props.showCommerceFound &&
						<CommerceFound
							commerceInfo={this.props.commerceInfo}
							getCommerceLocation={this.props.getCommerceLocation}
						/>
					}
				
				</View>
			</Container>

		);

	}
}

export default TrackCommerce;