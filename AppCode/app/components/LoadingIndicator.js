import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const SIZE = 40;

const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={SIZE} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  indicator: {
    //
  },
});

export default LoadingIndicator;
