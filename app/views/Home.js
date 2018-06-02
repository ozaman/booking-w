import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const Home = () => (
  <ScrollView contentContainerStyle={styles.view}>
    <Text style={styles.header1}>Lighthouses</Text>
    <Image
      source={require('../img/cover.jpg')}
      style={styles.img}
    />
    <Text style={styles.photo}>
      Pigeon Point Lighthouse, Pescadero, California
    </Text>
    <Text style={styles.text}>
      Know the most beautiful lighthouses of the world.
    </Text>
  </ScrollView>
);

Home.navigationOptions = ({ navigation }) => ({
  title: 'Home',
});

const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    padding: 20
  },
  img: {
    width: 300,
    height: 300,
    marginBottom: 10
  },
  header1: {
    fontSize: 24,
    marginBottom: 10
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 10
  },
  photo: {
    fontStyle: 'italic',
    marginBottom: 15
  }
});

export default Home;
