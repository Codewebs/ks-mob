import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from "redux-logger";
import '../Globals.js';
import makeRootReducer from './reducers'
import createSocketIoMiddleware from "redux-socket.io";

import io from "socket.io-client/dist/socket.io";

let socket = io(localhoster, {jsonp:false});
//console.log(localhoster);
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

const log = createLogger({diff: true, collapsed:true });
 
 export default(initialState = {}) => {

    // ======================================================
    // Middleware Configuration
    // ======================================================
    const middleware = [thunk, log, socketIoMiddleware];



 	const enhancers = [];



 	const store = createStore(
 		makeRootReducer(),
 		initialState,
 		compose(
 			applyMiddleware(...middleware),
 			...enhancers
 			)
 		);
 	return store;



 };