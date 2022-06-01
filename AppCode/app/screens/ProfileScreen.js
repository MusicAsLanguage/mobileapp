import { React, useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Image, Text } from "react-native";

import Screen from "../components/Screen";
import colors from "../config/colors";
import useAuth from "../auth/useAuth";
import routes from "../navigation/routes";
import AppText from "../components/AppText";
import BackButton from "../components/BackButton";
import { getUserScore } from "../api/score";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

function ProfileScreen({ navigation }) {
  const { user } = useAuth();
  const [score, setScore] = useState(0);

  useEffect(() => {
    const focus = navigation.addListener("focus", (e) => {
      getUserScore().then((response) => {
        if (response == null) return;

        const score = response.data?.score;
        //console.log("Profile score = ", score);
        setScore(score);
      });
    });

    return () => focus;
  }, [navigation]);

  return (
    <Screen style={styles.screen}>
      <BackButton onPress={() => navigation.navigate(routes.SETTINGS)} />
      <View style={styles.accountInfo}>
        <Image
          style={styles.portrait}
          source={require("../assets/portrait_placeholder.png")}
        />
        <Text style={styles.title}>{user.name}</Text>
        <Text style={styles.subTitle}>{user.email}</Text>
      </View>
      <ScrollView
        style={styles.scoreInfo}
        contentContainerStyle={styles.scoreContent}
      >
        {/* TODO: Get actual account details here */}
        <AppText style={styles.scoreTitle}>Your Score</AppText>
        <AppText style={styles.score}>{score.toLocaleString()}</AppText>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  accountInfo: {
    marginVertical: 30,
    alignItems: "center",
  },
  container: {
    marginTop: 20,
  },
  portrait: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  screen: {
    backgroundColor: colors.white,
  },
  subTitle: {
    fontSize: 15,
    paddingVertical: 10,
    color: colors.grey,
  },
  title: {
    fontSize: 20,
    paddingVertical: 10,
    color: colors.black,
    fontWeight: "bold",
  },
  scoreInfo: { padding: 50 },
  scoreContent: {
    alignItems: "center",
    padding: 50,
  },
  scoreTitle: {
    color: colors.deepskyblue,
    fontSize: 30,
    fontWeight: "normal",
  },
  score: {
    textAlign: "center",
    color: colors.magenta,
    fontWeight: "bold",
    fontSize: 50,
  },
});

export default ProfileScreen;
