import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'






export default function CompleteProfile({route}) {
    const navigation = useNavigation();
   
    const {name} = route.params;
    
      
    
   
    return (
        <View style={styles.container}>
            <View style={{ marginTop: '15%',}}>
              <View style={{flexDirection:'column', display:'flex', marginHorizontal:'10%'}}>
                  <Icon name="chevron-left" type="entypo" color="#0553B9" size={35} style={{alignItems:'flex-start'}}></Icon>
                  <Text style={{ fontSize:20, color:'#0553B9', textAlign:'left', marginTop:'2.5%', marginLeft:'5%', fontWeight:'bold'}}>Hey {name}, complete your profile</Text>
              </View>
              <View style={{marginTop:'20%'}}></View>
              <View style={{flexDirection:'row', display:'flex', marginHorizontal:'20%', marginTop:'5%'}}>
                <View style={{backgroundColor:'#0553B9', borderRadius:20, width:70, height:70, alignContent:'center'}}>
                <Icon name="user" type="font-awesome" color="#FFF" size={40} style={{marginTop:'20%'}}></Icon>
                </View>
                  <Icon name="circle" color="#C4C4C4" size={15} style={{marginTop:'60%', marginLeft:'10%'}}></Icon>
                  <Icon name="circle" color="#C4C4C4" size={15} style={{marginTop:'200%', marginLeft:'0%'}}></Icon>
                  <Icon name="circle" color="#C4C4C4" size={15} style={{marginTop:'65%', marginLeft:'10%'}}></Icon>
                  <View style={{backgroundColor:'#0553B9', borderRadius:20, width:70, height:70, alignContent:'center'}}>
                <Icon name="credit-card-alt" type="font-awesome" color="#FFF" size={30} style={{marginTop:'30%'}}></Icon>
                </View>  
              </View>
              <View style={{flexDirection:'row', display:'flex', marginHorizontal:'19%', marginTop:'5%'}}>
                  
              <TouchableOpacity onPress={()=>navigation.navigate('Personal')}><Text style={{ fontSize:20, color:'#0553B9', fontWeight:'bold', textAlign:'center'}}>Personal{'\n'}Details</Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('Payment')}><Text style={{fontSize:20, color:'#0553B9', fontWeight:'bold'}}>                     Payment{'\n'}                      Method</Text></TouchableOpacity>
              </View>
              <View style={{marginTop:'15%'}}></View>
              <View style={{marginTop:'2.5%', width:'100%' , borderRadius:10}}>
              <TouchableOpacity><Text style={{textAlign:'center', color:'#0553B9',  fontSize:18, textDecorationLine:'underline', textDecorationColor:'#FBDE44', textDecorationStyle:'double', marginTop:'5%'}}>I'll do this later</Text></TouchableOpacity>
              </View>
              
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        backgroundColor: '#FFF'
    },
    header: {
        height:'34%',
        width:'34%',
        resizeMode:'contain',
        marginLeft:'10%'
    },

});