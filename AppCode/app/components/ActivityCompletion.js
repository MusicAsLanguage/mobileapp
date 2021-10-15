import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";
import uistrings from "../config/uistrings";
import Icon from "./Icon";
import colors from "../config/colors";
import ActivityVideoControl from "../components/ActivityVideoControl";

function ActivityCompletion({ onBack, onReplay }) {
  const musicNote = "music-circle";

  const handleBack = () => {
    onBack();
  }

  const handleReplay = () => {
    onReplay();
  }

  return (
    <View style={styles.container}>
      <View style={styles.completionContainer}>
        <View style={styles.outerBox}>
          <Icon
            name={musicNote}
            iconColor={colors.white}
            backgroudColor="transparent"
            size={160}
            style={styles.musicnote}
          />
          <AppText style={styles.message}>
            {uistrings.ActivityCompletionMsg}
          </AppText>
        </View>
      </View>
      <View style={styles.replayContainer}>
        <ActivityVideoControl styles={styles.replay}
          onBack={handleBack}
          onReplay={handleReplay}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  completionContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  musicnote: {
    alignItems: "center",
    justifyContent: "center",
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "darkviolet",
  },
  message: {
    fontSize: 20,
    textAlign: "center",
    // margin: 10,
    textAlignVertical: "auto",
    color: "white",
  },
  // outerBox: {
  //   backgroundColor: "transparent",
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderRadius: 100,
  //   width: 200,
  //   height: 200,
  //   borderColor: "orange",
  //   borderWidth: 10,
  // },
  replayContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    marginTop: 50,
    justifyContent: 'center',
  },
  replay: {
  }
});

export default ActivityCompletion;
