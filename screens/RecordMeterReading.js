import React, { useState } from 'react';
import { Text,TouchableOpacity,View,StyleSheet,TextInput, ScrollView} from "react-native";
import DropDown from '../component/DropDown';
import languageRecordMeterReading from '../language/language.RecordMeterReading';

const language = "SIN";

let data = [{
    id:1,
    name:"House 1",
},{
    id:2,
    name:"House 2",
},{
    id:3,
    name:"House 3",
}]

//Register screen
const RecordMeterReading = ({ navigation }) =>{

    const [selectedItem,setSelectedItem] = useState(null)

    const onSelect = (item) => {
        setSelectedItem(item)
    }
    return(
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.PageTitle}>
                {languageRecordMeterReading.CURRENT_READING[language]}
            </Text>

            <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>

                <View style={styles.formInput}>
                    <Text>{languageRecordMeterReading.APARTMENT[language]}</Text>
                    {/* <TextInput style={styles.textInput} placeholder={languageRegister.APARTMENT[language]} /> */}
                    <DropDown
                        title={languageRecordMeterReading.APARTMENT[language]}
                        value={selectedItem}
                        data={data}
                        onSelect={onSelect}
                    />
                </View>

                <View style={styles.formInput}>
                    <Text>{languageRecordMeterReading.HOME_ID[language]}</Text>
                    {/* <TextInput style={styles.textInput} placeholder={languageRegister.HOME[language]} secureTextEntry={true}/> */}
                    <DropDown
                        title={languageRecordMeterReading.HOME_ID[language]}
                        value={selectedItem}
                        data={data}
                        onSelect={onSelect}
                    />
                </View>
                
                <View style={styles.pointsContainer}>
                <View style={styles.formInput}>
                    <Text>{languageRecordMeterReading.CURRENT_READING[language]}</Text>
                    <TextInput style={styles.textInput} placeholder={languageRecordMeterReading.CURRENT_READING[language]}/>
                </View>
                
                <View style={styles.formInput}>
                    <TouchableOpacity style={styles.defaultButton} onPress={() =>{ navigation.navigate("ElectricityBills")}}>
                        <Text style={{textAlign:'center',fontSize:16,color:'#fff'}}>{languageRecordMeterReading.PROCEED[language]}</Text>
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
        flex:1,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },defaultBg:{
        width:'100%',
        height:200,
        resizeMode:'cover',
    },formInput:{
        marginTop:10,
        padding:5,
    },textInput:{
        padding:10,
        fontSize:16,
        borderWidth:1,
        borderColor:"#a7a7a7",
        borderRadius:10
    },defaultButton:{
        padding:15,
        backgroundColor: "#40916C",
        borderRadius:10,
    },text:{
        fontSize: 16,
        color: "black",
        justifyContent:'center',
        textAlign: "center",
        marginBottom: 30,
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
    },
    PageTitle: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 15,
    },
    line:{
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

export default RecordMeterReading;