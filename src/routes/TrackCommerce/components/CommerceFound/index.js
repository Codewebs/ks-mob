import React from "react";
import {Text, Image} from "react-native";
import { View, Button } from "native-base";

import styles from "./CommerceFoundStyles.js";

export const CommerceFound = ({ commerceInfo, getCommerceLocation})=>{
	const { profilePic } = commerceInfo || "";
	console.log(commerceInfo);
	const { vehicle } = commerceInfo || {};
	return (
		<View style={styles.findCommerceContainer}>

			<View style={styles.content}>
				<Text>YAY Commerce Found!</Text>
				<Image resizemode="contain" style={styles.commercePic} source={{uri:profilePic}} />
				<View style={styles.commerceInfo}>
					<Text style={styles.quotationMarkLeft}>""</Text>
					<View style={styles.commerceBio}>
						<Text style={styles.bioText}>
							Hi my name is
						</Text>
						<Text style={styles.nameText}>
							{commerceInfo.firstName} {commerceInfo.lastName}
						</Text>
						<Text style={styles.bioText}>
							and I am not far away.
						</Text>
					</View>
					<Text style={styles.quotationMarkRight}>""</Text>
				</View>
				<View style={styles.vehicleDetails}>
					<Text style={styles.vehicleText}>Vehicle Plate number:</Text>
					<Text style={styles.vehicleNumber}> {vehicle && vehicle.plateNumber}</Text>
					<Button  style={styles.nextBtn} onPress={()=>getCommerceLocation()}>
						<Text style={styles.nextBtnText}>Next</Text>
					</Button>
				</View>
			</View>
			
		</View>

	);
}

export default  CommerceFound;