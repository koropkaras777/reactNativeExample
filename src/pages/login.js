import React, { useState } from 'react';
import { View, TextInput, Image, Text, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios'; 

import styles from '../styles/login-style.js';
import NetworkChecker from '../components/checkInternetConnection.js';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <View style={styles.view}>
        <Image 
          style={styles.logo} 
          source={require('../assets/images/logo.png')}
        />
        <Text style={styles.title}>Paintgram</Text>
        <View style={styles.login}>
          <TextInput
            placeholder='Username'
            onChangeText={setUsername}
            value={username}
            style={styles.input}
          />
          <TextInput
            placeholder='Password'
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
            style={styles.input}
          />
          <TouchableHighlight onPress={async () => {alert('nice')}}>
            <View style={styles.bttn}>
              <Text style={styles.bttnText}>Login</Text>
            </View>
          </TouchableHighlight>
          <Text 
            style={styles.newUser}
            onPress={() => Actions.passwordrecovery()}
          >
            I forgot my password
          </Text>
          <Text 
            style={styles.newUser}
            onPress={() => Actions.signup()}
          >
            I'm new user
          </Text>
        </View>
      </View>
      <NetworkChecker />
    </View>
  );
}

export default Login;