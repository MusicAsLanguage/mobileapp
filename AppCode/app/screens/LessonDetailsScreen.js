import React, { useEffect, useState, useRef } from "react";
import { SafeAreaView, View, FlatList, StyleSheet } from "react-native";
import { Video } from "expo-av";

import AppText from "../components/AppText";
import ActivityListItem from "../components/ActivityListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";
import routes from "../navigation/routes";
import BackButton from '../components/BackButton';
import Screen from '../components/Screen';

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

  return (
    <Screen style={styles.container}>
      <View style={styles.container}>
        <BackButton onPress={() => navigation.navigate(routes.LESSONS)} />
        <View style={styles.detailsContainer}>       
          <Video
            source={{uri: lesson.IntroVideo.Url}}
            ref={player}
            shouldPlay
            resizeMode="cover"
            useNativeControls
            style={styles.video}
          />
          <AppText style={styles.title}>{lesson.Name}</AppText>
          <AppText style={styles.description}>{lesson.Description}</AppText>
        </View>
        <ListItemSeparator />
        <SafeAreaView style={styles.activityContainer}>
          <FlatList
            data={lesson.Activities}
            key={lesson.Activities._id}
            numColumns={2}
            columnWrapperStyle={styles.activity}
            keyExtractor={(activities) => activities._id}
            renderItem={({ item }) => (
              <ActivityListItem
              title={item.Name}
              description={item.Description}
              thumbnail={{uri: item.ImageUrl}}
              status={"status"} // TODO: need to get actual status here
              onPress={() => navigation.navigate(routes.ACTIVITI_DETAILS, item)}
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
  },
  description: {
    color: colors.black,
    fontSize: 15,
    marginVertical: 10,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginTop: 10,
    color: colors.magenta,
    fontWeight: "bold",
  },
  video: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  activityContainer: {
    padding: 10,
    marginTop: 20,
    alignItems: "center",
  },
  activity: {
    justifyContent: "space-between",
  },
});

export default LessonDetailsScreen;