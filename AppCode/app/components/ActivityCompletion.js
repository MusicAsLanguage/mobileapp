import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";
import uistrings from "../config/uistrings";
import colors from "../config/colors";
import ActivityVideoControl from "../components/ActivityVideoControl";

function ActivityCompletion({ onBack, onReplay }) {
  const handleBack = () => {
    onBack();
  };

  const handleReplay = () => {
    onReplay();
  };

  return (
    <View style={styles.container}>
      <View style={styles.outerBox}>
        <AppText style={styles.message}>
          {uistrings.ActivityCompletionMsg}
        </AppText>
      </View>
      <View style={styles.replayContainer}>
        <ActivityVideoControl
          styles={styles.replay}
          onBack={handleBack}
          onReplay={handleReplay}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    marginTop: 120,
    marginLeft: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  completionContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  message: {
    fontSize: 35,
    textAlign: "center",
    color: colors.white,
  },
  outerBox: {
    backgroundColor: colors.transparent,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 200,
    height: 200,
  },
  replayContainer: {
    flex: 1,
    width: "50%",
    height: "50%",
    marginTop: 50,
    justifyContent: "center",
  },
  replay: {},
});

export default ActivityCompletion;
