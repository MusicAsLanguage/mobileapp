import * as React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

function StopIcon() {
  return (
    <View style={styles.container}>
      <View style={styles.innerBox}></View>
      <View style={styles.outerbox}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.transparent,
  },
  outerbox: {
    height: 60,
    width: 60,
    position: "absolute",
    justifyContent: "center",
    backgroundColor: colors.white,
    borderRadius: 30,
    margin: -5,
  },
  innerBox: {
    height: 30,
    width: 30,
    position: "absolute",
    justifyContent: "center",
    backgroundColor: colors.red,
    margin: 10,
    zIndex: 1,
  },
  Icon: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.transparent,
  },
});

export default StopIcon;
