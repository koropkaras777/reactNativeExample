import React from 'react';
import { View, TextInput, Text, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from '../styles/login-style.js';
import NetworkChecker from '../components/checkInternetConnection.js';

const Recovery = () => {
  return (
    <View>
      <View style={styles.view}>
        <Text style={styles.title}>Password Recovery</Text>
        <View style={styles.login}>
          <Text style={styles.subtitle}>Please enter your email</Text>
          <TextInput
            placeholder='Email'
            textContentType='emailAddress'
            style={styles.input}
          />
          <TouchableHighlight onPress={() => Actions.passwordrecoverycode()}>
            <View style={styles.bttn}>
              <Text style={styles.bttnText}>Next step</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
      <NetworkChecker />
    </View>   
  ); 
}

export default Recovery;