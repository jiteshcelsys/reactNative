import React from 'react';

import {View, Platform, Text} from 'react-native';

function PlatFormComponent() {
  return (
    <View>
      {Platform.OS == 'ios' ? (
        <Text style={{fontSize: 60}}>This is android</Text>
      ) : (
        <Text style={{fontSize: 60}}>This is ios</Text>
      )}
      <Text style={{fontSize: 30}}>{JSON.stringify(Platform)}</Text>
    </View>
  );
}

export default PlatFormComponent;
