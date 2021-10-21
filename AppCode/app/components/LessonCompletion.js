import React, { useEffect, useRef, useState } from "react";
import { Animated, Dimensions, Image, StyleSheet, View } from "react-native";
import AppText from "./AppText";
import uistrings from "../config/uistrings";

function LessonCompletion() {
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let isMount = true;

    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() =>
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: 3000,
        delay: 3000,
        useNativeDriver: true,
      }).start(() => {
        if (isMount) setHide(true);
      })
    );

    return () => {
      isMount = false;
    };
  }, [fadeAnimation]);

  if (hide) {
    return null;
  }

  return (
    <Animated.View style={(styles.animContainer, { opacity: fadeAnimation })}>
      <View style={styles.container}>
        <AppText style={styles.title}>
          {uistrings.LessonCompletionTitle}
        </AppText>
        <View style={styles.avatarBox}>
          <Image
            source={require("../assets/avatar.png")}
            style={styles.avatar}
          />
        </View>
        <AppText style={styles.message}>
          {uistrings.LessonCompletionMsg}
        </AppText>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width - 10,
    height: Dimensions.get("window").height * 0.4,
    bottom: 10,
    position: "absolute",
    backgroundColor: "deepskyblue",
    borderRadius: 10,
    opacity: 0.9,
  },
  animContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  avatarBox: {
    alignItems: "center",
    justifyContent: "center",
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "darkviolet",
  },
  avatar: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 28,
    fontVariant: ["small-caps"],
    textAlign: "center",
    textAlignVertical: "top",
    color: "blue",
  },
  message: {
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    textAlignVertical: "top",
    color: "red",
  },
});

export default LessonCompletion;
