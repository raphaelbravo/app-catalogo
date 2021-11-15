## Important Information
The Files and Codes present in this repository are part of a running project. In order to ensure the security of the project several files have been intentionally removed. The codes are exclusively for viewing purpose and will not execute properly if tried.

## Table of Contents

* [Available Scripts](#available-scripts)
  * [npm start](#npm-start)
  * [npm run ios](#npm-run-ios)
  * [npm run android](#npm-run-android)
* [Folder Structure](#folder-structure)

## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### `npm start`

Runs your app in development mode.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start -- --reset-cache
# or
yarn start -- --reset-cache
```

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:

##### Using Android Studio's `adb`

1. Make sure that you can run adb from your terminal.
2. Open Genymotion and navigate to `Settings -> ADB`. Select “Use custom Android SDK tools” and update with your [Android SDK directory](https://stackoverflow.com/questions/25176594/android-sdk-location).

##### Using Genymotion's `adb`

1. Find Genymotion’s copy of adb. On macOS for example, this is normally `/Applications/Genymotion.app/Contents/MacOS/tools/`.
2. Add the Genymotion tools directory to your path (instructions for [Mac](http://osxdaily.com/2014/08/14/add-new-path-to-path-command-line/), [Linux](http://www.computerhope.com/issues/ch001647.htm), and [Windows](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/)).
3. Make sure that you can run adb from your terminal.

## Folder Structure
This template follows a very simple project structure:
- `src`: This folder is the main container of all the code inside your application.
  - `api`: This folder contains all api calls.
  - `components`: This folder contains all your application common components.
  - `database`: This folder contains all queries to access local database.
  - `images`: This folder contains all images, vectors, etc.
  - `models`: This folder contains all models and entities used on the app.
  - `navigation`: This folder contains all navigation components and interfaces.
  - `screens`: This folder contains all screens accessible to the app.
  - `store`: This folder contains all redux implementation.
  - `utils`: This folder contains all useful constants and functions.
  - `index.tsx`: Root componentes that initialize navigation flow.
- `App.tsx`: Main component that starts your whole app.
- `index.js`: Entry point of your application as per React-Native standards.
