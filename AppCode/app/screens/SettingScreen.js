import React from "react";
import { Alert, StyleSheet, View, Text, TouchableOpacity } from "react-native";

import Screen from "../components/Screen";
import SettingListItem from "../components/SettingListItem";
import colors from "../config/colors";
import useAuth from "../auth/useAuth";
import AppText from "../components/AppText";
import routes from "../navigation/routes";
import uistrings from "../config/uistrings";
import { deleteuser } from "../api/user";

function SettingScreen({ navigation }) {
  const { user, logOut } = useAuth();

  const handleDeleteUser = async () => {
    const result = await deleteuser();
    if (result.ok) logOut();
  };

  const confirmAndDeleteUser = () => {
    return Alert.alert(
      uistrings.DeleteUserConfirmationTitle.toUpperCase(),
      uistrings.DeleteUserConfirmationMsg,
      [
        { text: uistrings.OK, onPress: () => handleDeleteUser() },
        { text: uistrings.Cancel.toUpperCase(), onPress: () => {} },
      ],
      { cancelable: true }
    );
  };

  return (
    <Screen style={styles.screen}>
      <AppText style={styles.screenTitle}>{uistrings.Settings}</AppText>

      <View style={styles.itemContainer}>
        <SettingListItem
          height={80}
          text={uistrings.Profile}
          backgroundColor="white"
          onPress={() => navigation.navigate(routes.PROFILE)}
        />

        <SettingListItem
          height={80}
          text={uistrings.TermsAndConditions}
          backgroundColor="white"
          onPress={() => navigation.navigate(routes.TERMS_AND_CONDITIONS)}
        />

        <SettingListItem
          height={80}
          text={uistrings.PrivacyPolicy}
          backgroundColor="white"
          onPress={() => navigation.navigate(routes.PRIVACY_POLICY)}
        />

        <View style={styles.deleteuserContainer}>
          <TouchableOpacity
            style={styles.deleteuserButton}
            onPress={() => {
              confirmAndDeleteUser();
            }}
          >
            <Text style={styles.deleteuserText}>{uistrings.DeleteUser}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.logoutContainer}>
          <TouchableOpacity onPress={() => logOut()}>
            <Text style={styles.logoutText}>{uistrings.LogOut}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 470,
    width: "100%",
    backgroundColor: colors.white,
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  logoutContainer: {
    height: 70,
    width: "100%",
    backgroundColor: colors.medium,
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  logoutText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
    marginTop: 22,
  },
  screen: {
    backgroundColor: colors.yellowgreen,
  },
  screenTitle: {
    fontSize: 23,
    fontWeight: "bold",
    color: colors.white,
    alignSelf: "center",
    marginTop: 25,
  },
  deleteuserContainer: {
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  deleteuserButton: {
    justifyContent: "center",
    width: "100%",
    height: 80,
  },
  deleteuserText: {
    fontSize: 20,
    color: colors.red,
    marginLeft: 25,
    textAlign: "left",
    fontFamily: "Avenir",
  },
});

export default SettingScreen;
