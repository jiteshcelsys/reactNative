import React from 'react';
import {View, Text, Modal, Button, StyleSheet} from 'react-native';

function ModalDialog() {
  const [state, setState] = React.useState(false);
  return (
    <>
      <View style={style.main}>
        <Modal transparent={true} visible={state} animationType="fade">
          <View style={style.centerModal}>
            <View style={style.modalContain}>
              <View>
                <Text>Hello write your name</Text>
              </View>
              <View style={style.CloseBtn}>
                <Button title="close" onPress={() => setState(false)} />
              </View>
            </View>
          </View>
        </Modal>

        <View style={style.openView}>
          <Button title="Open" onPress={() => setState(true)} />
        </View>
      </View>
    </>
  );
}
const style = StyleSheet.create({
  main: {
    flex: 1,
  },
  openView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  CloseBtn: {
    flex: 1,
  },
  modalContain: {
    width: '50%',
    height: '10%',
    justifyItems: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'blue',
  },
  centerModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ModalDialog;
