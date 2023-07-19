import React from 'react';
import { View, ScrollView, Text } from 'react-native';

import styles from '../styles/search-style.js';
import SearchButton from '../components/searchButton';
import Footer from '../components/footer.js';
import NetworkChecker from '../components/checkInternetConnection.js';

const Search = () => {
  return (
    <View style={styles.view}>
      <SearchButton />
      <ScrollView style={styles.scrlView}>
        
      </ScrollView>
      
      <Footer />
      <NetworkChecker />
    </View>
  );
}

export default Search;