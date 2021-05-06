import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default function Home() {
    const navigation = useNavigation();
    const [profileInfo, setProfile] = useState({"profileInfo":{"imgurl":"https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png","totalBalance":20},
    "portfolio":[{"currency":"bitcoin","symbol":"BTC","amount":1000},{"currency":"ethereum","symbol":"ETH","amount":2000},{"currency":"xrp","symbol":"XRP","amount":7000},],
    "tradeHistory":{"bids":[{"amount":1340,"user":"elonmusk#01","nft":"34532"},{"amount":1340,"user":"elonmusk#01","nft":"34532"}],"sales":[{"amount":11000,"user":"elonmusk#01","nft":"34532"},{"amount":1000,"user":"johndoe#01","nft":"34532"}],"purchases":[{"amount":1100,"nft":"34532"},{"amount":1400,"nft":"342432"}]}});


    const portfolio = profileInfo.portfolio.map((data) => {
        return (
            <View style={styles.coins}>
            <Image source={{uri:`https://cryptologos.cc/logos/${data.currency}-${data.symbol.toLowerCase()}-logo.png?v=010`}} style={styles.coinLogo}></Image>
            <Text style={styles.coinLabel}>{data.symbol}</Text>
            <Text style={styles.coinAmount}>{data.amount}</Text>

            </View>
        )});
    const tradeHistory = profileInfo.portfolio.map((data) => {
        return (
            <View style={styles.coins}>
            <Image source={{uri:`https://cryptologos.cc/logos/${data.currency}-${data.symbol.toLowerCase()}-logo.png?v=010`}} style={styles.coinLogo}></Image>
            <Text style={styles.coinLabel}>{data.symbol}</Text>
            <Text style={styles.coinAmount}>{data.amount}</Text>

            </View>
        )});
        

    
    return (
        <View style={styles.contain}>
            <View style={styles.container}>
            
            <View style={styles.horizontal}>
                <View>
                <Text style={styles.title}>Balance</Text>
                <Text style={styles.subtitle}>${profileInfo.profileInfo.totalBalance.toString()}</Text>
                </View>
                <Image style={styles.avatar} source={{uri:profileInfo.profileInfo.imgurl}}></Image>
            </View>
            <View style={styles.horizontal}>
            <View style={styles.create}>
                <TouchableOpacity><View style={styles.horizontal}>
                <Icon name="pluscircle" type="antdesign" color="#0553B9" style={{marginTop:'10%'}} size={40}></Icon>
                    <Text style={styles.createlabel}>Create an NFT</Text>
                </View></TouchableOpacity>
            </View>
            <View style={styles.create}>
                <TouchableOpacity><View style={styles.horizontal}>
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
            <TouchableOpacity><View style={styles.horizontal}>
            <Text style={styles.title}>Trade History</Text>
            <Icon name="chevron-with-circle-right" type="entypo" color="#0553B9" size={20} style={{marginTop:'20%', marginLeft:'5%'}}></Icon>
            </View></TouchableOpacity>
            <View style={styles.horizontal}>
                <ScrollView horizontal={true} style={{overflow:'visible'}}>
                {portfolio}
                </ScrollView>
            </View>
               
        </View>
        <View style={styles.footer}>
                    <View style={{justifyContent:'space-between', flexDirection:'row'}}>
                    <View>
                    <Icon name="home" type="entypo" color="#0553B9"></Icon>
                    <Text style={styles.label}>Home</Text>
                    </View>
                    <View>
                    <Icon name="wallet" type="entypo" color="#A6A9B4"></Icon>
                    <Text style={styles.labelInactive}>Wallet</Text>
                    </View>
                    <View>
                    <Icon name="search" type="feather" color="#A6A9B4"></Icon>
                    <Text style={styles.labelInactive}>Discover</Text>
                    </View>
                    <View>
                    <Icon name="notifications" type="ionicons" color="#A6A9B4"></Icon>
                    <Text style={styles.labelInactive}>Notifications</Text>
                    </View>
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
        fontSize:15,
        textAlign:'center',
        flexWrap:'wrap',
    },
    labelInactive: {
        fontFamily:'Roboto',
        color:"#A6A9B4",
        fontWeight:'bold',
        fontSize:15,
        textAlign:'center',
        flexWrap:'wrap',
    },
    coins: {
        backgroundColor:"#FFF",
        borderRadius:15,
        paddingHorizontal:'5%',
        paddingVertical:'5%',
        alignContent:'center',
        width:150,
        height:175,
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

});