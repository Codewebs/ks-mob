import React from "react";
import {Text, Image,TouchableOpacity } from "react-native";
import {Header, Left, Body, Right, Button} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./HeaderComponentStyles";
import Iconz from "react-native-vector-icons/Ionicons";
import { RNToasty } from 'react-native-toasty';

export const HeaderComponent = ({logo})=>{
	let copy = <Iconz name="ios-sad" size={24} color="#FFFFFF" family={"Ionicons"} />;
	return( 

		<Header style={{backgroundColor: "#008080"}} androidStatusBarColor="#ff00ff" >
			<Left>
				<Button transparent>
					<Icon name="bars" style={styles.menu} />
				</Button>
			</Left>
			<Body>
				<Text style={styles.headerText}><Image resizeMode="contain" style={styles.logo} source={logo}/> Kusani</Text>
			</Body>
			<Right>
				<TouchableOpacity onPress={() => {
          RNToasty.Show({ title: "Passage en offline", titleSize: 18, titleColor: '#555555', withIcon: true, duration: 1, tintColor: '#FA8072', icon: copy });
        }}>
					<Iconz name="ios-cellular" color={"#ADFF2F"} size={24} />
				</TouchableOpacity>
			</Right>
		</Header>


		);
}

export default HeaderComponent; 