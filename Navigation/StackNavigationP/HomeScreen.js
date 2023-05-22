import React from 'react';
import {Text, View} from 'react-native';
const HomeScreen = props => {
  const {name, age} = props.route;
  console.warn(props.route.name);
  return <Text>HOMEPAGE Content</Text>;
};
export default HomeScreen;
