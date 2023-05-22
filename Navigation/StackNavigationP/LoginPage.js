import React from 'react';
import {Text, View, Button} from 'react-native';
const LoginPage = props => {
  const name = 'jitesh';
  const age = 25;
  return (
    <>
      <View>
        <Text> Login Page content</Text>
        <Button
          title="HOME"
          onPress={() =>
            props.navigation.navigate('HOME', {name: 'pandey', age: 30})
          }
        />
      </View>
    </>
  );
};
export default LoginPage;
