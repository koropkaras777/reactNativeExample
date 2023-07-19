import React from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../styles/footer-style.js';
import HomeIcon from '../assets/home.svg';
import SearchIcon from '../assets/search.svg';
import AddIcon from '../assets/add.svg';
import HeartIcon from '../assets/heart.svg';
import UserIcon from '../assets/user.svg';

const Footer = () => {
  const goToProfile = async () => {
    let object = await AsyncStorage.getItem('user');
    let userinfo = JSON.parse(object);
    Actions.profile({user: userinfo});
  }
  return(
    <View style={styles.view}>
      <HomeIcon width={32} height={32} fill='white' onPress={() => Actions.home()}/>
      <SearchIcon width={32} height={32} fill='white' onPress={() => Actions.search()}/>
      <AddIcon width={32} height={32} fill='white' onPress={() => Actions.createPost()}/>
      <HeartIcon width={32} height={32} fill='white' onPress={() => Actions.like()}/>
      <UserIcon width={32} height={32} fill='white' onPress={() => goToProfile()}/>
    </View>
  );
}

export default Footer;