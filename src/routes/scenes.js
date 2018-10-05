import React from "react";
import {Actions, Scene} from "react-native-router-flux";
import HomeContainer from "./Home/containers/HomeContainer";
import TrackCommerceContainer from "./TrackCommerce/container/TrackCommerceContainer";

const scenes = Actions.create(
	<Scene key="root" hideNavBar >
		<Scene key="home" component={HomeContainer} title="home" initial />
		<Scene key="trackCommerce" component={TrackCommerceContainer} title="trackCommerce" />
 	</Scene>
	);
export default scenes;