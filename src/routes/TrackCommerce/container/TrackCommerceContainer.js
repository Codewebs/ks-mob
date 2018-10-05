import { connect } from "react-redux";
import TrackCommerce from "../components/TrackCommerce";
import {
	getCurrentLocation,
	getCommerceInfo,
	getCommerceLocation,
	getDistanceFromCommerce
} from "../module/trackCommerce";

const mapStateToProps = (state) => ({
	region: state.trackCommerce.region,
	selectedAddress:state.home.selectedAddress || {},
	commerceInfo:state.trackCommerce.commerceInfo || {},
	commerceLocation:state.trackCommerce.commerceLocation,
	showCommerceFound:state.trackCommerce.showCommerceFound,
	showCarMaker:state.trackCommerce.showCarMaker,
	distanceFromCommerce:state.trackCommerce.distanceFromCommerce || {}

});

const mapActionCreators = {
	getCurrentLocation,
	getCommerceInfo,
	getCommerceLocation,
	getDistanceFromCommerce
};
export default connect(mapStateToProps, mapActionCreators)(TrackCommerce);