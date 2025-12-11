// Entry point for Expo app
// This file loads the compiled ClojureScript bundle and initializes the app

// Import the compiled ClojureScript bundle
// shadow-cljs outputs to expo-build/index.js for react-native target
// The exact filename may vary - check expo-build/ directory after building
import './expo-build/index.js';

// Note: With shadow-cljs :init-fn configuration, main.init is automatically called
// when the module loads. If you need to call it manually, access it via global scope:
// const mainInit = global.main?.init;
// if (mainInit) {
//   mainInit();
// }

