import React from 'react';
import { View, ScrollView, Text, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from '../styles/profile-style.js';
import Footer from '../components/footer.js';
import NetworkChecker from '../components/checkInternetConnection.js';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    image: 'orange',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
    image: 'green',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
    image: 'red',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bd',
    image: 'blue',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28be',
    image: 'green',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bf',
    image: 'yellow',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bg',
    image: 'blue',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bh',
    image: 'red',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bi',
    image: 'white',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bj',
    image: 'orange',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bk',
    image: 'blue',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bl',
    image: 'yellow',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bm',
    image: 'green',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bn',
    image: 'red',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bo',
    image: 'orange',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bp',
    image: 'yellow',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bq',
    image: 'green',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28br',
    image: 'green',
  },
];

const Profile = (props) => {
  let name = props.user.username;

  return (
    <View style={styles.view}>
      <View style={styles.header}>
        <Text style={styles.header__text}>{name}</Text>
        <Text 
          style={styles.header__text__link}
          onPress={() => Actions.login()}
        >
          Logout
        </Text>
      </View>
      <ScrollView style={styles.scrlView}>
        <View style={styles.container}>
          <View style={styles.container__user}>
            <View style={styles.container__user__avatar}>
              <View style={styles.container__user__avatar__container}>

              </View>
            </View>
            <View style={styles.container__user__data}>
              <View style={styles.container__user__data__component}>
                <Text style={styles.container__user__data__component__num}>
                  {DATA.length}
                </Text>
                <Text style={styles.container__user__data__component__text}>
                  Posts
                </Text>
              </View>
              <View style={styles.container__user__data__component}>
                <Text style={styles.container__user__data__component__num}>
                  28
                </Text>
                <Text style={styles.container__user__data__component__text}>
                  Followers
                </Text>
              </View>
              <View style={styles.container__user__data__component}>
                <Text style={styles.container__user__data__component__num}>
                  29
                </Text>
                <Text style={styles.container__user__data__component__text}>
                  Following
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.container__edit}>
            <TouchableHighlight underlayColor='#1ad9ff' style={{borderRadius: 6,}} onPress={async () => {alert('nice')}}>
              <View style={styles.container__edit__bttn}>
                <Text style={styles.container__edit__bttn__text}>Edit Profile</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.container__items}>
            {DATA.map((item, index) => (
              <View key={index} style={{
                backgroundColor: item.image, 
                width: '32%',
                height: 125,
                borderColor: 'white',
                borderWidth: 1,
                margin: 1,
              }}>
          
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      
      <Footer />
      <NetworkChecker />
    </View>
  );
}

export default Profile;