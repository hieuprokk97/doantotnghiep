import {
  View,
  Text,
  Modal,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import CustomButton from '../component/CustomButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const AskForLoginModal = ({
  modalVisible,
  onClickCancel,
  onClickAggree,
  onClose,
  btnCancel,
  btnOk,
  txtTitle
}) => {
  return (
    <Modal visible={modalVisible} transparent>
      <View style={styles.modalView}>
        <View style={styles.mainView}>

          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ color: 'black', marginTop: 20, width: '80%'}}>{txtTitle}</Text>
            <TouchableOpacity
              style={styles.clearBtn}
              onPress={() => {
                onClose();
              }}>
              <MaterialIcons name='clear' size={25} color={'black'} />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                onClickCancel();
              }}>
              <Text style={styles.btnText}>{btnCancel}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                onClickAggree();
              }}>
              <Text style={styles.btnText}>{btnOk}</Text>
            </TouchableOpacity>
          </View>


        </View>

      </View>
    </Modal>
  );
};

export default AskForLoginModal;
const styles = StyleSheet.create({
  modalView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainView: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '90%',
    height: 150
  },
  btn: {
    width: '40%',
    height: 40,
    alignSelf: 'center',
    backgroundColor: '#FD9102',
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
  },
  icon: {
    width: 24,
    height: 24,
  },
  btnClose: {
    color: 'black'
  },
  clearBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});