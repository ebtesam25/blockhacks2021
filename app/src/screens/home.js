import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux'
import {increment,decrement, lock, unlock} from '../store/action'


export default function Home() {
    const navigation = useNavigation();
    const balance = useSelector(state => state);
    const dispatch = useDispatch();
    const [profileInfo, setProfile] = useState({"profileInfo":{"imgurl":"https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=644&q=80","totalBalance":20},
    "portfolio":[{"currency":"bitcoin","symbol":"BTC","amount":1000},{"currency":"ethereum","symbol":"ETH","amount":2000},{"currency":"xrp","symbol":"XRP","amount":7000},],
    "tradeHistory":{"bids":[{"amount":1340,"user":"elonmusk#01","nft":"34532"},{"amount":1140,"user":"johndoe#01","nft":"34532"}],"sales":[{"amount":11000,"user":"elonmusk#01","nft":"34532"},{"amount":1000,"user":"johndoe#01","nft":"34532"}],"purchases":[{"amount":1100,"nft":"34532"},{"amount":1400,"nft":"342432"}]}});


    const portfolio = profileInfo.portfolio.map((data) => {
        return (
            <View style={styles.coins}>
            <Image source={{uri:`https://cryptologos.cc/logos/${data.currency}-${data.symbol.toLowerCase()}-logo.png?v=010`}} style={styles.coinLogo}></Image>
            <Text style={styles.coinLabel}>{data.symbol}</Text>
            <Text style={styles.coinAmount}>{balance ? "*****":data.amount}</Text>

            </View>
        )});
    const tradeHistory = profileInfo.tradeHistory.bids.map((data) => {
        return (
            <View style={styles.trades}>
            <View style={styles.horizontal}>
            <Image source={require('../assets/bid.png')} style={styles.coinLogo}></Image>
            <View>
            <Text style={styles.tradeTitle}>New bid for ${data.amount}</Text>
            <Text style={styles.tradeSUb}>From {data.user} for your NFT #{data.nft}</Text>
            </View>
            </View>
            </View>
        )});

        useEffect(()=>{
            dispatch(unlock());
        },[]);
        

    
    return (
        <View style={styles.contain}>
            <View style={styles.container}>
            
            <View style={styles.horizontal}>
                <View>
                <Text style={styles.title}>NFTZ</Text>
                <Text style={styles.subtitle}>{balance ? "Wallet Locked" : profileInfo.profileInfo.totalBalance}</Text>

                </View>
                <Image style={styles.avatar} source={{uri:profileInfo.profileInfo.imgurl}}></Image>
            </View>
            <View style={styles.horizontal}>
            <View style={styles.create}>
                <TouchableOpacity onPress={()=>navigation.navigate('Create')}><View style={styles.horizontal}>
                <Icon name="pluscircle" type="antdesign" color="#0553B9" style={{marginTop:'10%'}} size={40}></Icon>
                    <Text style={styles.createlabel}>Create an NFT</Text>
                </View></TouchableOpacity>
            </View>
            <View style={styles.create}>
                <TouchableOpacity onPress={()=>navigation.navigate('Sell')}><View style={styles.horizontal}>
                    <Icon name="shopping-basket-add" type="fontisto" color="#0553B9" size={30}></Icon>
                    <Text style={styles.createlabel}>Sell existing NFT</Text>
                </View></TouchableOpacity>
            </View>
            </View>
            <TouchableOpacity><View style={styles.horizontal}>
            <Text style={styles.title}>Wallet</Text>
            <Icon name="chevron-with-circle-right" type="entypo" color="#0553B9" size={20} style={{marginTop:'20%', marginLeft:'5%'}}></Icon>
            </View></TouchableOpacity>
            <View style={styles.horizontal}>
                <ScrollView horizontal={true} style={{overflow:'visible'}}>
                {portfolio}
                </ScrollView>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Trade')}><View style={styles.horizontal}>
            <Text style={styles.title}>Trade History</Text>
            <Icon name="chevron-with-circle-right" type="entypo" color="#0553B9" size={20} style={{marginTop:'20%', marginLeft:'5%'}}></Icon>
            </View></TouchableOpacity>
            <View style={{height:'33.5%'}}>
                <ScrollView style={{overflow:'hidden', paddingBottom:'5%'}}>
                {tradeHistory}
                </ScrollView>
            </View>
               
        </View>
        <View style={styles.footer}>
                    <View style={{justifyContent:'space-between', flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Home')}><View>
                    <Icon name="home" type="entypo" color="#0553B9"></Icon>
                    <Text style={styles.label}>Home</Text>
                    </View></TouchableOpacity>
                    <TouchableOpacity  onPress={()=>navigation.navigate('Wallet')}><View>
                    <Icon name="wallet" type="entypo" color="#A6A9B4"></Icon>
                    <Text style={styles.labelInactive}>Wallet</Text>
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
    tlogo: {
        fontFamily:'Roboto',
        color:"#0553B9",
        fontWeight:'bold',
        fontSize:25,
        textAlign:'left',
        marginLeft:'5%',
        letterSpacing:-7
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
        borderRadius:20
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
        width:'70%'
    },

});