// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";
import { attachCustomCommands } from "cypress-firebase";
import { firebaseConfig } from "../../src/services/firebase/configFirebase";
import { FirestoreSettings } from "firebase/firestore";

const shouldUseEmulator = window.location.hostname === "localhost"; // or other logic to determine when to use
// Emulate RTDB
if (shouldUseEmulator) {
  firebaseConfig.databaseURL = `http://localhost:9000?ns=${firebaseConfig.projectId}`;
  console;
  console.debug(`Using RTDB emulator: ${firebaseConfig.databaseURL}`);
}

// Initialize Firebase instance
firebase.initializeApp(firebaseConfig);

const firestoreSettings: FirestoreSettings = {};
// Pass long polling setting to Firestore when running in Cypress
if (window.Cypress) {
  // Needed for Firestore support in Cypress (see https://github.com/cypress-io/cypress/issues/6350)
  firestoreSettings.experimentalForceLongPolling = true;
}

// Emulate Firestore
if (shouldUseEmulator) {
  firestoreSettings.host = "localhost:8080";
  firestoreSettings.ssl = false;
  console.debug(`Using Firestore emulator: ${firestoreSettings.host}`);

  firebase.firestore().settings(firestoreSettings);
}

// Emulate Auth
if (shouldUseEmulator) {
  firebase.auth().useEmulator(`http://localhost:9099/`);
  console.debug(`Using Auth emulator: http://localhost:9099/`);
}

attachCustomCommands({ Cypress, cy, firebase });
