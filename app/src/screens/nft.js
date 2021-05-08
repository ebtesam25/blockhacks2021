import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements';




export default function Nft({route}) {
    const navigation = useNavigation();
    const { data } = route.params;

    const [profileInfo, setProfile] = useState({"profileInfo":{"imgurl":"https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=644&q=80","totalBalance":20},
    "portfolio":[{"currency":"bitcoin","symbol":"BTC","amount":1000},{"currency":"ethereum","symbol":"ETH","amount":2000},{"currency":"xrp","symbol":"XRP","amount":7000},],
    "tradeHistory":{"bids":[{"amount":1340,"user":"elonmusk#01","nft":"34532"},{"amount":1140,"user":"johndoe#01","nft":"34532"}],"sales":[{"amount":11000,"user":"elonmusk#01","nft":"34532"},{"amount":1000,"user":"johndoe#01","nft":"34532"}],"purchases":[{"amount":1100,"nft":"34532"},{"amount":1400,"nft":"342432"}]},
    "txHistory":[{"timestamp":"05/07/2021","amount":-230},{"timestamp":"05/07/2021","amount":-230,"acc":"ABC123"},{"timestamp":"05/07/2021","amount":1000,"acc":"XYZ123"},{"timestamp":"05/07/2021","amount":140,"acc":"0xA123"},{"timestamp":"05/07/2021","amount":-20,"acc":"A123001"}]});

    


    
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
        
           <View style={styles.trades}>
            <Image source={{uri:data.img}} style={styles.nftimg}></Image>
            <View>
            <Text style={styles.tradeTitle}>{data.title}</Text>
            <Text style={styles.labeldrop}>Starting From</Text>
            <Text style={styles.labelgold}>${data.amount}</Text>
            <Text style={styles.labeldrop}>{data.editions} editions minted</Text>
            <Text style={styles.labeldrop}>{data.editions} for sale</Text>
            <View style={styles.horizontal}>
            <Image source={{uri:'https://image.flaticon.com/icons/png/512/194/194938.png'}} style={{width:20, height:20, marginLeft:'5%'}}></Image>
                <Text style={styles.labellarge}>{data.creator}</Text>
                
            </View>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Purchase',{data:data})}><View style={styles.btn}>
                <Text style={{color:"#FFF", fontWeight:'bold', textAlign:'center'}}>Buy for ${data.amount}</Text>
            </View></TouchableOpacity>
            </View>
            
               
        </View>
        <View style={styles.footer}>
                    <View style={{justifyContent:'space-between', flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Home')}><View>
                    <Icon name="home" type="entypo" color="#A6A9B4"></Icon>
                    <Text style={styles.labelInactive}>Home</Text>
                    </View></TouchableOpacity>
                    <TouchableOpacity  onPress={()=>navigation.navigate('Wallet')}><View>
                    <Icon name="wallet" type="entypo" color="#A6A9B4"></Icon>
                    <Text style={styles.labelInactive}>Wallet</Text>
                    </View></TouchableOpacity>
                    <TouchableOpacity  onPress={()=>navigation.navigate('Discover')}><View>
                    <Icon name="search" type="feather" color="#0553B9"></Icon>
                    <Text style={styles.label}>Discover</Text>
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