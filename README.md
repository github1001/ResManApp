# react-native-firebase-chat
This repository demonstrates a residential management system with a simple chat application built with React Native (frontend) and Firebase (backend). The chat application uses much of the available open source materials. The residential applications, designs and use cases are work in progress that never took off to superstardom.

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
You'll need to do a npm start to run the server, then

open project in Android Studio, running it on emulator. That's what worked for me. I remember using the Nexus 4 phone, with 4 gb ram on the emulator. Check the dashboard by a@a.com, 123456, the app uses firebase along with the resManWebJS web application dashboard

Please get and upload your own key configuration from firebase and edit them at firebase.js before running them
