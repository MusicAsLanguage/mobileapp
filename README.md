# mobileapp
Mobile app code for the project.


## Set Up Development Environment
- React Native and Emulator
  1. Install JDK: https://docs.oracle.com/en/java/javase/11/install/installation-jdk-microsoft-windows-platforms.html#GUID-A7E27B90-A28D-4237-9383-A58B416071CA
  2. Install Android Studio: https://docs.expo.io/workflow/android-studio-emulator/
  3. Install Nodejs and NPM: https://www.fosstechnix.com/how-to-install-node-js-on-windows/#:~:text=How%20to%20Install%20Node.js%20on%20Windows%2010%20%5B4,Windows.%20Create%20a%20javascript%20file%20with%20name%20nodeapp.
  4. Install Expo CLI: https://docs.expo.io/workflow/expo-cli/
  5. Beginner course for React Native with Expo CLI: https://www.youtube.com/watch?v=0-S5a0eXPoc. This video also illustrates how to set up environment, how to run iOS/Andriod emulator, and how to debug in VSCode or Chrome.
- Connect with Webservice
  Follow the instruction on webservice README: https://github.com/MusicAsLanguage/webservice/edit/main/README.md
  
## Code Structure
- Entry point: AppCode/App.js
- Main development code is under AppCode/app folder:
  - AppCode/app/api: contains code calling webservice APIs.
  - AppCode/app/assets: pictures/videos for temporary solution. These information will be hosted in Azure in the future.
  - AppCode/app/components: key components for the app, such as Screen, ListItem, Button, etc.
  - AppCode/app/config: configs of the app theme, such as colors and styles.
  - AppCode/app/navigation: create navigations in the app, such as TabNavigation and StackNavigation.
  - AppCode/app/screens: code for building up different screens for the app.
