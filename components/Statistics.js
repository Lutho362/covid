import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Statistics({ navigation }) {
  const [Affected, setAffected] = useState('');
  const [Deaths, setDeaths] = useState('');
  const [Recovered, setRecovered] = useState('');
  const [Active, setActive] = useState('');
  const [Serious, setSerious] = useState('');
  const [TodayDeaths, setTodayDeaths] = useState('');
  const [glob, setGlob] = useState('white');
  const [contr, setContr] = useState('');
  const [globC, setGlobC] = useState('');
  const [contrC, setContrC] = useState('white');
  const [stats, setStats] = useState('GLOBAL STATS');
  const [affWidth, setAffWidth] = useState('60%')
  const [deathWidth, setDeathWidth] = useState('35%')
  const [serWidth, setSerWidth] = useState('33%')
  const [todWidth, setTodWidth] = useState('55%')

  const global = 'https://coronavirus-19-api.herokuapp.com/countries/world';
  const myCountry =
    'https://coronavirus-19-api.herokuapp.com/countries/south%20africa';

  function fetchGlobal() {
    fetch(global)
      .then((res) => res.json())
      .then((response) => {
        let {
          cases,
          deaths,
          recovered,
          active,
          critical,
          todayDeaths,
        } = response;

        setAffected(cases);
        setDeaths(deaths);
        setRecovered(recovered);
        setActive(active);
        setSerious(critical);
        setTodayDeaths(todayDeaths);
        setAffWidth('60%');
        setDeathWidth('35%');
        setSerWidth('33%');
        setTodWidth('55%')
      })
      .catch((err) => {
        console.log(err.message);
      });
    setGlob('white');
    setContr('');
    setGlobC('');
    setContrC('white');
    setStats('GLOBAL STATS');
  }

  function fetchCountry() {
    fetch(myCountry)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        let {
          cases,
          deaths,
          recovered,
          active,
          critical,
          todayDeaths,
        } = response;

        setAffected(cases);
        setDeaths(deaths);
        setRecovered(recovered);
        setActive(active);
        setSerious(critical);
        setTodayDeaths(todayDeaths);
        setAffWidth('35%');
        setDeathWidth('60%');
        setSerWidth('55%');
        setTodWidth('33%')
      })
      .catch((err) => {
        console.log(err.message);
      });
    setGlob('');
    setContr('white');
    setGlobC('white');
    setContrC('');
    setStats('MY COUNTRY STATS');
  }

  useEffect(() => {
    fetchGlobal();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Ionicons
          name="notifications"
          size={24}
          color="white"
          style={styles.not}
        />
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 500,
            width: '70%',
            paddingLeft: '5%',
          }}>
          Statistics
        </Text>
        <View style={styles.stats}>
          <View
            style={{
              backgroundColor: contr,
              color: contrC,
              width: '50%',
              borderRadius: 20,
              fontWeight: 'bold',
              paddingHorizontal: '9%',
              fontSize: 14,
              paddingTop: 5,
            }}>
            <TouchableOpacity
              onPress={() => {
                fetchCountry();
              }}>
              My Country
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: glob,
              color: globC,
              width: '50%',
              borderRadius: 20,
              fontWeight: 'bold',
              paddingHorizontal: '9%',
              fontSize: 14,
              paddingTop: 5,
            }}>
            <TouchableOpacity
              onPress={() => {
                fetchGlobal();
              }}>
              Global
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: 'center', padding: '5%' }}>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: 700 }}>
            {stats}
          </Text>
        </View>

        <View style={{ flexDirection: 'row', paddingHorizontal: '7%' }}>
          <View
            style={{
              width: affWidth,
              height: 115,
              backgroundColor: 'orange',
              borderRadius: 10,
              marginRight: 10,
            }}>
            <Text
              style={{
                color: 'white',
                height: 61,
                paddingLeft: 10,
                paddingTop: 7,
                fontWeight: 800,
                fontSize: 18,
              }}>
              Affected{' '}
            </Text>
            <Text
              style={{
                color: 'white',
                paddingLeft: 10,
                fontWeight: 700,
                fontSize: 17,
              }}>
              {Affected}{' '}
            </Text>
          </View>
          <View
            style={{
              width: deathWidth,
              height: 115,
              backgroundColor: 'red',
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: 'white',
                height: 61,
                paddingLeft: 10,
                paddingTop: 7,
                fontWeight: 700,
                fontSize: 15,
              }}>
              Deaths{' '}
            </Text>
            <Text
              style={{
                color: 'white',
                paddingLeft: 10,
                fontWeight: 700,
                fontSize: 14,
              }}>
              {Deaths}{' '}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', margin: '7%' }}>
          <View
            style={{
              width: '47.5%',
              height: 115,
              backgroundColor: 'green',
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: 'white',
                height: 61,
                paddingLeft: 10,
                paddingTop: 7,
                fontWeight: 700,
                fontSize: 15,
              }}>
              Recovered{' '}
            </Text>
            <Text
              style={{
                color: 'white',
                paddingLeft: 10,
                fontWeight: 600,
                fontSize: 14,

              }}>
              {Recovered}{' '}
            </Text>
          </View>

          <View
            style={{
              width: '47.5%',
              height: 115,
              backgroundColor: 'skyblue',
              borderRadius: 10,
              marginLeft: 10,
            }}>
            <Text
              style={{
                color: 'white',
                height: 61,
                paddingLeft: 10,
                paddingTop: 7,
                fontWeight: 800,
                fontSize: 18,
              }}>
              Active{' '}
            </Text>
            <Text
              style={{
                color: 'white',
                paddingLeft: 10,
                fontWeight: 700,
                fontSize: 18,
              }}>
              {Active}{' '}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginHorizontal:'3%' }}>
          
          <View
            style={{
              width: serWidth,
              height: 115,
              backgroundColor:'purple' ,
              borderRadius: 10,
              marginLeft: 10,
            }}>
            <Text
              style={{
                color: 'white',
                height: 61,
                paddingLeft: 10,
                paddingTop: 7,
                fontWeight: 700,
                fontSize: 18,
              }}>
              Serious{' '}
            </Text>
            <Text
              style={{
                color: 'white',
                paddingLeft: 10,
                fontWeight: 500,
                fontSize: 14,
              }}>
              {Serious}{' '}
            </Text>
          </View>
          <View
            style={{
              width: todWidth,
              height: 115,
              backgroundColor: '#A508F3',
              borderRadius: 10,
              marginLeft: 10,
            }}>
            <Text
              style={{
                color: 'white',
                height: 61,
                paddingLeft: 10,
                paddingTop: 7,
                fontWeight: 800,
                fontSize: 18,
              }}>
              Today Deaths{' '}
            </Text>
            <Text
              style={{
                color: 'white',
                paddingLeft: 10,
                fontWeight: 700,
                fontSize: 17,
              }}>
              {TodayDeaths}{' '}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', paddingTop: '15%' }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('home');
          }}
          style={{ marginRight: '20%', marginLeft: '12%' }}>
          <Ionicons name="home-outline" size={32} color="black" />
        </TouchableOpacity>
        <View
          style={{
            marginRight: '20%',
            backgroundColor: 'blue',
            padding: 5,
            borderRadius: 25,
          }}>
          <MaterialCommunityIcons
            name="numeric-0-box"
            size={32}
            color="white"
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Symptoms');
          }}>
          <Ionicons name="ios-information-circle" size={32} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    backgroundColor: 'white',
  },
  
  top: {
    backgroundColor: 'darkblue',
    width: '100%',
    height: '80%',
    borderRadius: 30,
   
  },
  not: {
    marginLeft: '90%',
    paddingBottom: 20,
    paddingTop: 15,
  },
  stats: {
    flexDirection: 'row',
    width: '80%',
    height: '5%',
    backgroundColor: 'blue',
    margin: '5%',
    borderRadius: 20,
    marginBottom: '5%',
  },
});
