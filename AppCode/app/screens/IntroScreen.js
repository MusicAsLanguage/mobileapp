import React from 'react';
import { Button, View, StyleSheet, ImageBackground } from 'react-native';
import { Audio } from 'expo-av';

import routes from "../navigation/routes";

function IntroScreen({ navigation }) {
  
  function autoSwitch() {
    let timer = setInterval(() => navigation.navigate(routes.LOGIN), 27000);
    return () => clearInterval(timer);
    }

  async function playAudio() {
    try{
      const { sound, status } = await Audio.Sound.createAsync(
        require('../assets/intro_audio.mp3'),
        { shouldPlay: true }
      );
      await sound.playAsync();
    } catch (error){
      console.warn(error);
    }
  }

  return (
    <ImageBackground
        style={styles.background}
        source={require('../assets/welcome_background.jpg')}
    >
      <View style={styles.buttonContainer}>
        <Button 
          title="Play sound"
          onPress={playAudio()}
        />

        <Button
          title="Transparent"
          onPress={autoSwitch()}
        />

        <Button
          title="Go to Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default IntroScreen;