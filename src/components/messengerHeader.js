import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Styles from '../styles/header-style.js';
import BackIcon from '../assets/back.svg';

const Header = () => {
  return(
    <View style={Styles.navBar}>
      <View>
        <BackIcon width={32} height={32} fill='white' onPress={() => Actions.home()}/>
      </View>
      <View>
        <Text style={Styles.navTitle}>username</Text>
      </View>
    </View>
  );
}

export default Header;