import React from "react";
import {Text} from "react-native";
import {View, InputGroup, Input} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./SearchBoxStyles.js";
export const SearchBox = ({getInputData,toggleSearchResultModal,getAddressPredictions,selectedAddress})=>{
	const {selectedPickUp, selectedDropOff} = selectedAddress || {};
	function handleInput(key, val){
		getInputData({
			key,
			value:val
		});
		getAddressPredictions();
	}

	return(
		<View style={styles.searchBox}>
		   <View style={styles.inputWrapper}>
			<Text style={styles.label}>Selectionner </Text>
			<InputGroup>
			   <Icon name="search" size={15} color="#FF5E3A" />
			   <Input onFocus={()=>toggleSearchResultModal("pickUp")} 
			   style={styles.inputSearch} 
			   placeholder="Rechercher un lieu" 
			   onChangeText={handleInput.bind(this,"pickUp")}  
			   value={selectedPickUp && selectedPickUp.name} />			   
			</InputGroup>
			</View>

			<View style={styles.secondInputWrapper}>
			   <Text style={styles.label}>Drop </Text>
			   <InputGroup>
			      <Icon name="search" size={15} color="#FF5E3A" />
			      <Input 
			      onFocus={()=>toggleSearchResultModal("dropOff")} 
			      style={styles.inputSearch} 
			      placeholder="choisir un lieu" 
			      onChangeText={handleInput.bind(this,"dropOff")} 
			      value={selectedDropOff && selectedDropOff.name} />
			    </InputGroup>
			</View>

		</View>
		);
};

export default SearchBox;