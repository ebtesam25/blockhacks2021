import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';





export default function Login() {
    const navigation = useNavigation();
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
      
    
   
    return (
        <View style={styles.container}>
            <View style={{ marginTop: '15%',}}>
              <View style={{flexDirection:'row', display:'flex', marginHorizontal:'10%'}}>
                  <Icon name="chevron-left" type="entypo" color="#0553B9" size={35}></Icon>
              </View>
              <View style={{position:'relative', marginLeft:'10%', marginTop:'20%'}}>
                <Text style={{ fontSize:30, color:'#0553B9', fontWeight:'bold'}}>Sign In</Text>
                <TextInput value={email} onChangeText={setEmail} style={{backgroundColor:'#FFF',fontWeight:'bold', borderRadius:10, width:'80%', height:50, marginTop:'10%', paddingLeft:'5%'}} placeholder="Email address" placeholderTextColor="#0553B9"></TextInput>
                <TextInput value={password} onChangeText={setPassword} secureTextEntry style={{backgroundColor:"#FFF", fontWeight:'bold',borderRadius:10, width:'80%', height:50, marginTop:'5%', paddingLeft:'5%'}} placeholder="Password" placeholderTextColor="#0553B9"></TextInput>
                <Text style={{color:'#0553B9',  marginTop:'2.5%', fontSize:16}}>forgot your password?</Text>
              </View>
              <View style={{backgroundColor:'#0553B9', marginTop:'15%', width:'60%', alignSelf:'center', paddingVertical:'5%', borderRadius:20}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}><Text style={{textAlign:'center', color:'#FFF',  fontSize:18, fontWeight:'bold'}}>Sign In</Text></TouchableOpacity>
              </View>
              <View style={{marginTop:'2.5%', width:'60%', alignSelf:'center', borderRadius:10}}>
              <TouchableOpacity onPress={()=>navigation.navigate('Register')}><Text style={{textAlign:'center', color:'#0553B9',  fontSize:18, textDecorationLine:'underline', textDecorationColor:'#FBDE44', textDecorationStyle:'double', marginTop:'55%'}}>Create a new account</Text></TouchableOpacity>
              </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        backgroundColor: '#EDF2F6'
    },
    header: {
        height:'34%',
        width:'34%',
        resizeMode:'contain',
        marginLeft:'10%'
    },

});