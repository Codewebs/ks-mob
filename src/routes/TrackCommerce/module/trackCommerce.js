import update from "react-addons-update";
import constants from "./actionConstants";
import { Dimensions } from "react-native"
import RNGooglePlaces from "react-native-google-places";

//import request from "../../../util/request";
import request from "superagent";
import calculateFare from "../../../util/fareCalculator.js";
import '../../../Globals.js';
//--------------------
//Constants
//--------------------

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

const { 
	GET_CURRENT_LOCATION,
	GET_COMMERCE_INFORMATION,
	GET_COMMERCE_LOCATION,
	GET_DISTANCE_FROM_COMMERCE
} = constants;

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = ASPECT_RATIO * LATITUDE_DELTA



//--------------------
//Actions
//--------------------
export function getCurrentLocation(){
	console.log("cest bon je suis au curentLocation de trackhome");
	return(dispatch)=>{
		navigator.geolocation.getCurrentPosition(
			(position)=>{
				dispatch({
					type:GET_CURRENT_LOCATION,
					payload:position
				});
			},
			(error)=> console.log(error.message),
			{enableHighAccuracy: true, timeout: 20000, maximumAge:1000}
		);
	}
}

//Get Commerce's info

export function getCommerceInfo(){
	console.log('je suis a commerceInfo');
	return (dispatch, store)=>{
		let id = store().home.booking.commerceId;
		request.get(localhoster+"/api/commerces/" + id)
		.finish((erroe, res)=>{
			dispatch({
				type:GET_COMMERCE_INFORMATION,
				payload:res.body
			});
		});
	}
}


//Get initial commerce location
export function getCommerceLocation(){
	console.log('je suis a commerceLocation dans trackhome');
	return (dispatch, store)=>{
		let id = store().home.booking.commerceId;
		request.get(localhoster+"/api/commerceLocation/" + id)
		.finish((erroe, res)=>{
			dispatch({
				type:GET_COMMERCE_LOCATION,
				payload:res.body
			});
		});
	}
}

//get distance from commerce
export function getDistanceFromCommerce(){
	return (dispatch, store)=>{
		if(store().trackCommerce.commerceLocation){
			request.get("https://maps.googleapis.com/maps/api/distancematrix/json")
			.query({
				origins:store().home.selectedAddress.selectedPickUp.latitude + 
				"," + store().home.selectedAddress.selectedPickUp.longitude,
				destinations:store().trackCommerce.dcommerceLocation.coordinate.coordinates[1] + 
				"," + store().trackCommerce.commerceLocation.coordinate.coordinates[0],
				mode:"driving",
				key:"AIzaSyCOp3vO6QWBpVQgE2NW9kjUoBNLMgRF6eQ"
			})
			.finish((error, res)=>{
				dispatch({
					type:GET_DISTANCE_FROM_COMMERCE,
					payload:res.body
				})
			});

		}					
	}
}

//--------------------
//Action Handlers
//--------------------
function handleGetCurrentLocation(state, action){
	console.log("hanle je suis au curentLocation de trackhome");
	return update(state, {
		region:{
			latitude:{
				$set:action.payload.coords.latitude
			},
			longitude:{
				$set:action.payload.coords.longitude
			},
			latitudeDelta:{
				$set:LATITUDE_DELTA
			},
			longitudeDelta:{
				$set:LONGITUDE_DELTA
			}
		}
	})
}

function handleGetCommerceInfo(state, action){
	return update(state, {
		commerceInfo:{
			$set:action.payload
		}
	});
}

function handleUpdateCommerceLocation(state, action){
	return update(state, {
		commerceLocation:{
			$set:action.payload
		}
	});
}

function handleGetCommerceLocation(state, action){
	return update(state, {
		commerceLocation:{
			$set:action.payload
		},
		showCommerceFound:{
			$set:false
		},
		showCarMaker:{
			$set:true
		}

	});
}

function handleGetDistanceFromCommerce(state, action){
		return update(state, {
			distanceFromCommerce:{
				$set:action.payload
			}
		});
}
const ACTION_HANDLERS = {
	GET_CURRENT_LOCATION:handleGetCurrentLocation,
	GET_COMMERCE_INFORMATION:handleGetCommerceInfo,
	UPDATE_COMMERCE_LOCATION:handleUpdateCommerceLocation,
	GET_COMMERCE_LOCATION:handleGetCommerceLocation,
	GET_DISTANCE_FROM_COMMERCE:handleGetDistanceFromCommerce


}
const initialState = {
	region:{},
	showCommerceFound:true
};

export function TrackCommerceReducer (state = initialState, action){
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state;
}