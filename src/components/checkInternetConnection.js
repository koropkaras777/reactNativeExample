import React from 'react';
import NetworkChecker from 'react-native-network-checker';

import styles from '../styles/checkInternetConnection-style.js';

const NetworkCheck = () => {
  return (  
    <NetworkChecker
      duration={2000}
      notConnectedMessage='Not connected to Internet!'
      notConnectedTextColor='white'
      notConnectedBackgroundColor='rgba(0, 0, 0, 0.30)'
      connectedMessage='Connected to Internet!'
      connectedTextColor='green'
      connectedBackgroundColor='rgba(51, 193, 87, 0.30)'
      style={styles.checkInternetConnection}
    >   
    </NetworkChecker>
  );
}

export default NetworkCheck;