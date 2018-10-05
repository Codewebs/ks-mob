import React from "react";
import {Text} from "react-native";
import { View, Button } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./FindDriverStyles.js";

var Spinner = require("react-native-spinkit");
export const FindDriver = ({selectedAddress})=>{

	const { selectedPickUp, selectedDropOff }  = selectedAddress || {};
	return (
		<View style={styles.findDriverContainer} >

			<Spinner style={styles.spinner} isVisible size={160} type="Pulse" color="#f0f8ff"/>
			<View style={styles.content}>
				<Text style={styles.text}> Traitement de votre requete</Text>
				<Icon style={styles.locationIcon} name="map-marker"/>

				<View style={styles.pickup}>
					<Text>{ selectedPickUp.name}</Text>
				</View>
				<Icon style={styles.toArrow} name="long-arrow-down"/>
				<View style={styles.dropoff}>
					<Text>{ selectedDropOff.name}</Text>
				</View>

				<View>
					
					<Text style={styles.termsText}>En resevant, vous acceptez nos conditions d'utilisation</Text>
					<Button style={styles.dismisslBtn}>
						<Text style={styles.cancelBtnText}>Cacher</Text>
					</Button>
					<Button style={styles.cancelBtn}>
						<Text style={styles.cancelBtnText}>Annuler</Text>
					</Button>
				</View>
				
			</View>
			
		</View>

	);
}

export default  FindDriver;