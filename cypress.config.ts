import admin from "firebase-admin";
import { defineConfig } from "cypress";
import { plugin as cypressFirebasePlugin } from "cypress-firebase";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:8000",
    specPattern: "cypress/e2e",
    supportFile: "cypress/support/commands.ts",
    setupNodeEvents(on, config) {
      cypressFirebasePlugin(on, config, admin);
      // e2e testing node events setup code
    },
  },
});
