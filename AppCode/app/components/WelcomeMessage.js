import { useEffect, useState, useRef } from "react";
import { Animated, Dimensions, Image, StyleSheet, View } from "react-native";
import { getUserScore } from "../api/score";
import colors from "../config/colors";
import uistrings from "../config/uistrings";
import AppText from "./AppText";

function WelcomeMessage() {
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const [hide, setHide] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let isMounted = true;

    getUserScore().then((response) => {
      const score = response.data?.score;
      //console.log(`user score = ${score}`);
      setScore(score);
    });

    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start(() =>
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: 1000,
        delay: 3500,
        useNativeDriver: true,
      }).start(() => {
        if (isMounted) setHide(true);
      })
    );

    return () => (isMounted = false);
  }, [fadeAnimation]);

  if (hide) return null;

  return (
    <Animated.View style={(styles.animContainer, { opacity: fadeAnimation })}>
      <View style={styles.container}>
        <AppText style={styles.message}>{uistrings.WelcomeMessage}</AppText>
        <View style={styles.avatarBox}>
          <Image
            source={require("../assets/kudos.png")}
            style={styles.avatar}
          />
        </View>
        <View
          style={{
            justifyContent: "space-evenly",
            flexDirection: "column",
            height: 200,
          }}
        >
          {score > 0 ? (
            <View>
              <AppText style={styles.score}>
                {uistrings.WelcomeScore} {score.toLocaleString()}!
              </AppText>
              <AppText style={styles.submessage}>
                {uistrings.WelcomeSubMessage}
              </AppText>
            </View>
          ) : (
            <View>
              <AppText style={styles.submessage}>
                {uistrings.WelcomeSubMessageWhenNoScore}
              </AppText>
            </View>
          )}
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.9,
    position: "absolute",
    bottom: 10,
    //margin: 20,
    backgroundColor: colors.steelblue,
    //borderRadius: 10,
    //opacity: 0.9,
    flexDirection: "column",
    borderWidth: 20,
    borderColor: colors.white,
  },
  animContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    fontSize: 60,
    textAlign: "center",
    color: colors.white,
  },
  submessage: {
    fontSize: 36,
    textAlign: "center",
    color: colors.yellowgreen,
  },
  score: {
    fontSize: 25,
    textAlign: "center",
    color: colors.white,
  },
  avatarBox: {
    alignItems: "center",
    justifyContent: "center",
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: colors.darkviolet,
  },
  avatar: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
  },
});

export default WelcomeMessage;
