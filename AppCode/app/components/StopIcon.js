import * as React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
import Icon from "./Icon";

function StopIcon() {
  return (
    <View style={styles.container}>
      <View style={styles.innerbox}>
        <Icon
          name="pause"
          size={60}
          backgroudColor={colors.white}
          iconColor={colors.red}
        ></Icon>
      </View>
      <View style={styles.outerbox}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.transparent,
  },
  outerbox: {},
  innerbox: {
    zIndex: 1,
  },
  Icon: {
    backgroundColor: colors.transparent,
  },
});

export default StopIcon;
