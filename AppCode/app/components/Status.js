import React from "react";
import { StyleSheet } from "react-native";
import Icon from "./Icon";

function Status({ value }) {
  const completed = "checkbox-marked-circle";
  const notcompleted = "play-circle";
  let item = null;

  const val = parseInt(value);

  switch (val) {
    case 10:
      item = (
        <Icon
          name={completed}
          iconColor="lime"
          backgroudColor="transparent"
          size={80}
          style={styles.status}
        />
      );
      break;
    default:
      item = (
        <Icon
          name={notcompleted}
          iconColor="deepskyblue"
          backgroudColor="transparent"
          size={80}
          style={styles.status}
        />
      );
      break;
  }

  return item;
}

const styles = StyleSheet.create({
  status: {},
});

export default Status;
