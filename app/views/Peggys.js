import React from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  Linking,
  StyleSheet
} from 'react-native';
import { lighthouses } from '../data.service';
import lighthouseStyles from './lighthouse.styles';

const title = lighthouses[3].title;
const content = lighthouses[3].content;
const image = lighthouses[3].image;
const photo = lighthouses[3].photo;
const photoUrl = lighthouses[3].url;

const Peggys = () => (
  <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.h1}>{title}</Text>
      <View style={styles.figure}>
        <Image source={require('../img/lighthouse_peggys.jpg')} style={styles.img}/>
        <View style={styles.credits}>
          <Text style={styles.labelCredits}>Photo: </Text>
          <Text
            style={[styles.linkCredits, styles.labelCredits]}
            onPress={() => Linking.openURL(photoUrl)}
          >
            {photo}
          </Text>
        </View>
      </View>
      <Text style={styles.p}>{content}</Text>
  </ScrollView>
);

Peggys.navigationOptions = ({ navigation }) => ({
  title: 'Peggys',
});

const styles = StyleSheet.create(lighthouseStyles);

export default Peggys;
