import React from 'react';
import { View, Image } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../styles/check-style.js';
import NetworkChecker from '../components/checkInternetConnection.js';


const Check = () => {
  const isConnected = async () => {
    try {
      let response = await axios.get('http://192.168.1.101:3000/');
      if(response.data == true) {
        await getJWT();
      } 
    } catch (error) {
      alert(error);
    }
  };
  
  const getJWT = async () => {
    const token = await AsyncStorage.getItem('token');
    if(token != null) {
      await SendToken(token);
    } else {
      Actions.login();
    }
  }

  const SendToken = async (token) => {
    try {
      let data = JSON.stringify({
      token: token,
      });
      let response = await axios.post('http://192.168.1.101:3000/user/verify', data, {
        'headers': {
          'content-type': 'application/json',
        },
      });
      if(response.data.verify == true) {
        Actions.home();
      } else {
        Actions.login();
      }
    } catch (error) {
      alert(error);
    }
  }

  isConnected();

  return (
    <View>
      <View style={styles.view}>
      <Image 
        source={require('../assets/gifs/Loading.gif')}  
        style={{width: 64, height: 64 }}
      />
      </View>
      <NetworkChecker />
    </View>
  );
}

export default Check;