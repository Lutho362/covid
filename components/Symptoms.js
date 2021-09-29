import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const top = require('../assets/top.jpeg')
const cold = require('../assets/CovidCold.gif')
const cough = require('../assets/cough.jpeg')
const fever = require('../assets/fever.jpeg')
const breath = require('../assets/breath.jpeg')

export default function Statistics({ navigation }) {
  const [backCold, setBackCold] = useState('orange')
  const [backCough, setBackCough] = useState('')
  const [backFever, setBackFever] = useState('')
  const [backBreath, setBackBreath] = useState('')


  function setCold(){
    setBackCold('orange')
    setBackCough('')
    setBackFever('')
    setBackBreath('')

  }
  function setCough(){
    setBackCold('')
    setBackCough('orange')
    setBackFever('')
    setBackBreath('')
  }
  function setFever(){
    setBackCold('')
    setBackCough('')
    setBackFever('orange')
    setBackBreath('')
  }
  function setBreath(){
    setBackCold('')
    setBackCough('')
    setBackFever('')
    setBackBreath('orange')
  }



  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <FontAwesome name="search" size={28} color="black" style={styles.not} />
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <View style={{ width: '68%', marginRight:10 }}>
            <Text style={{ fontSize: 13, fontWeight: 500 }}>Covid-19</Text>
            <Text style={{ fontSize: 20, fontWeight: 700 }}>Symptoms</Text>
            <View
              style={{
                flexDirection: 'row',
                height: 3,
                width: '100%',
                backgroundColor: 'orange',
                marginVertical: 10,
                borderRadius: 10,
              }}>
              <View
                style={{
                  height: 3,
                  width: '28%',
                  backgroundColor: 'black',
                  borderRadius: 40,
                }}></View>
            </View>
            <Text style={{ fontSize: 9.1, fontWeight: 500 }}>
              These symptoms may appear 2-14 days after exposure{' '}
            </Text>
          </View>
          <View style={{backgroundColor:'orange', width:'27%', height:'100%', borderRadius: 20}}><Image source={top} style={{width:' 100%', height: "100%", borderRadius:20}}/></View>
        </View>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            style={{
              width: '48%',
              height: 290,
              borderRadius: 10,
              paddingLeft: 17,
              paddingTop: 15,
              background : backCold
            }}
            onPress={()=>setCold()}>
            <Text
              style={{
                
                height: 30,
                fontWeight:700,
                fontSize: 17

              }}>
              Cold
            </Text>
            <Text
              style={{
                
                fontSize: 13,
                marginBottom:10
              }}>
              The severity  of COVID-19 symptoms can range from very mild to severe
            </Text>
            <View style={{width: '88%', height: '53%',}}>
              <Image style={{width: '100%', height: '100%',borderRadius:20}} source={cold}   />
            </View>
            
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '48%',
              height: 290,
              marginBottom:20,
              borderRadius: 10,
              paddingLeft: 17,
              paddingTop: 50,
              background: backCough

            }}
            onPress={()=>setCough()}>
            <Text
              style={{
                
                height: 30,
                fontWeight:700,
                fontSize: 17

              }}>
              Dry Cough
            </Text>
            <Text
              style={{
                fontSize: 13,
                marginBottom:5
              }}>
              It appears to spread from person to person among those in close contact
            </Text>
            <View style={{width: '88%', height: '53%',}}>
              <Image style={{width: '100%', height: '100%',borderRadius:20}} source={cough}   />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            style={{
              width: '48%',
              height: 295,
              marginBottom:20,
              borderRadius: 10,
              paddingLeft: 17,
              paddingTop: 20,
              background: backFever,

            }}
            onPress = {()=> setFever()}>
            <Text
              style={{
                
                height: 30,
                fontWeight:700,
                fontSize: 17

              }}>
              Fever
            </Text>
            <Text
              style={{
                fontSize: 13,
                marginBottom:5
              }}>
              people who are older or have existing chronic medical condition such as herat or lung desease
            </Text>
            <View style={{width: '88%', height: '53%',}}>
              <Image style={{width: '100%', height: '100%',borderRadius:20}} source={fever}   />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '48%',
              height: 295,
              marginBottom:20,
              borderRadius: 10,
              paddingLeft: 17,
              paddingTop: 50,
              background: backBreath,

            }}
            onPress={()=>setBreath()}>
            <Text
              style={{
                
                height: 30,
                fontWeight:700,
                fontSize: 17

              }}>
              Breathlessness
            </Text>
            <Text
              style={{
                fontSize: 13,
                marginBottom:5
              }}>
              Excited or tense, often to the point of holding the breath
            </Text>
            <View style={{width: '88%', height: '53%',paddingTop:1}}>
              <Image style={{width: '100%', height: '100%',borderRadius:20,marginTop:15}} source={breath}   />
            </View>
          </TouchableOpacity>
          
        </View>
        <View style={{flexDirection: 'row', marginTop:35}}>
        <TouchableOpacity style={{marginRight:'23%', marginLeft:'8%'}} onPress={()=>{navigation.navigate('home')}} >
          <Ionicons name="home-outline" size={32} color="black"  />
        </TouchableOpacity>
        
        
         <TouchableOpacity  onPress={()=>{ navigation.navigate('Statistics')}} style={{marginRight: '20%'}} >
          <MaterialCommunityIcons name="numeric-0-box" size={32} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: '20%', backgroundColor: 'blue', padding:5, borderRadius:50  }}>
          <Ionicons name="ios-information-circle" size={22} color="white"  />
        </TouchableOpacity>
        
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    backgroundColor: 'lightblue',
  },
  top: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    borderRadius: 30,
    
    padding: 15,
  },
  not: {
    marginLeft: '87%',
    paddingBottom: 2,
    paddingTop: 11,
    marginBottom: 25,
  },
});
