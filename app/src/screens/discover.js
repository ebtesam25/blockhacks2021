import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements';




export default function Discover() {
    const navigation = useNavigation();

    const [search, setSearch] = useState('');

    const [nft, setNft] = useState({"nfts":[{"id":"1","title":"All Night Long", "creator":"Lionel Richie", "amount":120,"quantity":120, "editions":10, "img":"https://m.media-amazon.com/images/M/MV5BODA2NjVmMGYtNDA3MS00MTVmLWIxMjMtMGRlODZkYzI1NTFhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDE4OTY5NzI@._V1_.jpg"},
    {"id":"2","title":"Perseverance", "creator":"NASA", "amount":120,"quantity":1, "editions":1,"img":"https://www.cnet.com/a/img/_038KaqQ_1jFvXY6dfG8ZSuKpzY=/1200x630/2021/04/06/66e8d0ae-17d0-4315-8af0-1613e35dac56/percyhead.jpg"},
    {"id":"3","title":"Landscape", "creator":"Bob Ross", "amount":200,"quantity":290, "editions":11,"img":"https://kcet.brightspotcdn.com/dims4/default/87ead61/2147483647/strip/false/crop/1920x1080+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fimage.pbs.org%2Fvideo-assets%2FB3GHIkJ-asset-mezzanine-16x9-vtxTfxi.jpg"}]})

    const [creators, setCreators] = useState({"top":[{"id":"1","name":"Aston Martin", "amount":120,"quantity":120000, "sold":1000, "img":"https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Aston_Martin_F1.svg/1200px-Aston_Martin_F1.svg.png"},
    {"id":"2","name":"Aston Martin", "amount":120,"quantity":120000, "sold":1000, "img":"https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Aston_Martin_F1.svg/1200px-Aston_Martin_F1.svg.png"},
    {"id":"3","name":"Aston Martin", "amount":120,"quantity":120000, "sold":1000, "img":"https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Aston_Martin_F1.svg/1200px-Aston_Martin_F1.svg.png"},]})

    const [profileInfo, setProfile] = useState({"profileInfo":{"imgurl":"https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png","totalBalance":20},
    "portfolio":[{"currency":"bitcoin","symbol":"BTC","amount":1000},{"currency":"ethereum","symbol":"ETH","amount":2000},{"currency":"xrp","symbol":"XRP","amount":7000},],
    "tradeHistory":{"bids":[{"amount":1340,"user":"elonmusk#01","nft":"34532"},{"amount":1140,"user":"johndoe#01","nft":"34532"}],"sales":[{"amount":11000,"user":"elonmusk#01","nft":"34532"},{"amount":1000,"user":"johndoe#01","nft":"34532"}],"purchases":[{"amount":1100,"nft":"34532"},{"amount":1400,"nft":"342432"}]},
    "txHistory":[{"timestamp":"05/07/2021","amount":-230},{"timestamp":"05/07/2021","amount":-230,"acc":"ABC123"},{"timestamp":"05/07/2021","amount":1000,"acc":"XYZ123"},{"timestamp":"05/07/2021","amount":140,"acc":"0xA123"},{"timestamp":"05/07/2021","amount":-20,"acc":"A123001"}]});

    



    const nfts = nft.nfts.map((data) => {
        return (
            <View style={styles.trades}>
            <View style={styles.horizontal}>
            <Image source={{uri:data.img}} style={styles.coinLogo}></Image>
            <View>
            <TouchableOpacity onPress={()=>navigation.navigate('Nft',{data:data})}><Text style={styles.tradeTitle}>{data.title}</Text></TouchableOpacity>
            <Text style={styles.labeldrop}>Starting From</Text>
            <Text style={styles.labelgold}>${data.amount}</Text>
            <Text style={styles.labeldrop}>{data.editions} editions minted</Text>
            <Text style={styles.labeldrop}>{data.editions} for sale</Text>
            <View style={styles.horizontal}>
            <Image source={{uri:'https://image.flaticon.com/icons/png/512/194/194938.png'}} style={{width:20, height:20, marginLeft:'5%'}}></Image>
                <Text style={styles.labellarge}>{data.creator}</Text>
                
            </View>
            </View>
            </View>
            </View>
        )});

        const topCreators = creators.top.map((data) => {
            return (
                <View style={styles.creator}>
                <View style={styles.horizontal}>
                <Image source={{uri:data.img}} style={styles.coinLogo}></Image>
                <Text style={{backgroundColor:"#0553B9", height:30, color:"#FFF", fontWeight:'bold', width:30, textAlign:'center', borderRadius:30, textAlignVertical:'center',
                position:'absolute', zIndex:3, left:80, top:75}}>{data.id}</Text>
                <View style={{backgroundColor:"#0553B9", height:30, color:"#FFF", fontWeight:'bold', width:30, textAlign:'center', borderRadius:30, textAlignVertical:'center',
                position:'absolute', zIndex:3, right:10, top:75}}><Icon name="arrow-right-circle" type="feather" color="#FFF" size={25} style={{marginTop:'5%'}}></Icon></View>
                <View>
                <Text style={styles.creatorTitle}>{data.name}</Text>
                <Text style={styles.labelgold}>${data.amount}+</Text>
                <Text style={styles.labeldrop}>{data.sold} NFTs sold</Text>
   
                </View>
                </View>
                </View>
            )});
        

        const updateSearch = (search) => {
            this.setState({ search });
          };

    
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
            <Text style={styles.title}>Discover</Text>
            <Text style={styles.link}>Filter</Text>
            </View></TouchableOpacity>
            <SearchBar
                placeholder="Find NFTs using keywords..."
                onChangeText={updateSearch}
                value={search}
                platform="ios"
                containerStyle={{backgroundColor:"#EDF2F6"}}
                inputContainerStyle={{backgroundColor:"#FFF"}}
            />
      

            <View style={{height:'40%'}}>
                <ScrollView style={{overflow:'hidden', paddingBottom:'5%'}}>
                {nfts}
                </ScrollView>
            </View>
            <Text style={styles.title}>Top Creators</Text>
            <ScrollView horizontal style={{overflow:'visible', paddingBottom:20}}>
                {topCreators}
                </ScrollView>
            
               
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
        fontSize:12,
        textAlign:'left',
        marginLeft:'5%'
    },
    labellarge: {
        fontFamily:'Roboto',
        color:"#0553B9",
        fontWeight:'bold',
        fontSize:15,
        textAlign:'left',
        marginLeft:'5%'
    },
    labelgold: {
        fontFamily:'Roboto',
        color:"#F2B344",
        fontWeight:'bold',
        fontSize:12,
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
    coinLogo: {
        height:100,
        width:100,
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

});