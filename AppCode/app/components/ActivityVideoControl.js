import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native"
import Icon from "./Icon";

function ActivityVideoControl({ onBack, onReplay }) {

  const replay = 'replay';
  const goBack = 'arrow-left';

  const handleBack = () => {
    onBack();
  }

  const handleReplay = () => {
    onReplay();
  }

  return (
    <View style={styles.toolbar}>
      <TouchableOpacity onPress={handleBack}>
        <Icon
          name={goBack}
          iconColor="yellowgreen"
          backgroudColor="transparent"
          size={80}
          style={styles.button}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleReplay}>
        <Icon
          name={replay}
          iconColor="yellowgreen"
          backgroudColor="transparent"
          size={80}
          style={styles.button}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  toolbar: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    alignSelf: 'center',
  }
})

export default ActivityVideoControl;