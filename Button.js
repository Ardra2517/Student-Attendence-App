import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {Audio} from 'expo-av';
import db from '../Config';

class SoundButton extends React.Component {
   playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      { shouldPlay: true }
    );
  }
isButtonPressed(buttonColor){
var buzzerTime=new Date().getTime();
var path= 'teams/' + buttonColor;
db.ref(path).update({
  isButtonPressed: true,
  timeStamp: buzzerTime
})
}
  render() {
    return (
      <TouchableOpacity
        style={[styles.button,{backgroundColor:this.props.btnColor}]}
        onPress={()=>{
          this.playSound()
          this.isButtonPressed(this.props.btnColor);
          }
        }>
        <Text
          style={styles.buttonText}>
          Press Me
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginTop: 100,
    marginLeft: 80,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    backgroundColor: 'red',
    borderRadius: 100,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: "white",
  }
});

export default SoundButton;