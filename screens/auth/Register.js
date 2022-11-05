import React from 'react';
import { Text,TouchableOpacity,View,StyleSheet,TextInput, ScrollView} from "react-native";
import languageLogin from '../../language/language.login';
import languageRegister from '../../language/language.register';

const language = "SIN";

//Register screen
const Register = ({ navigation }) =>{

    return(
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.header}>
                {languageRegister.SIGN_UP[language]}
            </Text>
            <View style={styles.pointsContainer}>

                <View style={styles.formInput}>
                    <Text style={styles.text}>{languageRegister.NAME[language]}</Text>
                    <TextInput style={styles.textInput} placeholder={languageRegister.NAME[language]}/>
                </View>

                <View style={styles.formInput}>
                    <Text style={styles.text}>{languageRegister.APARTMENT[language]}</Text>
                    <TextInput style={styles.textInput} placeholder={languageRegister.APARTMENT[language]}/>
                </View>

                <View style={styles.formInput}>
                    <Text style={styles.text}>{languageRegister.HOME[language]}</Text>
                    <TextInput style={styles.textInput} placeholder={languageRegister.HOME[language]} secureTextEntry={true}/>
                </View>
                
                <View style={styles.formInput}>
                    <Text style={styles.text}>{languageRegister.BIRTHDAY[language]}</Text>
                    <TextInput style={styles.textInput} placeholder={languageRegister.BIRTHDAY[language]} secureTextEntry={true}/>
                </View>

                <View style={styles.formInput}>
                    <Text style={styles.text}>{languageRegister.PASSWORD[language]}</Text>
                    <TextInput style={styles.textInput} placeholder={languageRegister.PASSWORD[language]} secureTextEntry={true}/>
                </View>

                <View style={styles.formInput}>
                    <Text style={styles.text}>{languageRegister.CONFIRM_PASSWORD[language]}</Text>
                    <TextInput style={styles.textInput} placeholder={languageRegister.CONFIRM_PASSWORD[language]} secureTextEntry={true}/>
                </View>

                <View style={styles.formInput}>
                    <TouchableOpacity style={styles.defaultButton} onPress={() =>{ navigation.navigate("Home")}}>
                        <Text style={{textAlign:'center',fontSize:16,color:'#fff'}}>Sign up</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.formInput}>
                    <TouchableOpacity onPress={() =>{ navigation.navigate("Register")}}>
                        <Text style={styles.needAccount}>{languageRegister.NEED_ACCOUNT[language]}</Text>
                    </TouchableOpacity>
                </View>
       
                <View style={styles.formInput}>
                    <View style={styles.line}></View>
                </View>
        </View>
    </View>
</ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
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
        marginTop:30,
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

export default Register;