# react-native-firebase-chat
This repository contains the source code for a simple chat application built with React Native (frontend) and Firebase (backend).

Copy the config from your Firebase account and paste it to firebase.js file that can be found by the path: app/configs/firebase.js 

```javascript
export const firebaseConfig = {
  apiKey: “<API_KEY>“,
  authDomain: “<PROJECT_ID>.firebaseapp.com”,
  databaseURL: “https://<DATABASE_NAME>.firebaseio.com”,
  projectId: “<PROJECT_ID>“,
  storageBucket: “<BUCKET>.appspot.com”,
  messagingSenderId: “<SENDER_ID>“,
}
```

To run the iOS application, use the following command:

```
react-native run-ios
```

To run the Android application, use this command:

```
react-native run-android
```

Alternatively open project in Android Studio, running it on emulator. That's what worked for me. I remember using the Nexus 4 phone, with 4 gb ram on the emulator. To the dashboard by a@a.com, 123456, the app uses firebase along with the resManWebJS
