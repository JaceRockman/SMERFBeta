// Entry point for Expo app
// This file loads the compiled ClojureScript bundle and initializes the app

// Import the compiled ClojureScript bundle
// shadow-cljs outputs to expo-build/index.js for react-native target
// The exact filename may vary - check expo-build/ directory after building
import * as main from './expo-build/index.js';

// Call the exported init function from main.cljs
// This initializes the database and renders the root component
if (main.init) {
  main.init();
} else {
  // Fallback: if init isn't exported, the module import should trigger initialization
  console.warn('main.init not found - ensure main.cljs exports init function with ^:export');
}

