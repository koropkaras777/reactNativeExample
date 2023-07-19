import React from 'react';
import { View, ScrollView, Text } from 'react-native';

import styles from '../styles/messenger-style.js';
import MessengerHeader from '../components/messengerHeader.js';
import NetworkChecker from '../components/checkInternetConnection.js';

const Messenger = () => {
  return (
    <View style={styles.view}>
      <MessengerHeader />
      <ScrollView style={styles.scrlView}>
        
      </ScrollView>
      <NetworkChecker />
    </View>
  );
}

export default Messenger;