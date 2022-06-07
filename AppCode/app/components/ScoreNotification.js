import React, { useEffect, useRef, useState } from "react";
import { Animated, Dimensions, Image, StyleSheet, View } from "react-native";
import AppText from "./AppText";
import uistrings from "../config/uistrings";
import { SafeAreaView } from "react-native-safe-area-context";
import { getUserScore, updateUserScore } from "../api/score";
import colors from "../config/colors";

function ScoreNotification({ score }) {
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const [hide, setHide] = useState(false);
  //const [rendered, setRendered] = useState(false);

  useEffect(() => {
    let isMount = true;

    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() =>
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: 1500,
        delay: 1000,
        useNativeDriver: true,
      }).start(() => {
        if (isMount) setHide(true);

        getUserScore().then((response) => {
          const preScore = response.data?.score;
          if (response == null) return;

          const data = { score: preScore + score };

          updateUserScore(data).then((response) => {
            //console.log(`[${response.ok}] Updated score = ${data.score}`);
          });
        });
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
    <View style={styles.container}>
      <Animated.View style={[styles.animContainer, { opacity: fadeAnimation }]}>
        <View style={styles.avatarBox}>
          <Image
            source={require("../assets/kudos.png")}
            style={styles.avatar}
          />
        </View>
        <AppText style={styles.message}>+{score}</AppText>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    position: "absolute",
    backgroundColor: colors.black,
    zIndex: 100,
  },
  animContainer: {
    //flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
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
    fontSize: 35,
    textAlign: "center",
    margin: 10,
    textAlignVertical: "top",
    color: "yellow",
  },
});

export default ScoreNotification;
