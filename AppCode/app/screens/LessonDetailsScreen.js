import React, { useEffect, useState, useRef } from "react";
import { SafeAreaView, View, FlatList, StyleSheet } from "react-native";
import { Video } from "expo-av";

import AppText from "../components/AppText";
import ActivityListItem from "../components/ActivityListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";
import routes from "../navigation/routes";
import BackButton from "../components/BackButton";
import Screen from "../components/Screen";
import Icon from "../components/Icon";

function LessonDetailsScreen({ navigation, route }) {
  const lesson = route.params;

  // Need to pause the video when navigate away to a new screen
  const player = React.useRef(null);
  const [lastState, setLastState] = useState();

  useEffect(() => {
    const blur = navigation.addListener("blur", () => {
      player?.current?.pauseAsync();
    });

    return blur;
  }, [navigation]); // only rerun the effect if navigation changes

  const lessonDuration = lesson.IntroVideo.LengthInSeconds / 60;

  return (
    <Screen style={styles.container}>
      <BackButton onPress={() => navigation.navigate(routes.LESSONS)} />
      <View style={styles.lessonContainer}>
        <Video
          source={{ uri: lesson.IntroVideo.Url }}
          ref={player}
          shouldPlay
          resizeMode="cover"
          useNativeControls
          style={styles.lessonVideo}
        />
        <View style={styles.lessonDetail}>
          <View style={styles.lessonDescSect}>
            <AppText style={styles.lessonName}>{lesson.Name}</AppText>
            <AppText style={styles.lessonDescription}>
              {lesson.Description}
            </AppText>
          </View>
          <View style={styles.lessonDurationSect}>
            <Icon
              name="volume-medium"
              backgroudColor="transparent"
              iconColor="skyblue"
            />
            <AppText style={styles.lessonDuration}>
              {lessonDuration} minutes
            </AppText>
          </View>
        </View>
      </View>
      <ListItemSeparator />
      <View style={styles.activityContainer}>
        <AppText style={styles.activitySectionTitle}>Activities</AppText>
        <SafeAreaView>
          <FlatList
            data={lesson.Activities}
            key={lesson.Activities._id}
            numColumns={2}
            columnWrapperStyle={styles.activityItem}
            keyExtractor={(activities) => activities._id}
            renderItem={({ item }) => (
              <ActivityListItem
                id={item._id}
                name={item.Name}
                description={item.Description}
                duration={item.Videos[0].LengthInSeconds}
                thumbnail={{ uri: item.ImageUrl }}
                status={"status"} // TODO: need to get actual status here
                onPress={() =>
                  navigation.navigate(routes.ACTIVITI_DETAILS, item)
                }
              />
            )}
          />
        </SafeAreaView>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  lessonContainer: {
    flex: 1,
    padding: 10,
  },
  lessonDetail: {
    flexDirection: "row",
  },
  lessonName: {
    fontSize: 24,
    fontWeight: "500",
    color: colors.magenta,
    fontWeight: "bold",
  },
  lessonDescription: {
    color: colors.black,
    fontSize: 14,
  },
  lessonDescSect: {
    flex: 0.7,
    flexDirection: "column",
  },
  lessonDurationSect: {
    flex: 0.3,
    flexDirection: "row",
  },
  lessonDuration: {
    color: colors.black,
    fontSize: 12,
    textAlign: "right",
    alignSelf: "center",
    height: "50%",
  },
  lessonVideo: {
    width: "100%",
    height: "80%",
    marginBottom: 10,
    borderRadius: 10,
  },
  activityContainer: {
    flex: 1,
    padding: 10,
    marginBottom: 20,
  },
  activitySectionTitle: {
    textAlign: "left",
    fontSize: 12,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  activityItem: {
    justifyContent: "space-between",
  },
});

export default LessonDetailsScreen;
