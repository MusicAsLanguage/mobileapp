import { React, useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Text,
  View,
} from "react-native";

import Screen from "../components/Screen";
import colors from "../config/colors";
import useAuth from "../auth/useAuth";
import routes from "../navigation/routes";
import AppText from "../components/AppText";
import BackButton from "../components/BackButton";
import { getUserScore } from "../api/score";
import useRewardConfig from "../data/config/reward";

function ProfileScreen({ navigation }) {
  const { user } = useAuth();
  const [score, setScore] = useState(0);
  const [trophies, setTrophies] = useState();
  const { getTrophies } = useRewardConfig();

  useEffect(() => {
    const focus = navigation.addListener("focus", (e) => {
      getUserScore().then((response) => {
        if (response == null) return;

        const score = response.data?.score;
        //console.log("Profile score = ", score);
        setScore(score);
      });

      getTrophies().then((response) => {
        if (response == null) return;

        const trophies = response;
        console.log(trophies);
        setTrophies(trophies);
      });
    });

    return () => focus;
  }, [navigation]);

  const showTrophy = (trophy) => {
    if (score >= trophy.ScoreThrehold) {
      return (
        <ImageBackground
          source={{ uri: trophy.Url, cache: "force-cache" }}
          style={styles.trophy}
        ></ImageBackground>
      );
    } else {
      return null;
    }
  };

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
      {trophies != null
        ? trophies.map((trophy, index) => (
            <ScrollView
              key={index}
              style={styles.trophycontainer}
              contentContainerStyle={styles.trophycontentcontainer}
              horizontal={true}
            >
              {showTrophy(trophy)}
            </ScrollView>
          ))
        : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  accountInfo: {
    marginVertical: 30,
    alignItems: "center",
    flex: 1,
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
  scoreInfo: { padding: 50, flex: 1 },
  scoreContent: {
    alignItems: "center",
    padding: 10,
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
  trophycontainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 50,
  },
  trophycontentcontainer: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 1,
  },
  trophy: {
    height: 150,
    width: 150,
    padding: 15,
    margin: 15,
    backgroundColor: colors.transparent,
    shadowOffset: { width: -3, height: 3 },
    shadowColor: colors.deepskyblue,
    shadowOpacity: 0.6,
    shadowRadius: 10,
  },
});

export default ProfileScreen;
