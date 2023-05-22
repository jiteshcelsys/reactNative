import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import ShowHide from './components/ShowHide';
import ExternalStyle from './styles.js';
import FLexStyle from './components/FLexStyle';
import RadioNative from './components/RadioNative';
import DynamicRadio from './components/DynamicRadio';
import Activity from './components/ActivityIndicator';
import ModalDialog from './components/ModalDialog';
import PressAble from './components/PressAble';
import StatusBar from './components/StatusBar';
import PlatForm from './components/PlatForm';
import WebViewComponent from './components/WebView';
import StackN from './Navigation/StackNavigationP/StackN';

function App() {
  const [show, setShow] = useState(false);
  const [text, setText] = useState('SHOW');
  const setPosition = () => {
    setShow(!show);
    if (show) {
      setText('SHoW');
    } else {
      setText('HIDE');
    }
  };
  return (
    <>
      {/* <Button
        title={text}
        onPress={() => {
          setPosition();
        }}
      />
      {show ? <ShowHide /> : null} */}
      {/* <FLexStyle /> */}
      {/* <RadioNative /> */}
      {/* <DynamicRadio /> */}
      {/* <Activity /> //  ActivityIndicator*/}
      {/* <ModalDialog /> */}
      {/* <PressAble /> */}
      {/* <StatusBar /> */}
      {/* <PlatForm /> */}
      {/* <WebViewComponent /> */}
      <StackN />
    </>
  );
}
const InternalStyle = StyleSheet.create({
  TextInputStyle: {
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 12,
    color: 'white',
    backgroundColor: 'black',
  },
  Box: {
    fontSize: 20,
    color: 'black',
    backgroundColor: 'blue',
    padding: 5,
    margin: 5,
    width: 120,
    height: 120,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default App;
