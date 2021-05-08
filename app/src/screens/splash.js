import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux'
import {increment,decrement, lock, unlock} from '../store/action'






export default function Splash() {
    const navigation = useNavigation();
    const dispatch = useDispatch();


 
    return (
        <View style={styles.contain}>
            <View style={styles.container}>
            
           
       
           <View style={{marginTop:'50%'}}></View>
        
           <Text style={{backgroundColor:"#0553B9", height:200, color:"#FFF", fontWeight:'bold', width:200,
           alignSelf:'center', textAlign:'center', borderRadius:200, textAlignVertical:'center', letterSpacing:-8, fontSize:30}}>NFTZ</Text>
           <View style={{marginTop:'50%'}}></View>
            <TouchableOpacity onPress={()=>{dispatch(lock());navigation.navigate('Login');}}><View style={styles.btn}>
                <Text style={{color:"#FFF", fontWeight:'bold', textAlign:'center'}}>Continue</Text>
            </View></TouchableOpacity>
               
        </View>
  
        </View>
    );

}

const styles = StyleSheet.create({
    contain: {
        flex:1,
        height: '100%',
        position: 'relative',
        backgroundColor:"#EDF2F6"
    },
    container: {
        flex:1,
        height: '100%',
        position: 'relative',
        paddingHorizontal:'7.5%',
        paddingTop:'7.5%',
        backgroundColor:"#EDF2F6"
    },
    title: {
        fontFamily:'Roboto',
        color:"#0553B9",
        fontWeight:'bold',
        fontSize:25,
        textAlign:'center',
        flexWrap:'wrap',
    },
    subtitle: {
        fontFamily:'Roboto',
        color:"#0553B9",
        fontWeight:'100',
        fontSize:20,
        textAlign:'center',
    },
    horizontal: {
        flexDirection:'row',
        display:'flex',
    },
    avatar: {
        height:50,
        width:50,
        resizeMode:'cover',
        position:'absolute',
        right:0
    },
    create: {
        backgroundColor:'#FFF',
        borderRadius:20,
        paddingLeft:'5%',
        paddingRight:'10%',
        paddingVertical:'5%',
        marginRight:'2.5%',
        marginVertical:'5%',
        width:'50%',
    },
    createlabel: {
        fontFamily:'Roboto',
        color:"#0553B9",
        fontWeight:'bold',
        fontSize:20,
        textAlign:'left',
        flexWrap:'wrap',
        marginLeft:'7.5%',
        textAlignVertical:'bottom',
    },
    footer:{
        width:'100%',
        height:'10%',
        position:'absolute',
        bottom:0,
        backgroundColor:"#FFF",
        paddingHorizontal:'10%',
        paddingVertical:'5%',
        justifyContent:'space-evenly'
    },
    label: {
        fontFamily:'Roboto',
        color:"#0553B9",
        fontWeight:'bold',
        fontSize:12,
        textAlign:'center',
        flexWrap:'wrap',
    },
    labeldrop: {
        fontFamily:'Roboto',
        color:"#0553B9",
        fontWeight:'bold',
        fontSize:14,
        textAlign:'left',
        marginLeft:'5%'
    },
    labellarge: {
        fontFamily:'Roboto',
        color:"#0553B9",
        fontWeight:'bold',
        fontSize:16,
        textAlign:'left',
        marginLeft:'5%'
    },
    labelgold: {
        fontFamily:'Roboto',
        color:"#F2B344",
        fontWeight:'bold',
        fontSize:22,
        textAlign:'left',
        marginLeft:'5%'
    },
    labelInactive: {
        fontFamily:'Roboto',
        color:"#A6A9B4",
        fontWeight:'bold',
        fontSize:12,
        textAlign:'center',
        flexWrap:'wrap',
    },
    coins: {
        backgroundColor:"#FFF",
        borderRadius:15,
        paddingHorizontal:'5%',
        paddingVertical:'5%',
        alignContent:'center',
        width:125,
        height:150,
        marginHorizontal:10,
        marginVertical:10,
    },
    nftimg: {
        height:275,
        width:275,
        borderRadius:10,
        resizeMode:'cover',
        alignSelf:'center',
    },
    coinLabel: {
        fontFamily:'Roboto',
        color:"#A6A9B4",
        fontWeight:'bold',
        fontSize:22,
        textAlign:'center',
    },
    coinAmount: {
        fontFamily:'Roboto',
        color:"#04408D",
        fontWeight:'bold',
        fontSize:22,
        textAlign:'center',
    },
    trades: {
        backgroundColor:"#FFF",
        borderRadius:15,
        paddingHorizontal:'5%',
        paddingVertical:'5%',
        alignContent:'center',
        width:'90%',
        marginHorizontal:10,
        marginVertical:10,
    },
    tradeTitle: {
        fontFamily:'Roboto',
        color:"#F2B344",
        fontWeight:'bold',
        fontSize:25,
        textAlign:'left',
        flexWrap:'wrap',
        marginLeft:'5%'
    },
    tradeSUb: {
        fontFamily:'Roboto',
        color:"#A6A9B4",
        fontWeight:'bold',
        fontSize:15,
        textAlign:'left',
        flexWrap:'wrap',
        marginLeft:'5%',
        width:'90%'
    },
    link: {
        fontFamily:'Roboto',
        color:"#0553B9",
        fontWeight:'bold',
        fontSize:15,
        textAlign:'right',
        textAlignVertical:'bottom',
        textDecorationLine:'underline',
        position:'absolute',
        right:0
    },
    total: {
        backgroundColor:"#d9dadb",
        color:"#FFF",
        borderRadius:20,
        paddingHorizontal:'5%',
        paddingVertical:'2.5%',
        width:'40%',
        height:60,
        alignContent:'center'
    },
    creator: {
        backgroundColor:"#FFF",
        borderRadius:15,
        paddingHorizontal:20,
        paddingVertical:20,
        alignContent:'center',
        width:250,
        height:140,
        marginHorizontal:10,
        marginVertical:10,
    },
    creatorTitle: {
        fontFamily:'Roboto',
        color:"#0553B9",
        fontWeight:'bold',
        fontSize:18,
        textAlign:'left',
        flexWrap:'wrap',
        marginLeft:'5%'
    },
    btn: {
        backgroundColor:"#0553B9",
        paddingHorizontal:'5%',
        paddingVertical:'5%',
        borderRadius:15,
        marginTop:'5%'
    }

});