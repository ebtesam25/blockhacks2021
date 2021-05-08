import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import {useSelector, useDispatch} from 'react-redux'
import { lock, unlock} from '../store/action'
import * as ImagePicker from 'expo-image-picker';



export default function Payment() {
    const navigation = useNavigation();
    const balance = useSelector(state => state);
    const dispatch = useDispatch();
    const [profileInfo, setProfile] = useState({"profileInfo":{"imgurl":"https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=644&q=80","totalBalance":20},
    "portfolio":[{"currency":"bitcoin","symbol":"BTC","amount":1000},{"currency":"ethereum","symbol":"ETH","amount":2000},{"currency":"xrp","symbol":"XRP","amount":7000},],
    "tradeHistory":{"bids":[{"amount":1340,"user":"elonmusk#01","nft":"34532"},{"amount":1140,"user":"johndoe#01","nft":"34532"}],"sales":[{"amount":11000,"user":"elonmusk#01","nft":"34532"},{"amount":1000,"user":"johndoe#01","nft":"34532"}],"purchases":[{"amount":1100,"nft":"34532"},{"amount":1400,"nft":"342432"}]},
    "txHistory":[{"timestamp":"05/07/2021","amount":-230},{"timestamp":"05/07/2021","amount":-230,"acc":"ABC123"},{"timestamp":"05/07/2021","amount":1000,"acc":"XYZ123"},{"timestamp":"05/07/2021","amount":140,"acc":"0xA123"},{"timestamp":"05/07/2021","amount":-20,"acc":"A123001"}]});

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Past week', value: 7},
        {label: 'Past month', value: 30},
        {label: 'Past year', value: 365},
        {label: 'Entire history', value: 999},
      ]);
    const [newNft, setNewNFT] = useState({"userid":"1","title":'',"description":'',"imgurl":'',"type":''});
    const [personal, setPersonal] = useState({"idphoto":"","mobile":"","ssn":"","itin":"","income":""});
    const [image, setImage] = useState(null);
    const [image64, setImage64] = useState(null);
    const [imgurl, setImgurl] = useState(null);

    

    
    return (
        <View style={styles.contain}>
            <View style={styles.container}>
            
            <View style={styles.horizontal}>
                <View>
                <Icon name="chevron-left" type="entypo" color="#0553B9"></Icon>
                </View>
                <Image style={styles.avatar} source={{uri:profileInfo.profileInfo.imgurl}}></Image>
            </View>
       
           <View style={{marginTop:'15%'}}></View>
        
            <TouchableOpacity><View style={styles.horizontal}>
            <Text style={styles.title}>Payment Method</Text>
            </View></TouchableOpacity>
            <View style={{marginTop:'15%'}}></View>
            <View style={styles.horizontal}>
                <TouchableOpacity onPress={()=>{setNewNFT(nft => ({...nft,type: 'sale'}))}}><View style={styles.btn}><Icon name="credit-card-alt" type="font-awesome" color='#FFF' size={15} style={{marginHorizontal:'5%', marginVertical:'20%'}}></Icon><Text style={{fontSize:18, color:"#FFF", fontWeight:'bold', textAlign:'center', textAlignVertical:'center', marginTop:'0%'}}>Credit Card</Text></View></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNewNFT(nft => ({...nft,type: 'auction'}))}}><View style={styles.btn}><Icon name="paypal" type="font-awesome" color='#FFF' size={15} style={{marginHorizontal:'5%', marginVertical:'20%'}}></Icon><Text style={{fontSize:18, color:"#FFF", fontWeight:'bold', textAlign:'center', textAlignVertical:'center', marginTop:'0%'}}>PayPal</Text></View></TouchableOpacity>
                </View>
         
            <View style={{marginTop:'5%'}}></View>
          
            <View style={{flexDirection:'row', marginTop:'5%'}}>
            <View style={{marginLeft:'0%'}}>
                <Text style={styles.subtitle}>Credit Card Number</Text>
                
                <View style={styles.total}>
                    <TextInput placeholder="XXX-XXX-XXX-XXXX" style={{fontWeight:'bold', color:"#0553B9"}} value={personal.mobile} onChangeText={(e)=>{setPersonal(info => ({...info,mobile: e}))}}></TextInput>
                </View>
                <View style={styles.horizontal}>
                    <View>
                <Text style={styles.subtitle}>Expiry Date</Text>
                
                <View style={styles.field}>
                    <TextInput placeholder="MM/YYYY" style={{fontWeight:'bold', color:"#0553B9"}} value={personal.mobile} onChangeText={(e)=>{setPersonal(info => ({...info,mobile: e}))}}></TextInput>
                </View></View>
                <View style={{marginLeft:'10%'}}>
                <Text style={styles.subtitle}>CVV</Text>
                
                <View style={styles.field}>
                    <TextInput placeholder="XXX" style={{fontWeight:'bold', color:"#0553B9"}} value={personal.mobile} onChangeText={(e)=>{setPersonal(info => ({...info,mobile: e}))}}></TextInput>
                </View></View></View>
                <View style={{marginTop:'10%'}}></View>
                
               
                
                <View style={{marginTop:'30%'}}></View>
                <TouchableOpacity onPress={()=>{navigation.navigate('Completed')}}><View style={styles.btnxl}><Text style={{fontSize:18, color:"#FFF", fontWeight:'bold', textAlign:'center', textAlignVertical:'center', marginTop:'3.5%'}}>Confirm</Text></View></TouchableOpacity>
            </View>
            
            </View>
            <Text style={styles.tradeSUb}>By registering your personal details, you agree to NFTZ's terms of use and privacy policy</Text>          
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
        textAlign:'left',
        flexWrap:'wrap',
    },
    subtitle: {
        fontFamily:'Roboto',
        color:"#0553B9",
        fontWeight:'bold',
        fontSize:18,
        textAlign:'left',
        marginTop:'10%',
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
        right:0,
        borderRadius:20,

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
        fontSize:12,
        textAlign:'left',
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
    coinLogo: {
        height:50,
        width:50,
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
        color:"#0553B9",
        fontWeight:'bold',
        fontSize:18,
        textAlign:'left',
        flexWrap:'wrap',
        marginLeft:'5%'
    },
    tradeSUb: {
        fontFamily:'Roboto',
        color:"#A6A9B4",
        fontWeight:'bold',
        fontSize:15,
        textAlign:'center',
        flexWrap:'wrap',
        alignSelf:'center',
        marginTop:'5%'
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
        backgroundColor:"#FFF",
        color:"#0553B9",
        borderRadius:10,
        paddingHorizontal:'5%',
        paddingVertical:'2.5%',
        width:335,
        height:40,
        alignContent:'center'
    },
    field: {
        backgroundColor:"#FFF",
        color:"#0553B9",
        borderRadius:10,
        paddingHorizontal:'5%',
        paddingVertical:'2.5%',
        width:150,
        height:40,
        alignContent:'center'
    },
    desc: {
        backgroundColor:"#FFF",
        color:"#0553B9",
        borderRadius:10,
        paddingHorizontal:'5%',
        paddingVertical:'2.5%',
        width:350,
        alignContent:'center'
    },
    btn: {
        backgroundColor:"#0553B9",
        color:"#FFF",
        borderRadius:15,
        paddingHorizontal:'5%',
        paddingVertical:'2.5%',
        width:150,
        height:40,
        alignContent:'center',
        marginLeft:'5%',
        flexDirection:'row'
    },
    btnxl: {
        backgroundColor:"#0553B9",
        color:"#FFF",
        borderRadius:20,
        paddingHorizontal:'5%',
        paddingVertical:'2.5%',
        width:'80%',
        height:60,
        alignContent:'center',
        alignSelf:'center',
        marginTop:'10%'
    }

});