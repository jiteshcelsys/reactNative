import React from 'react';
import {View, ActivityIndicator, Button} from 'react-native';
function Activity() {
  const [update, setUpdate] = React.useState(false);
  return (
    <>
      <View>
        <Button title="loader" onPress={() => setUpdate(!update)} />
        <ActivityIndicator size={200} color="blue" animating={update} />
      </View>
    </>
  );
}

export default Activity;
