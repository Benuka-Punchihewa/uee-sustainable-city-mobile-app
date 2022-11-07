import React from 'react';
import { Text,TouchableOpacity,View,StyleSheet,TextInput} from "react-native";
import languageForgetpassword from '../../language/language.forgetpassword';
import languageLogin from '../../language/language.login';

const language = "SIN";

//ForgetPassword screen
const ForgetPassword = ({ navigation }) =>{

    return(
        <View style={styles.container}>
            <Text style={styles.header}>
                {languageForgetpassword.FORGET_PASSWORD[language]}
            </Text>
            <View style={styles.pointsContainer}>

                <View style={styles.formInput}>
                    <Text style={styles.text}>{languageForgetpassword.EMAIL[language]}</Text>
                    <TextInput style={styles.textInput} placeholder={languageForgetpassword.EMAIL[language]}/>
                </View>

                <View style={styles.formInput}>
                    <TouchableOpacity style={styles.defaultButton}>
                        <Text style={{textAlign:'center',fontSize:16,color:'#fff'}}>{languageForgetpassword.SENT_LINK[language]}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.formInput}>
                    <View style={styles.line}></View>
                </View>

                {/* navigation to sign in page */}
                <View style={styles.formInput}>
                    <TouchableOpacity onPress={() =>{ navigation.navigate("Login")}} >
                        <Text style={{color:"#14b53f",textAlign:'center',fontSize:16,fontWeight:'bold'}}>{languageForgetpassword.NEED_ACCOUNT[language]}</Text>
                    </TouchableOpacity>
                </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },defaultBg:{
        width:'100%',
        height:200,
        resizeMode:'cover',
    },formInput:{
        marginTop:5,
        padding:5,
    },textInput:{
        padding:10,
        fontSize:16,
        borderWidth:1,
        borderColor:"#a7a7a7",
        borderRadius:10
    },defaultButton:{
        padding:15,
        backgroundColor:'#4287f5',
        borderRadius:10,
    },text:{
        padding:5,
    },header:{
        fontSize:30,
        textAlign:'center',
        marginTop:80,
        fontWeight:'bold',
        paddingVertical: 20
    },main:{
        padding:20,
        backgroundColor:'#fff',
    },loginbutton:{
        textAlign:'center',
        fontSize:16,
        color:'#fff',
    },forgetpassword:{
        color:"#db2218",
        textAlign:'right',
        fontSize:16,
        fontWeight:'bold',
    },line:{
        height:1,
        backgroundColor:'#ddd',
        width:'100%',
    },needAccount:{
        color:"#14b53f",
        textAlign:'center',
        fontSize:16,
        fontWeight:'bold',
    }
});

export default ForgetPassword;