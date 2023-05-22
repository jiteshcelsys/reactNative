import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function FLexStyle() {
  return (
    <View style={InternalStyle.main}>
      <View style={InternalStyle.mainParent}>
        <View style={InternalStyle.Innermost1} />
        <View style={InternalStyle.Innermost2} />
        <View style={InternalStyle.Innermost3} />
      </View>
      <View style={InternalStyle.mainChild1} />
      <View style={InternalStyle.mainChild2} />
    </View>
  );
}
const InternalStyle = StyleSheet.create({
  main: {
    flex: 1,
  },
  mainParent: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  Innermost1: {
    flex: 1,
    backgroundColor: 'black',
    margin: 10,
  },
  Innermost2: {
    flex: 1,
    backgroundColor: 'blue',
    margin: 10,
  },
  Innermost3: {
    flex: 1,
    backgroundColor: 'skyblue',
    margin: 10,
  },
  mainChild1: {
    flex: 1,
    backgroundColor: 'green',
  },
  mainChild2: {
    flex: 1,
    backgroundColor: 'blue',
  },
});

export default FLexStyle;
