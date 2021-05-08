import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import {useSelector, useDispatch} from 'react-redux'
import {increment,decrement, lock, unlock} from '../store/action'


export default function Wallet() {
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


    const portfolio = profileInfo.portfolio.map((data) => {
        return (
            <View style={styles.coins}>
            <Image source={{uri:`https://cryptologos.cc/logos/${data.currency}-${data.symbol.toLowerCase()}-logo.png?v=010`}} style={styles.coinLogo}></Image>
            <Text style={styles.coinLabel}>{data.symbol}</Text>
            <Text style={styles.coinAmount}>{balance ? "LOCKED":data.amount}</Text>

            </View>
        )});
    const txHistory = profileInfo.txHistory.map((data) => {
        return (
            <View style={styles.trades}>
            <View style={styles.horizontal}>
            <Image source={require('../assets/tx.png')} style={styles.coinLogo}></Image>
            <View>
            <Text style={styles.tradeTitle}>Amount {data.amount<0 ? "Credited":"Debited"}</Text>
            <Text style={styles.tradeSUb}>${data.amount<0 ? data.amount*-1:data.amount} {data.amount>0 ? "received from":"transferred to"} account {data.acc}</Text>
            </View>
            </View>
            </View>
        )});
        

    
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
            <Text style={styles.title}>Wallet</Text>
            <Text style={styles.link}>View All</Text>
            </View></TouchableOpacity>
            <View style={styles.horizontal}>
                <ScrollView horizontal={true} style={{overflow:'visible'}}>
                {portfolio}
                </ScrollView>
            </View>
         
            <Text style={styles.title}>Total Balance</Text>
            <View style={styles.horizontal}>
            <View style={styles.total}><Text style={{fontSize:20, color:"#FFF", fontWeight:'bold', textAlign:'center', textAlignVertical:'center', marginTop:'5%'}}>${balance ? "*****" : profileInfo.profileInfo.totalBalance.toString()}</Text></View>
            <TouchableOpacity onPress={()=>{ navigation.navigate('Unlock')}}><View style={styles.btn}><Text style={{fontSize:20, color:"#FFF", fontWeight:'bold', textAlign:'center', textAlignVertical:'center', marginTop:'5%'}}>{balance ? "Unlock":"Lock"}</Text></View></TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', marginTop:'5%'}}>
            <View style={{marginLeft:'5%'}}>
                <Text style={styles.labeldrop}>Download statement for</Text>
                <DropDownPicker
                open={open}
                value={value}
                items={items}
                setValue={setValue}
                setItems={setItems}
                setOpen={setOpen}
                placeholder="Select duration"
                placeholderStyle={{fontWeight:'bold', color:"#0553B9"}}
                style={{borderColor:"#FFF", height:40, width:275}}
                labelStyle={{color:"#0553B9", fontWeight:'bold'}}
                containerStyle={{height:50, width:275, borderColor:'#FFF', zIndex:3}}
                />
            </View>
            <TouchableOpacity><Icon name="download" type="feather" color="#0553B9" size={30} style={{marginTop:'50%', marginLeft:'5%'}}></Icon></TouchableOpacity>
            </View>

            <Text style={styles.title}>Recent Transactions</Text>
            <View style={{height:'27.5%'}}>
                <ScrollView style={{overflow:'hidden', paddingBottom:'5%'}}>
                {txHistory}
                </ScrollView>
            </View>
               
        </View>
        <View style={styles.footer}>
                    <View style={{justifyContent:'space-between', flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Home')}><View>
                    <Icon name="home" type="entypo" color="#A6A9B4"></Icon>
                    <Text style={styles.labelInactive}>Home</Text>
                    </View></TouchableOpacity>
                    <TouchableOpacity  onPress={()=>navigation.navigate('Wallet')}><View>
                    <Icon name="wallet" type="entypo" color="#0553B9"></Icon>
                    <Text style={styles.label}>Wallet</Text>
                    </View></TouchableOpacity>
                    <TouchableOpacity  onPress={()=>navigation.navigate('Discover')}><View>
                    <Icon name="search" type="feather" color="#A6A9B4"></Icon>
                    <Text style={styles.labelInactive}>Discover</Text>
                    </View></TouchableOpacity>
                    <TouchableOpacity  onPress={()=>navigation.navigate('Notifications')}><View>
                    <Icon name="notifications" type="ionicons" color="#A6A9B4"></Icon>
                    <Text style={styles.labelInactive}>Notifications</Text>
                    </View></TouchableOpacity>
                </View>
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
        color:"#A6A9B4",
        fontWeight:'bold',
        fontSize:22,
        textAlign:'left',
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
        width:200,
        height:50,
        alignContent:'center'
    },
    btn: {
        backgroundColor:"#0553B9",
        color:"#FFF",
        borderRadius:20,
        paddingHorizontal:'5%',
        paddingVertical:'2.5%',
        width:150,
        height:50,
        alignContent:'center',
        marginLeft:'5%'
    }

});