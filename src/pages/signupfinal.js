import React, { useState } from 'react';
import { View, TextInput, Text, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../styles/login-style.js';
import NetworkChecker from '../components/checkInternetConnection.js';

const Signup = (props) => {
  const [code, setCode] = useState('');
  async function verify() {
    try {
      let data = JSON.stringify({
        code: code,
        email: props.email,
      });
      let response = await axios.post('http://192.168.1.101:3000/signupverify', data, {
        'headers': {
          'content-type': 'application/json',
        },
      });
      if(response.data.completed == true) {
        AsyncStorage.setItem(
          'user',
          JSON.stringify(response.data.user),
        );
        alert(response.data.user.token);
        AsyncStorage.setItem(
          'token',
          JSON.stringify(response.data.token),
        );
        Actions.home({
          data: {
            user: response.data.user,
          }
        });
      } else {
        alert(response.data);
      }   
    } catch (error) {
      alert(error);
    }
  }
  return (
    <View>
      <View style={styles.view}>
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.login}>
          <Text style={styles.subtitle}>Enter the code sent to your mail</Text>
          <TextInput
            placeholder='Enter code'
            textContentType='none'
            onChangeText={setCode}
            value={code}
            style={styles.input}
          />
          <TouchableHighlight onPress={() => verify()}>
            <View style={styles.bttn}>
              <Text style={styles.bttnText}>Done</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
      <NetworkChecker />
    </View>   
  );
}

export default Signup;