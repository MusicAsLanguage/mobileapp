import * as React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

function RecordIcon() {
  return (
    <View style={styles.container}>
      <View style={styles.innerbox}></View>
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
  innerbox: {
    height: 50,
    width: 50,
    position: "absolute",
    justifyContent: "center",
    backgroundColor: colors.red,
    borderRadius: 25,
    zIndex: 1,
  },
  Icon: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.transparent,
  },
});

export default RecordIcon;
