import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

function RadioNative() {
  const [state, setState] = useState(0);
  return (
    <>
      <View style={style.main}>
        <TouchableOpacity onPress={() => setState(1)}>
          <View style={style.RadioWrapper}>
            <View style={style.RadioIcon}>
              {state === 1 ? <View style={style.radioBg} /> : null}
              <View />
            </View>
            <Text style={style.RadioText}>Radio 1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setState(2)}>
          <View style={style.RadioWrapper}>
            <View style={style.RadioIcon}>
              {state === 2 ? <View style={style.radioBg} /> : null}
              <View />
            </View>
            <Text style={style.RadioText}>Radio 2</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}
const style = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  RadioText: {
    textAlign: 'center',
    fontSize: 30,
  },
  RadioIcon: {
    fontSize: 10,
    height: 40,
    width: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    marginTop: 5,
    backgroundColor: 'blue',
  },
  radioBg: {
    backgroundColor: 'black',
    height: 25,
    width: 25,
    borderRadius: 20,
    margin: 5,
  },
  // RadioWrapper: {
  //   // flexDirection: 'row',
  //   // alignItems: 'center',
  //   textAlignVertical: 'center',
  //   alignContent: 'center',
  //   justifyContent: 'center',
  // },
});

export default RadioNative;
