# Google sign-in setup for BrightSteps

BrightSteps currently saves information in the browser on one device. Google sign-in and private cloud workspaces are not connected yet. This guide starts the Firebase project that will be used to add them.

## Create the Firebase project

1. Open [Firebase Console](https://console.firebase.google.com/) and sign in with the Google account you want to own BrightSteps.
2. Choose **Create a project**. A suggested project name is `BrightSteps Kids Ministry`. You can leave Google Analytics off for this app.
3. On the project overview, choose **Add app** and select the web icon (`</>`). Name the app `BrightSteps Web` and register it.
4. Copy the **Firebase web app configuration** shown in the setup instructions. It contains fields such as `apiKey`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId`, and `appId`. This web configuration is meant to be used by a browser app. Do not send a service-account JSON file, private key, or Google password.

## Turn on Google sign-in

1. In Firebase, open **Build → Authentication → Get started**.
2. Open **Sign-in method**, choose **Google**, enable it, select a support email, and save.
3. In Authentication settings, add `nunezreginaarena112-blipie.github.io` to the authorized domains so sign-in can return to the GitHub Pages app.

## Before saving children's records online

The app still needs its Firebase connection and tested Firestore security rules. Do not put real children's names, attendance, guardian details, or artwork in a cloud database until that work is complete. Each teacher must only see their own ministry workspace; guardian accounts need an explicit, private link to the correct child. Firestore rules must enforce both boundaries. Keep using the current local preview and its export backup for now.

## Send the web configuration

When the project and Google provider are ready, send the Firebase **web app configuration object** (the fields listed above). It is not a service-account credential. I can then wire sign-in and prepare the teacher data workspace and guardian access flow. If you prefer not to paste it into chat, tell me and I can show you how to place it in the app's local config file yourself.
