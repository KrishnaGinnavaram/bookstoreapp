import React ,{useState} from 'react';
import { Button, Modal, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import AppTextInput from '../Components/AppTextInput';

function TextInputs({onPress}) {
    const [txt1,setTxt1] = useState('');
    const [txt2,setTxt2] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const ct = (txt) => {
      setTxt2(txt)
    }
    return (
      <>
      <TouchableWithoutFeedback
      onPress={() => setModalVisible(true)}>
        <SafeAreaView>
            <Text>{txt1 + ' ' + txt2}</Text>
            <TextInput
            placeholder='my first name'
            // clearButtonMode={true}
             onChangeText={(text) => setTxt1(text)}
             style={{borderBottomColor: "black",
            borderBottomWidth: 1,
            color: "green",
             marginVertical: 5}}
             secureTextEntry
            />

          <AppTextInput
          maxLength={20}
          style={StyleSheet.textFont}
        //   secureTextEntry
          // onChangeText={(text) => setTxt2(text)}
          onChangeText={ct}
          placeholder="my second name"

          />
        </SafeAreaView>
        </TouchableWithoutFeedback>
        <Modal
         visible={modalVisible}
         animationType='slide'>
          <Button
                   style={{marginTop: 35}}
          title="close"
          onPress={() => setModalVisible(false)}
          />
        </Modal>
        </>
    );
}
const styles = StyleSheet.create({
    textFont : {
      fontSize : Platform.OS === "android" ? 15 : 10
    }
  })
export default TextInputs;