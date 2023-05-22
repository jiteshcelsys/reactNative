import React from 'react';
import {Text, View, Pressable, StyleSheet, ScrollView} from 'react-native';
function PressAble() {
  return (
    <>
      <ScrollView>
        <View style={style.main}>
          <Pressable
            delayLongPress={100}
            // onPress={() => console.warn('normal press is called')}
            onLongPress={() => console.warn('Long press is called')}
            onPressOut={() => console.warn('On press out')}
            onPressIn={() => console.warn('On Press In')}>
            <Text style={style.pressable}>Pressable</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}
const style = StyleSheet.create({
  main: {
    flex: 1,
    fontSize: 24,
    justifyContent: 'center',
  },
  pressable: {
    backgroundColor: 'pink',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 24,
    textAlignVertical: 'center',
  },
});

export default PressAble;
