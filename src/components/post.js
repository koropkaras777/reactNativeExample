import React, { useState } from 'react';
import { Text, View, FlatList, TouchableHighlight } from 'react-native';

import styles from '../styles/post-style.js';
import UserIcon from '../assets/user.svg';
import SavedIcon from '../assets/saved.svg';
import HeartIcon from '../assets/heart.svg';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Van',
    image: 'orange',
    views: '47080',
    likes: '1740',
    date: '14.05.2020',
    isLiked: false,
    isSaved: false,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
    title: 'Billy',
    image: 'green',
    views: '50001',
    likes: '2034',
    date: '12.05.2020',
    isLiked: true,
    isSaved: true,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
    title: 'Slaves',
    image: 'yellow',
    views: '100',
    likes: '15',
    date: '10.05.2020',
    isLiked: true,
    isSaved: false,
  },
];

const Item = ({ item }) => {
  let backCount = 0, backTimer = 0;
  let liked = false;
  return (
    <View style={styles.item}>
      <View style={styles.itemTitle}>
        <UserIcon width={24} height={24} fill='white'/>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <TouchableHighlight underlayColor='transparent' onPress={() => {
        backCount++;
        if (backCount == 2) {
          clearTimeout(backTimer);
          backCount = 0;
          liked = true;
        } else {
          backTimer = setTimeout(() => {
            backCount = 0;
          }, 200)
        }
      }}>
        <View style={{ backgroundColor: item.image, width: '100%', height: 350}}>
          <View style={styles.liked}>
            {liked ? <HeartIcon width={64} height={64} fill='red'/> : null}
          </View>
        </View>
      </TouchableHighlight>
      
      <View style={styles.itemMenu}>
        <HeartIcon width={24} height={24} fill={item.isLiked ? fill='red' : fill='white'}/>
        <SavedIcon width={24} height={24} fill={item.isSaved ? fill='red' : fill='white'}/>
      </View>
      <View style={styles.statistics}>
        <Text style={styles.statisticsText}>{item.likes} likes</Text>
        <Text style={styles.statisticsText}>{item.views} views</Text>
      </View>
      <View style={styles.date}>
        <Text style={styles.dateText}>{item.date}</Text>
      </View>
    </View>
  );
}

const Items = () => {
  const renderItem = ({ item }) => (
    <Item item={item} />
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      style={styles.flatList}
    />
  );
}

export default Items;