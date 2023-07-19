import React, { useState } from 'react';
import { View, TextInput, Text, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios'; 

import styles from '../styles/login-style.js';
import NetworkChecker from '../components/checkInternetConnection.js';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secondpassword, setSecondPassword] = useState('');

  const SendData = async () => {
    try {
      let data = JSON.stringify({
        username: username,
        email: email,
        password: password,
        secondpassword: secondpassword,
      });
      let response = await axios.post('http://192.168.1.101:3000/signup', data, {
        'headers': {
          'content-type': 'application/json',
        },
      });
      if(response.data.completed == true) {
        Actions.signupfinal({email: response.data.email});
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
          <TextInput
            placeholder='Email'
            textContentType='emailAddress'
            onChangeText={setEmail}
            value={email}
            style={styles.input}
          />
          <TextInput
            placeholder='Username'
            onChangeText={setUsername}
            value={username}
            style={styles.input}
          />
          <TextInput
            placeholder='Password'
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
            style={styles.input}
          />
          <TextInput
            placeholder='Confirm password'
            onChangeText={setSecondPassword}
            value={secondpassword}
            secureTextEntry={true}
            style={styles.input}
          />
          <TouchableHighlight onPress={() => SendData()}>
            <View style={styles.bttn}>
              <Text style={styles.bttnText}>Sign Up</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
      <NetworkChecker />
    </View>   
  );
}

export default Signup;