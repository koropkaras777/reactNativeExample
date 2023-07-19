import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Styles from '../styles/header-style.js';
import PaperPlaneIcon from '../assets/paper-plane.svg';

const Header = () => {
  return(
    <View style={Styles.navBar}>
      <View>
        <Text style={Styles.navTitle}>Paintgram</Text>
      </View>
      <View>
        <PaperPlaneIcon width={32} height={32} fill='white' onPress={() => Actions.messenger()}/>
      </View>
    </View>
  );
}

export default Header;