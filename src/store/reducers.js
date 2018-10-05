import { combineReducers } from "redux";
import { HomeReducer as home } from "../routes/Home/modules/home";
import { TrackCommerceReducer as trackCommerce } from "../routes/TrackCommerce/module/trackCommerce";

export const makeRootReducer = () => {
		return combineReducers ({ 
			home, 
			trackCommerce
		});
} 

export default makeRootReducer;