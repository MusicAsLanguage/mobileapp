import React from "react";
import { StyleSheet } from "react-native";
import Icon from "./Icon";

function Status({ name }) {
  const completed = "checkbox-marked-circle";
  const notcompleted = "play-circle";
  let item = null;

  switch (name) {
    case "Completed":
      item = (
        <Icon
          name={completed}
          iconColor="orange"
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
          iconColor="lightcyan"
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
  status: {},
});

export default Status;
