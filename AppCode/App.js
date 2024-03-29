import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useState, useEffect } from "react";

import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import LessonContext from "./app/data/lesson/lessoncontext";
import RewardContext from "./app/data/config/rewardcontext";
import SongContext from "./app/data/song/songcontext";

export default function App() {
  const [user, setUser] = useState();
  const [status, setStatus] = useState();
  const [playStateChanged, setPlayStateChanged] = useState();
  const [rewardConfig, setRewardConfig] = useState();
  const [songStatus, setSongStatus] = useState();

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  useEffect(() => {
    restoreUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <LessonContext.Provider
        value={{ status, setStatus, playStateChanged, setPlayStateChanged }}
      >
        <RewardContext.Provider value={{ rewardConfig, setRewardConfig }}>
          <SongContext.Provider value={{ songStatus, setSongStatus }}>
            <NavigationContainer theme={navigationTheme}>
              {user ? <AppNavigator /> : <AuthNavigator />}
            </NavigationContainer>
          </SongContext.Provider>
        </RewardContext.Provider>
      </LessonContext.Provider>
    </AuthContext.Provider>
  );

  // Comment out above code to directly go to HomeScreen.
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
      {/* <AppNavigator /> */}
    </NavigationContainer>
  );
}
