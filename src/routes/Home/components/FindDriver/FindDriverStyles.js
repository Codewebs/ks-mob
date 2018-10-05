import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const styles = {
    findDriverContainer:{
        flex:1,
        backgroundColor:"#D55050",
        justifyContent: "center",
        alignItems: "center"
    },
    tabText: {
        fontSize: 12
    },
    subTabText: {
        fontSize: 8
    },
    spinner: {
        marginBottom: 15
    },
    btn: {
        marginTop: 10
    },
    text: {
        color: "white",
        fontSize:16,
        marginBottom:15,
        marginTop:15
    },
    locationIcon:{
        color: "#fff",
        fontSize: 18,
        marginTop:12
    },
    content:{
        position: "absolute",
        flex:1,
        top: 3,
        left: 0,
        right: 0,
        bottom: 3,
        justifyContent:"center",
        alignItems:"center"
    },
    pickup:{
        width:width * 0.9,
        borderRadius:7,
        height:40,
        backgroundColor:"#fff",
        marginTop:120,
        justifyContent: "center",
        alignItems: "center"

    },
    toArrow:{
        color:"#fff",
        fontSize:14,
        marginTop:7,
    },
    dropoff:{
        width:width * 0.9,
        borderRadius:7,
        height:40,
        backgroundColor:"#fff",
        marginTop:10,
        justifyContent: "center",
        alignItems: "center"

    },
    cancelBtnWrapper:{
        marginTop:10,
        width:width * 0.9,
        justifyContent: "center",
        alignItems: "center"
    },
    cancelBtn:{
        width:width * 0.9,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:7,
        borderWidth: 1,
        borderColor:"#fff",
        backgroundColor:"#FF5E3A",
        marginTop:4,
    },dismisslBtn:{
        width:width * 0.9,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:8,
        borderWidth: 2,
        borderColor:"#EFFBF8",
        backgroundColor:"#04B431"
    },
    cancelBtnText:{
        color: "#fff",
    },
    termsText:{
        color:"#fff",
        textAlign:"center",
        fontSize:12,
        marginBottom:10

    }
};

export default styles;

