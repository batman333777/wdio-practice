import path from 'path';
// import chromedriver from 'chromedriver'
import fs from 'fs';
import dotenv from 'dotenv';
import { execSync } from 'child_process';

export const config = {

  runner: "local",  // ✅ Keep "local" (tests run locally, sessions run on Sauce Labs)

  // =====================
  // Sauce Labs Credentials
  // =====================
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,

  // =====================
  // Sauce Labs Connection
  // =====================
  hostname: "ondemand.eu-central-1.saucelabs.com",
  port: 443,
  path: "/wd/hub",
  protocol: "https",

  //
  // ==================
  // Specify Test Files
  // ==================
  specs: [ path.join(process.cwd(), './test/specs/android/add-note.spec.js')],

  suites: {
    // chatSuite: ["../test/specs/android/chatSuite/*.e2e.js"],
    // socialSuite: ["../test/specs/android/socialSuite/*.e2e.js"],
    // userProfilesSuite: ["../test/specs/android/userProfilesSuite/*.e2e.js"]
  },

  exclude: [
    // 'path/to/excluded/files'
  ],
  //
  // ============
  // Capabilities
  // ============
  maxInstances: 1,

  // ==================
  // Sauce Labs Capabilities
  // ==================
  capabilities: [
    {
      "platformName": "Android",
      "appium:automationName": "UiAutomator2",
      "appium:protocol": "W3C",
      "appium:deviceName": "Android GoogleAPI Emulator",
     "appium:platformVersion": "12.0",
      "appium:ignoreHiddenApiPolicyError": "true",
      "appium:app": "storage:filename=ColorNote Notepad.apk",  
      "appium:fullReset": false,
      "appium:autoGrantPermissions": true,
      "sauce:options": {
        build: "Android Build #1",
        name: "E2E Android Tests on Sauce Labs",
      }, 
    },
  ],

  //
  // ===================
  // Test Configurations
  // ===================
  logLevel: "info",
  //
  bail: 0,
  //
  waitforTimeout: 60000,
  //
  connectionRetryTimeout: 200000,
  //
  connectionRetryCount: 1,
  //
  // Test runner services
  // ====================
  // services: ["appium", ['chromedriver', {
  //   chromedriverAutodownload: true // Enable automatic download
  // }]],

  services: ["sauce"],

  framework: "mocha",

  reporters: [],

  mochaOpts: {
    ui: "bdd",
    timeout: 150000,
  },

  onComplete: function () {},
};
