import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Linking, Platform} from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Hyperlink from "react-native-hyperlink";

// You can import from local files
const people=require('../assets/disease-prevention.png')
const wash=require('../assets/antibacterial-gel.png')
const mask=require('../assets/icons8-protection-mask-48.png')
const hosi=require('../assets/hospital.jpeg')
const sa = require('../assets/saFlag.jpeg')
export default function home({ navigation }) {

  function makeCall(){
    let phone = ''
    if (Platform.OS=== 'android'){
      phone = 'tel:${0810496360}'
    } else{
      phone= 'telprompt:${0810496360}'
    }
      
    Linking.URL(phone)
      
  }
  function makeSMS(){
    let phone = ''
   
    phone = 'sms:${0810496360}'
    
    Linking.URL(phone)
      
  }



  function link(){
    <Hyperlink linkDefault={true}>
      <Text style={{ fontSize: 15,textDecoration:'underline' }}>Download link: {'https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/testing.html'}</Text>
    </Hyperlink>
  }
{/*<Hyperlink linkDefault={true}>
              <Text style={{ fontSize: 15,textDecoration:'underline' }}>Download link: {arr.link}</Text>
            </Hyperlink>
11:56
import Hyperlink from "react-native-hyperlink"; */}





  return (
    <View style={styles.container}>
      <View style={styles.up}>
        <Ionicons
          name="notifications"
          size={24}
          color="white"
          style={styles.not}
        />
        <View style={{ flexDirection: 'row', marginBottom: 30 }}>
          <Text
            style={{
              color: 'white',
              fontSize: 22,
              fontWeight: 500,
              width: '70%',
            }}>
            Covid-19
          </Text>
          <View style={styles.side}>
            
            <Image source = {sa} style={{width:25, height:25, borderRadius: 20}} />
            <Text style={{ paddingLeft: 5, paddingTop: 2, fontWeight: 900, marginRight:14 }}>
              SA
            </Text>
            <AntDesign name="caretdown" size={12} color="black" style={{paddingTop:5}}/>
          </View>
        </View>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 500,
            paddingVertical: 0,
          }}>
          Are you feeling sick?
        </Text>
        <Text style={{ color: 'white', fontSize: 12, paddingVertical: 15 }}>
          If you feel sick with any of covid-19 symptoms, please call or SMS us
          immediately for help
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.red} onPress={()=>{ makeCall()}}>
            <Ionicons name="call" size={20} color="white" />
            <Text
              style={{
                color: 'white',
                fontSize: 12,
                paddingLeft: 12,
                paddingTop: 2,
              }}>
              Call Now
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.blue} onPress={()=>makeSMS()}>
            <Feather name="message-circle" size={20} color="white" />
            <Text
              style={{
                color: 'white',
                fontSize: 12,
                paddingLeft: 12,
                paddingTop: 2,
              }}>
              Send SMS
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={{ fontWeight: 700, paddingLeft: 20 }}>Prevention</Text>
      <View horizontal='true' style={{ flexDirection: 'row', marginTop: 1, padding: 20, paddingTop:20, height: 200 }}>
        <View style={{ width: '30%', height: 100, marginRight:15 }}>
          <View
            style={{
              width: '100%',
              height: '100%',
              background: 'pink',
              opacity: 0.7,
              borderRadius: 50,
            }}>
            <Image source={people} style={{ width: '100%', height: '90%' }} />
          </View>

          <Text style={{ fontSize: 10, fontWeight: 900, paddingLeft: 15 }}>
            Avoid close contact
          </Text>
        </View>
        <View style={{ width: '30%', height: 100 }}>
          <View
            style={{
              width: '100%',
              height: '100%',
              background: 'pink',
              opacity: 0.7,
              borderRadius: 50,
            }}>
            <Image source={wash} style={{ width: '100%', height: '90%' }} />
          </View>

          <Text style={{ fontSize: 10, fontWeight: 900, paddingLeft: 15 }}>
            Clean your hands often
          </Text>
        </View>
        <View style={{ width: '30%', height: 100, marginLeft:15 }}>
          <View
            style={{
              width: '100%',
              height: '100%',
              background: 'pink',
              opacity: 0.7,
              borderRadius: 50,
            }}>
            <Image source={mask} style={{ width: '100%', height: '100%' }} />
          </View>

          <Text style={{ fontSize: 10, fontWeight: 900, paddingLeft: 15 }}>
            Wear a facemask
          </Text>
        </View>
      </View>
      <TouchableOpacity style= {styles.bot} onPress={()=>link()} >
        <View style={{width: '35%', height:'100%'}}>
          <Image style={{width:'100%', height:'100%', borderRadius:20}} source={hosi} />
        </View>
        <View style={{ padding: 15}}>
          <Text style={{color: 'white', fontWeight:500, marginBottom: 7}}>Do your own test!</Text>
          <Text style={{color: 'white', fontSize: 12}}>Follow the instructions to</Text>
           <Text style={{color: 'white', fontSize:12}}>do your own test</Text>
        </View>
        
      </  TouchableOpacity>
      <View style={{flexDirection: 'row', paddingTop:'15%'}}>
        <View style={{marginRight:'20%', marginLeft:'14%', backgroundColor: 'blue', padding:5, borderRadius:25}} >
          <Ionicons name="home-outline" size={22} color="white" />
        </View>
        <TouchableOpacity onPress={()=>{navigation.navigate('Statistics')}} style={{marginRight: '20%'}}>
          <MaterialCommunityIcons name="numeric-0-box" size={32} color="black"  />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('Symptoms')}}>
          <Ionicons name="ios-information-circle" size={32} color="black"  />
        </TouchableOpacity>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    paddingVertical: '20%',
  },
  bot:{
    width: '90%',
    height: '12%',
    backgroundColor: '#8579C0',
    marginHorizontal: '5%',
    borderRadius: 20,
    flexDirection: 'row',
   
    
  },
  side: {
    width: '35%',
    height: 35,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    flexDirection: 'row',
  },
  red: {
    width: '47%',
    height: 35,
    backgroundColor: 'red',
    borderRadius: 19,
    marginRight: 10,
    padding: 7,
    paddingLeft: 20,
    flexDirection: 'row',
  },
  blue: {
    width: '47%',
    height: 35,
    backgroundColor: 'blue',
    borderRadius: 19,
    padding: 7,
    paddingLeft: 20,
    flexDirection: 'row',
  },
  not: {
    marginLeft: '93%',
    paddingBottom: 20,
  },
  up: {
    height: 300,
    width: '100%',
    backgroundColor: 'darkblue',
    borderRadius: 30,
    padding: 20,
    marginBottom: 20,
    
  },
});
