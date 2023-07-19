import React from 'react';
import { View, SafeAreaView } from 'react-native';
import axios from 'axios';

import styles from '../styles/home-style.js';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Posts from '../components/post.js';
import NetworkChecker from '../components/checkInternetConnection.js';

const Home = () => {
  return (
    <View>
      <View style={styles.view}>
        <Header />
        <SafeAreaView style={styles.scrlView} nestedScrollEnabled={true}>
          <Posts />
        </SafeAreaView>
        <Footer />
      </View>
      <NetworkChecker />
    </View>
  );
}

export default Home;