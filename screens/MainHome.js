import React from 'react';
import { Text,TouchableOpacity,View,StyleSheet,Image} from "react-native";
import languageMainHome from '../language/language.MainHome';

const language = "SIN";

//Splash screen
const MainHome = ({ navigation }) =>{

    return(
        <View style={styles.container}>
            <View style={styles.pointsContainer}>

            <View style={styles.ImgContainer}>
                <Image
                    style={{ width: 275, height: 300 }}
                    source={require("../assets/images/home.png")}
                />
            </View>

            <Text style={styles.header}>
                {languageMainHome.WELCOME[language]}
            </Text>

            <View style={styles.formInput}>
                <TouchableOpacity style={styles.defaultButton} onPress={() =>{ navigation.navigate("RideList")}}>
                    <Text style={styles.loginbutton}>{languageMainHome.SIGN_IN[language]}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.formInput}>
                <TouchableOpacity onPress={() =>{ navigation.navigate("Register")}}>
                    <Text style={styles.needAccount}>{languageMainHome.NEED_ACCOUNT[language]}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.formInput}>
                <View style={styles.line}></View>
            </View>

            <View style={styles.formInput}>
                <TouchableOpacity style={styles.SignUpButton} onPress={() =>{ navigation.navigate("RideList")}}>
                    <Text style={styles.SignUpText}>{languageMainHome.SIGN_UP[language]}</Text>
                </TouchableOpacity>
            </View>
                
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },formInput:{
        marginTop:5,
        padding:5,
    },defaultButton:{
        padding:15,
        backgroundColor:'#40916C',
        borderRadius:10,
    },header:{
        fontSize:30,
        textAlign:'center',
        marginTop:40,
        fontWeight:'bold',
        paddingVertical: 20
    },loginbutton:{
        textAlign:'center',
        fontSize:16,
        color:'#fff',
    },line:{
        height:1,
        backgroundColor:'#ddd',
        width:'100%',
    },needAccount:{
        color:"#14b53f",
        textAlign:'center',
        fontSize:16,
        fontWeight:'bold',
    },
    ImgContainer: {
        justifyContent: "center",
        alignContent: "center",
        alignItems:'center',
        marginTop:10,
    },
    SignUpButton:{
        padding:15,
        backgroundColor:'#95D5B2',
        borderRadius:10,
    },
    SignUpText:{
        textAlign:'center',
        fontSize:16,
        color:'black',
    },
});

export default MainHome;