import React from "react";
import { StyleSheet } from "react-native";
import colors from "../config/colors";
import Icon from "./Icon";

function ActivityStatus({ value }) {
  const completed = "checkbox-marked-circle";
  const notcompleted = "play-circle";
  let item = null;

  const val = parseInt(value);

  switch (val) {
    case 10:
      item = (
        <Icon
          name={completed}
          iconColor={colors.yellowgreen}
          backgroudColor="transparent"
          size={60}
          style={styles.status}
        />
      );
      break;
    default:
      item = (
        <Icon
          name={notcompleted}
          iconColor={colors.deepskyblue}
          backgroudColor="transparent"
          size={60}
          style={styles.status}
        />
      );
      break;
  }

  return item;
}

const styles = StyleSheet.create({
  status: {
    alignSelf: "flex-start",
  },
});

export default ActivityStatus;
