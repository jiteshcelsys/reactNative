import React from 'react';
import {View, Button, StatusBar, StyleSheet} from 'react-native';
function StatusBarComponent() {
  const [bar, setBar] = React.useState(false);
  return (
    <>
      <View style={style.container}>
        <StatusBar
          backgroundColor="blue"
          hidden={bar}
          barStyle="light-content"
        />
        <Button title="toggle" color="red" onPress={() => setBar(!bar)} />
      </View>
    </>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default StatusBarComponent;
