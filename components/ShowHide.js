import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
function UserData() {
  //un-Mount in the useEffect
  const timer = setInterval(() => {
    console.warn('timer is ready');
  }, 2000);
  useEffect(() => {
    return () => clearInterval(timer);
  });
  return (
    <>
      <Text style={{fontSize: 30}}>child Component</Text>
    </>
  );
}

export default UserData;
