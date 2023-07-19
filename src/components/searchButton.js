import React from 'react';
import { TextInput, View } from 'react-native';

import SearchIcon from '../assets/search.svg';
import styles from '../styles/searchButton-style.js';

class SearchButton extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View style={styles.searchSection}>
        <TextInput
          placeholder='Search'
          onChangeText={this.updateSearch}
          value={search}
          style={styles.searchBttn}
        />
        <SearchIcon width={24} height={24} fill='white' style={styles.searchIcon}/>
      </View>
      
    );
  }
}

export default SearchButton;