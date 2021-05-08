import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler';

import { DraxProvider, DraxList } from 'react-native-drax';



const alphabet = 'Hello,World,Rearrange,This,Password,Coronavirus,Random,Programming,Hackathon,Spoon,Printer,Lamp,Coffee,Mask,Comma,Pen,Ink'.split(',');



const getItemStyleTweaks = (alphaItem) => {
  const alphaIndex = alphabet.indexOf(alphaItem);
  return {
    backgroundColor: '#FFF',
    height: 50,
  };
};

export default function Unlock() {
    const navigation = useNavigation();
  const [alphaData, setAlphaData] = useState(alphabet);
  return (
   
    <DraxProvider>
        
    <View style={styles.horizontal}>
        <Icon name="chevron-left" type="entypo" color="#0553B9" size={30}></Icon>
        <Text style={styles.title}>Wallet</Text>
        <Icon name="x" type="feather" color="#BDBDBD"></Icon>
    </View>
    <Text style={{fontSize:18, paddingHorizontal:'5%', fontWeight:'bold', color:"#0553B9"}}>Rearrage the following words in correct order by dragging them to unlock your wallet.</Text>
      <View style={styles.container}>
         
        <DraxList
          data={alphaData}
          renderItemContent={({ item }) => (
            <View style={[styles.alphaItem, getItemStyleTweaks(item)]}>
              <Text style={styles.alphaText}>{item}</Text>
            </View>
          )}
          onItemReorder={({ fromIndex, toIndex }) => {
            const newData = alphaData.slice();
            newData.splice(toIndex, 0, newData.splice(fromIndex, 1)[0]);
            setAlphaData(newData);
            console.log(alphaData);
          }}
          keyExtractor={(item) => item}
        />
      </View>
      <TouchableOpacity onPress={()=>{}}>
          <View style={{backgroundColor:'#0553B9', borderRadius:15, width:'70%', alignSelf:'center', paddingVertical:'5%', marginBottom:'5%'}}>
              <Text style={{fontSize:18, textAlign:'center', color:"#FFF", fontWeight:'bold'}}>Unlock</Text>
          </View>
      </TouchableOpacity>
    </DraxProvider>
   
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        paddingTop: 40,
        backgroundColor:"#EDF2F6"
},
  alphaItem: {
    backgroundColor: '#aaaaff',
    borderRadius: 15,
    margin: 4,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alphaText: {
    fontSize: 20,
    color:"#0553B9",
    fontWeight:'bold'
  },
  
body:{
    paddingHorizontal:40,
    paddingVertical:40
},

logo: {
    width:'60%',
    height:'75%',
    resizeMode:'contain',
    alignSelf:'center',
},
title: {
    fontFamily:'Roboto',
    color:"#0553B9",
    fontSize:25,
    textAlign:'center',
    fontWeight:'bold'
},
horizontal: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:'5%',
    paddingTop:'10%',
    paddingHorizontal:'5%'
},
});

