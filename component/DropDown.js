import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import ImageConstant from '../screens/ImageConstant';

const DropDown = ({ data = [], value = {}, onSelect = () => {} }) => {
  console.log("selected value ", !!value);
  const [showOption, setshowOption] = useState(false);

  const onSelectedItem = (val) => {
    setshowOption(false)
    onSelect(val)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropDownStyle}
        activeOpacity={0.8}
        onPress={() => setshowOption(!showOption)}
      >
        <Text>{!!value ? value?.name : `Apartment`}</Text>
        <Image
          style={{ width: 20, height: 20 ,transform:[{rotate: showOption? '180deg':'0deg'}]}}
          source={ImageConstant.icDropDown}
        />
      </TouchableOpacity>
      {showOption && (
        <View style={{padding:8}}>
          {data.map((val, i) => {
            return <TouchableOpacity 
                key={String(i)}
                onPress={() => onSelectedItem(val)}
                style={{
                    ...styles.selectedItemStyle,
                    backgroundColor: '#cccccc',
                }}    
            >
                <Text>{val.name}</Text>
                </TouchableOpacity>;
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "#fff",
},
dropDownStyle:{
    backgroundColor:'rgba(0,0,0,0.2)',
    padding:8,
    borderRadius:6,
    minHeight:42,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:6,
    backgroundColor:'#fff',
    borderWidth: 1,
    borderColor: "#ccc",
},
selectedItemStyle:{
    paddingVertical:8,
    borderRadius:4,
    marginBottom:2,
}

});
export default DropDown