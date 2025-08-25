## Demo of the Current State

### Realms and Rules
https://github.com/user-attachments/assets/1e942f43-4f78-4436-a18d-ad003d03c75a

### Characters
https://github.com/user-attachments/assets/336bdcd4-5788-4e2c-bbcd-0dde8b640e31

### Resources and Rolls
https://github.com/user-attachments/assets/7c1c46eb-56ec-46f3-8b7c-e7506b2754bb

## Previous Iterations

Previous iterations of the project can be found in these repos:
- https://github.com/JaceRockman/jace-and-jace-prototype
- https://github.com/JaceRockman/modular-roleplaying-framework-beta

## Next Objectives

- Fix icons so they work for web as well as mobile
- Finish making campaigns fully editable
- Improve expand/collapse animations and menu placement for better UX
- Implement character complexity modification

## Installing

To facilitate that you can easily try this out without installing anything globally on your machine, this project installs everything it needs locally in `node_modules`. Then `npx` is used to execute tools like `expo-cli`.

To install dependencies, and setup the project, run:

1. `npm i`

From there use your favorite editor and/or the prompt.
## Using Emacs with CIDER

Open Emacs and a bash shell:

1. Run `npx shadow-cljs compile :app` to perform an initial build of the app.
1. In Emacs open one of the files in the project (`deps.edn` is fine)
1. From that buffer, do `cider-jack-in-clojurescript` [C-c M-J] to
   launch a REPL. Follow the series of interactive prompts in the
   minibuffer:
   1. select `shadow-cljs` as the command to launch
   1. select `shadow` as the repl type
   1. select `:app` as the build to connect
   1. and optionally answer `y` or `n` to the final question about
      opening the `shadow-cljs` UI in a browser.
   At this point `shadow-cljs` will be watching the project folder and
   running new builds of the app if any files are changed. You'll also
   have a REPL prompt, *however the REPL doesn't work because it isn't
   connected to anything. The app isn't running yet.*
1. In a shell run `npm run ios` (same as `npx expo start -i`). This starts
   the Metro bundler, perform the bundling, launch the iPhone
   simulator, and transmit the bundled app. Be patient at this step as
   it can take many seconds to complete. When the app is finally
   running expo will display the message:

       WebSocket connected!
       REPL init successful
1. Once you see that the REPL is initalized, you can return to Emacs
   and confirm the REPL is connected and functional:
   ``` clojure
   cljs.user> (js/alert "hello world!")
   ```
   Which should pop-up a modal alert in the simulator, confirming the
   app is running and the REPL is connected end to end.

## Or the Command line
```sh
$ npm i
$ npx shadow-cljs watch app
# wait for first compile to finish or expo gets confused
# on another terminal tab/window:
$ npm start
```
This will run Expo DevTools at http://localhost:19002/

To run the app in browser using expo-web (react-native-web), press `w` in the same terminal after expo devtools is started.
This should open the app automatically on your browser after the web version is built. If it does not open automatically, open http://localhost:19006/ manually on your browser.

## Production builds

A production build involves first asking shadow-cljs to build a release, then to ask Expo to work in Production Mode.

1. Kill the watch and expo tasks.
1. Execute `shadow-cljs release app`
1. Start the expo task (as per above)
   1. Enable Production mode.
   1. Start the app.

### Using EAS Build

`expo build` is the classic way of building an Expo app, and `eas build` is the new version of `expo build`. Using EAS Build currently requires an Expo account with a paid plan subscription.

The steps below provide an example of using EAS Build to build an apk file to run on an Android emulator or device.

0. Install the latest EAS CLI by running `npm install -g eas-cli`
0. Log into your Expo account
0. Configure EAS Build in your project with `eas build:configure`.
0. Make your eas.json file contents look like this:
    ```json
    {
      "build": {
        "production": {},
        "development": {
          "distribution": "internal",
          "android": {
            "buildType": "apk"
          },
          "ios": {
            "simulator": true
          }
        }
      }
    }
    ```
0. Commit your changes, run `eas build --profile development`, and follow the prompts.
0. Navigate to the URL given by the command to monitor the build. When it completes, download the apk and install it on your device or emulator.

See [the EAS Build docs](https://docs.expo.dev/build/introduction/) for more information.

If you want to use EAS Build with a project not based on this template, see [this PR](https://github.com/PEZ/rn-rf-shadow/pull/24) for information about how your project can be set up to avoid an error during the build process.

Note: The `eas-build-pre-install.sh` script makes EAS install Java in the MacOS environment when running a build for iOS. This ensures that shadow-cljs can be run in the EAS pipeline to build your ClojureScript code.
