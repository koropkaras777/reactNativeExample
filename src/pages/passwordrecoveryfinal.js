import React from 'react';
import { View, TextInput, Text, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from '../styles/login-style.js';
import NetworkChecker from '../components/checkInternetConnection.js';

const RecoveryCode = () => {
  return (
    <View>
      <View style={styles.view}>
        <Text style={styles.title}>Password Recovery</Text>
        <View style={styles.login}>
          <Text style={styles.subtitle}>Enter new password</Text>
          <TextInput
            placeholder='Password'
            textContentType='password'
            style={styles.input}
          />
          <TextInput
            placeholder='Repeat password'
            textContentType='password'
            style={styles.input}
          />
          <TouchableHighlight onPress={() => Actions.login()}>
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

export default RecoveryCode;