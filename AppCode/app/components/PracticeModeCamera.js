import React, { useEffect, useState } from "react";
import { Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import { Audio } from "expo-av";
import { Camera } from "expo-camera";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import colors from "../config/colors";
import RecordIcon from "../components/RecordIcon";
import StopIcon from "../components/StopIcon";

function PracticeModeCamera({ navigation }) {
  const [recording, setRecording] = useState(false);
  const [cameraRef, setCameraRef] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type] = useState(Camera.Constants.Type.front);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      // requesting permission for camera and audio
      requestDevicePermission();
    }
    return () => {
      mounted = false;
    };
  });

  const requestDevicePermission = () => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();

    (async () => {
      const { status } = await Audio.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();

    if (Platform.OS === "android") {
      (async () => {
        const { status } = await MediaLibrary.requestPermissionsAsync();
        setHasPermission(status === "granted");
      })();
    }
  };

  useEffect(() => {
    const blur = navigation.addListener(
      "blur",
      (e) => {
        // stop camera recording before navigate away
        if (cameraRef && cameraRef.ref) {
          cameraRef
            .stopRecording()
            .then(() => {})
            .catch((e) => {
              console.log(e);
            });
        }

        return () => {
          blur;
        };
      },
      [navigation]
    );
  }); // only rerun the effect if navigation changes

  const recordVideo = async () => {
    if (cameraRef) {
      Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        allowsRecordingIOS: true,
        interruptionModeIOS: 1, // Do not mix
        interruptionModeAndroid: 1, // Do not mix
      });

      let video = await cameraRef.recordAsync({});
      //console.log("recordVideo ", video.uri);

      // Copy the recorded video to camera roll and delete the one under local cache folder
      MediaLibrary.saveToLibraryAsync(video.uri).then(() => {
        FileSystem.deleteAsync(video.uri).then(() =>
          console.log("vide is deleted")
        );
      });
    }
  };

  const stopRecord = async () => {
    try {
      await cameraRef.stopRecording();

      // resetting the AudioMode
      // this is to fix the issue where audio becoomes lower
      // after came into practice mode
      Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const onRecording = async () => {
    setRecording(!recording);

    if (recording === false) {
      await recordVideo();
    } else {
      await stopRecord();
    }
  };

  const renderCamera = () => {
    if (hasPermission === null) return <View></View>;

    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }

    return (
      <Camera
        ratio="1:1"
        style={styles.camera}
        type={type}
        ref={(ref) => setCameraRef(ref)}
      ></Camera>
    );
  };

  return (
    <View style={styles.cameraContainer}>
      {/* <View style={{ flex: 4 }}> */}
      {renderCamera()}
      {/* </View> */}
      {/* <View style={{ flex: 1, backgroundColor: colors.transparent }}> */}
      <TouchableOpacity onPress={onRecording} style={styles.button}>
        {recording === false ? <RecordIcon /> : <StopIcon />}
      </TouchableOpacity>
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    backgroundColor: colors.transparent,
    borderColor: colors.grey,
    borderTopWidth: 1,
    justifyContent: "flex-end",
  },
  camera: {
    backgroundColor: colors.transparent,
    flex: 1,
  },
  button: {
    // height: 100,
    // width: 100,
    position: "absolute",
    paddingBottom: 10,
    //marginBottom: 100,
    //marginLeft: 175,
    alignSelf: "center",
  },
});

export default PracticeModeCamera;
