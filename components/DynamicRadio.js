import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

function DynamicRadio() {
  const skills = [
    {
      name: 'java',
      id: 1,
    },
    {
      name: 'PHP',
      id: 2,
    },
    {
      name: 'NODE',
      id: 3,
    },
  ];
  const [state, setState] = useState(0);

  return (
    <>
      <View style={style.main}>
        {skills.map((item, index) => (
          <TouchableOpacity onPress={() => setState(item.id)}>
            <View style={style.RadioWrapper}>
              <View style={style.RadioIcon}>
                {state === item.id ? <View style={style.radioBg} /> : null}
                <View />
              </View>
              <View>
                <Text style={style.RadioText} key={index}>
                  {item.name}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
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
});

export default DynamicRadio;
