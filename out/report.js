$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ChangeUserInfo.feature");
formatter.feature({
  "line": 1,
  "name": "Change user information after login",
  "description": "",
  "id": "change-user-information-after-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Change user birthday date, gender and sign up for a newsletter",
  "description": "",
  "id": "change-user-information-after-login;change-user-birthday-date,-gender-and-sign-up-for-a-newsletter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is logged in to CodersLab shop",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User goes to UserInformationPage",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User signs up for our newsletter",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User saves information",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User sees \"Information successfully updated.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "UserInfoSteps.userIsLooggedInToCodersLabShop()"
});
formatter.result({
  "duration": 18628314766,
  "status": "passed"
});
formatter.match({
  "location": "UserInfoSteps.userGoesToInformationPage()"
});
formatter.result({
  "duration": 1859411797,
  "status": "passed"
});
formatter.match({
  "location": "UserInfoSteps.userSignsUpForOurNewsletter()"
});
formatter.result({
  "duration": 126354581,
  "status": "passed"
});
formatter.match({
  "location": "UserInfoSteps.userSavesInformation()"
});
formatter.result({
  "duration": 2012373355,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Information successfully updated.",
      "offset": 11
    }
  ],
  "location": "UserInfoSteps.userSees(String)"
});
formatter.result({
  "duration": 170042120,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Add new address",
  "description": "",
  "id": "change-user-information-after-login;add-new-address",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Log in to CodersLab shop",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User goes to AddressPage",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User set following address \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User set following city \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User set following post code \"\u003cpostCode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User submits add new address form",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Address was submitted correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "close driver",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "change-user-information-after-login;add-new-address;",
  "rows": [
    {
      "cells": [
        "address",
        "city",
        "postCode"
      ],
      "line": 23,
      "id": "change-user-information-after-login;add-new-address;;1"
    },
    {
      "cells": [
        "Polska",
        "Warszawa",
        "00-000"
      ],
      "line": 24,
      "id": "change-user-information-after-login;add-new-address;;2"
    },
    {
      "cells": [
        "Niemcy",
        "Berlin",
        "00-001"
      ],
      "line": 25,
      "id": "change-user-information-after-login;add-new-address;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Add new address",
  "description": "",
  "id": "change-user-information-after-login;add-new-address;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Log in to CodersLab shop",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User goes to AddressPage",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User set following address \"Polska\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User set following city \"Warszawa\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User set following post code \"00-000\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User submits add new address form",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Address was submitted correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "close driver",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 25,
  "name": "Add new address",
  "description": "",
  "id": "change-user-information-after-login;add-new-address;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Log in to CodersLab shop",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User goes to AddressPage",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User set following address \"Niemcy\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User set following city \"Berlin\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User set following post code \"00-001\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User submits add new address form",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Address was submitted correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "close driver",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("Zadanie1.feature");
formatter.feature({
  "line": 1,
  "name": "Create new address after login",
  "description": "",
  "id": "create-new-address-after-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Create new address",
  "description": "",
  "id": "create-new-address-after-login;create-new-address",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Log in to CodersLab shop",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User goes to AddressPage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User set following alias \"\u003calias\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User set following address \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User set following city \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User set following post code \"\u003cpostCode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User set following country \"\u003ccountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User set following phone \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User submits add new address form",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Address was submitted correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "close driver",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "create-new-address-after-login;create-new-address;",
  "rows": [
    {
      "cells": [
        "alias",
        "address",
        "city",
        "postCode",
        "country",
        "phone"
      ],
      "line": 18,
      "id": "create-new-address-after-login;create-new-address;;1"
    },
    {
      "cells": [
        "anders",
        "Krokusgatan 17",
        "Malmö",
        "21232",
        "Sweden",
        "0705521456"
      ],
      "line": 19,
      "id": "create-new-address-after-login;create-new-address;;2"
    },
    {
      "cells": [
        "anders",
        "345 Kensington Rd",
        "Hull",
        "HU23NW2",
        "United Kingdom",
        "0704565512"
      ],
      "line": 20,
      "id": "create-new-address-after-login;create-new-address;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Create new address",
  "description": "",
  "id": "create-new-address-after-login;create-new-address;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Log in to CodersLab shop",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User goes to AddressPage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User set following alias \"anders\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User set following address \"Krokusgatan 17\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User set following city \"Malmö\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User set following post code \"21232\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User set following country \"Sweden\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User set following phone \"0705521456\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User submits add new address form",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Address was submitted correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "close driver",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 20,
  "name": "Create new address",
  "description": "",
  "id": "create-new-address-after-login;create-new-address;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Log in to CodersLab shop",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User goes to AddressPage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User set following alias \"anders\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User set following address \"345 Kensington Rd\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User set following city \"Hull\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User set following post code \"HU23NW2\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User set following country \"United Kingdom\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User set following phone \"0704565512\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User submits add new address form",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Address was submitted correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "close driver",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("googleSearchText.feature");
formatter.feature({
  "line": 1,
  "name": "Google search",
  "description": "",
  "id": "google-search",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "user can search any keyword",
  "description": "",
  "id": "google-search;user-can-search-any-keyword",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "an open browser with google.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "a keyword selenium is entered in input field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the first one should contain selenium",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "GoogleSearchSteps.openGoogleSearch()"
});
formatter.result({
  "duration": 11838394450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selenium",
      "offset": 10
    }
  ],
  "location": "GoogleSearchSteps.enterKeyword(String)"
});
formatter.result({
  "duration": 453017520,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selenium",
      "offset": 29
    }
  ],
  "location": "GoogleSearchSteps.theFirstOneShouldContainKeyword(String)"
});
formatter.result({
  "duration": 221780029,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //h3\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027krystian-VirtualBox\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.4.0-42-generic\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 78.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200708170202, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 31482, moz:profile: /tmp/rust_mozprofilei8zcxy, moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, platformVersion: 5.4.0-42-generic, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: fc137c4e-1099-42d3-826d-569321976337\n*** Element info: {Using\u003dxpath, value\u003d//h3}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat steps.GoogleSearchSteps.theFirstOneShouldContainKeyword(GoogleSearchSteps.java:40)\n\tat ✽.Then the first one should contain selenium(googleSearchText.feature:7)\n",
  "status": "failed"
});
formatter.match({
  "location": "GoogleSearchSteps.closeBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "user can search any keyword",
  "description": "",
  "id": "google-search;user-can-search-any-keyword",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "an open browser with google.com",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "a keyword \u003csearchString\u003e is entered in input field",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the first one should contain \u003csearchString\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "google-search;user-can-search-any-keyword;",
  "rows": [
    {
      "cells": [
        "selenium"
      ],
      "line": 18,
      "id": "google-search;user-can-search-any-keyword;;1"
    },
    {
      "cells": [
        "cucumbers"
      ],
      "line": 19,
      "id": "google-search;user-can-search-any-keyword;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "user can search any keyword",
  "description": "",
  "id": "google-search;user-can-search-any-keyword;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "an open browser with google.com",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "a keyword \u003csearchString\u003e is entered in input field",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the first one should contain \u003csearchString\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "GoogleSearchSteps.openGoogleSearch()"
});
formatter.result({
  "duration": 14539293859,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003csearchString\u003e",
      "offset": 10
    }
  ],
  "location": "GoogleSearchSteps.enterKeyword(String)"
});
formatter.result({
  "duration": 654110109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003csearchString\u003e",
      "offset": 29
    }
  ],
  "location": "GoogleSearchSteps.theFirstOneShouldContainKeyword(String)"
});
formatter.result({
  "duration": 82901346,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //h3\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027krystian-VirtualBox\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.4.0-42-generic\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 78.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200708170202, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 31661, moz:profile: /tmp/rust_mozprofiletVdm4D, moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, platformVersion: 5.4.0-42-generic, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 57d63956-eb91-4fc3-9904-63d674929123\n*** Element info: {Using\u003dxpath, value\u003d//h3}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat steps.GoogleSearchSteps.theFirstOneShouldContainKeyword(GoogleSearchSteps.java:40)\n\tat ✽.Then the first one should contain \u003csearchString\u003e(googleSearchText.feature:14)\n",
  "status": "failed"
});
formatter.match({
  "location": "GoogleSearchSteps.closeBrowser()"
});
formatter.result({
  "status": "skipped"
});
});