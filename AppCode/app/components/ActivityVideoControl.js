import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "./Icon";
import colors from "../config/colors";

function ActivityVideoControl({ onBack, onReplay }) {
  const replay = "refresh-circle"; //'replay';
  const goBack = "arrow-left";

  const handleBack = () => {
    onBack();
  };

  const handleReplay = () => {
    onReplay();
  };

  return (
    <View style={styles.toolbar}>
      {/* <TouchableOpacity onPress={handleBack}>
        <Icon
          name={goBack}
          iconColor="#4b62f2"
          backgroundColor="transparent"
          size={80}
          style={styles.button}
        />
      </TouchableOpacity> */}
      <TouchableOpacity onPress={handleReplay} style={styles.buttonContainer}>
        <Icon
          name={replay}
          iconColor={colors.darkblue}
          backgroudColor={colors.transparent}
          size={160}
          style={styles.button}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  toolbar: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.transparent,
  },
  buttonContainer: {
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  button: {
    alignSelf: "center",
  },
});

export default ActivityVideoControl;
