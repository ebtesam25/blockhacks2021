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



export default function Create() {
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
    const [newNft, setNewNFT] = useState({"userid":"1","title":'',"description":'',"imgurl":'',"type":''})
    const [image, setImage] = useState(null);
    const [image64, setImage64] = useState(null);
    const [imgurl, setImgurl] = useState(null);

    useEffect(() => {
        (async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
        })();
    }, [imgurl]);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          base64:true,
          aspect: [4, 3],
          quality: 1,
        });
    
    
        if (!result.cancelled) {
            setImage(result.uri);
            setImage64(`data:image/jpg;base64,${result.base64}`);
        }
      };

      const _publish = () =>{   
        let cloudinary = 'https://api.cloudinary.com/v1_1/diywehkap/image/upload';
         let data = {
           "file": image64,
           "upload_preset": "hm4fkyir",
         }
         console.log(data)
         fetch(cloudinary, {
           body: JSON.stringify(data),
           headers: {
             'content-type': 'application/json'
           },
           method: 'POST',
         }).then(async r => {
           let data = await r.json()
           let curl=data.secure_url;
           await setImgurl(curl.toString());
           await console.log(imgurl, curl);
       });

       {/*.then(fetch('#', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
           'cache-control': 'no-cache'
         },
         body: JSON.stringify({imgurl:imgurl})
       }).then(async r => {
         let response = await r;
         
         console.log(response.status);  
         console.log(response.body)
     }).catch(err=>console.log(err))
 ).catch(err=>console.log(err));*/}

console.log('Published');
}

    
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
            <Text style={styles.title}>Create an NFT</Text>
            </View></TouchableOpacity>
         
            <View style={{marginTop:'5%'}}></View>
            <Text style={styles.subtitle}>Upload a photo</Text>
            <View style={styles.horizontal}>
            <View style={styles.total}><TouchableOpacity onPress={()=>pickImage()}><Text style={{fontSize:15, color:"#0553B9", fontWeight:'bold', textAlign:'center', textAlignVertical:'center'}}>{image64 ? 'File Selected':'Select a file'}</Text></TouchableOpacity></View>
            {!imgurl &&<TouchableOpacity onPress={()=>{_publish()}}><View style={styles.btn}><Text style={{fontSize:18, color:"#FFF", fontWeight:'bold', textAlign:'center', textAlignVertical:'center', marginTop:'2.5%'}}>Upload</Text></View></TouchableOpacity>}
            {imgurl&&<Icon name="check-circle" type="fa" color="#0553B9" style={{marginTop:'10%', marginLeft:'5%'}} size={30}></Icon>}
            </View>
            <View style={{flexDirection:'row', marginTop:'5%'}}>
            <View style={{marginLeft:'0%'}}>
                <Text style={styles.subtitle}>NFT Title</Text>
                <View style={styles.total}>
                    <TextInput placeholder="Enter a title" style={{fontWeight:'bold', color:"#0553B9"}} value={newNft.title} onChangeText={(e)=>{setNewNFT(nft => ({...nft,title: e}))}}></TextInput>
                </View>
                <Text style={styles.subtitle}>NFT Description</Text>
                <View style={styles.desc}>
                    <TextInput placeholder="Describe your NFT in 1-3 lines." multiline numberOfLines={5} style={{fontWeight:'bold', color:"#0553B9", textAlignVertical:'top'}} value={newNft.description} onChangeText={(e)=>{setNewNFT(nft => ({...nft,description: e}))}}></TextInput>
                </View>
                <View style={{marginTop:'10%'}}></View>
                <View style={styles.horizontal}>
                <TouchableOpacity onPress={()=>{setNewNFT(nft => ({...nft,type: 'sale'}))}}><View style={styles.btn}><Text style={{fontSize:18, color:"#FFF", fontWeight:'bold', textAlign:'center', textAlignVertical:'center', marginTop:'2.5%'}}>Sell</Text></View></TouchableOpacity>
                <TouchableOpacity onPress={()=>{setNewNFT(nft => ({...nft,type: 'auction'}))}}><View style={styles.btn}><Text style={{fontSize:18, color:"#FFF", fontWeight:'bold', textAlign:'center', textAlignVertical:'center', marginTop:'2.5%'}}>Auction</Text></View></TouchableOpacity>
                </View>
                {newNft.type!='' &&<Text style={styles.tradeSUb}>Your NFT {newNft.title} will be placed for {newNft.type}. Tap Publish to proceed.</Text>}
                <View style={{marginTop:'10%'}}></View>
                <TouchableOpacity onPress={()=>{setNewNFT(nft => ({...nft,type: 'sale'}))}}><View style={styles.btnxl}><Text style={{fontSize:18, color:"#FFF", fontWeight:'bold', textAlign:'center', textAlignVertical:'center', marginTop:'3.5%'}}>Publish my NFT</Text></View></TouchableOpacity>
            </View>
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
        color:"#0553B9",
        fontWeight:'bold',
        fontSize:18,
        textAlign:'left',
        marginTop:'2.5%',
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
        width:200,
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
        marginLeft:'5%'
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