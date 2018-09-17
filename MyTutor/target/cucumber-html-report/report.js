$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featureFiles/MyTutorTest.feature");
formatter.feature({
  "line": 2,
  "name": "I can signup to MyTutor website",
  "description": "       as a Parent\n       so that I can choose teacher\n       and able to sent message to the tutor",
  "id": "i-can-signup-to-mytutor-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@myTutorTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Verify user should see the error message when entering invalid details",
  "description": "",
  "id": "i-can-signup-to-mytutor-website;verify-user-should-see-the-error-message-when-entering-invalid-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User enter the \"\u003cfirst_Name\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enter \"\u003clast_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Enter the invalid \"\u003cemail_Address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Enter telephone number \"\u003cphoneNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Find Tutors",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the error messages",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "i-can-signup-to-mytutor-website;verify-user-should-see-the-error-message-when-entering-invalid-details;",
  "rows": [
    {
      "cells": [
        "first_Name",
        "last_Name",
        "email_Address",
        "password",
        "phoneNumber"
      ],
      "line": 21,
      "id": "i-can-signup-to-mytutor-website;verify-user-should-see-the-error-message-when-entering-invalid-details;;1"
    },
    {
      "cells": [
        "",
        "",
        "",
        "",
        ""
      ],
      "line": 22,
      "id": "i-can-signup-to-mytutor-website;verify-user-should-see-the-error-message-when-entering-invalid-details;;2"
    },
    {
      "cells": [
        "Swati",
        "Dewangan",
        "swati.dewangan",
        "Test",
        "09898"
      ],
      "line": 23,
      "id": "i-can-signup-to-mytutor-website;verify-user-should-see-the-error-message-when-entering-invalid-details;;3"
    },
    {
      "cells": [
        "Swati",
        "Dewangan",
        "swati.dew\u003eanga+n@gmail.com",
        "Tester",
        "0989809823"
      ],
      "line": 24,
      "id": "i-can-signup-to-mytutor-website;verify-user-should-see-the-error-message-when-entering-invalid-details;;4"
    },
    {
      "cells": [
        "Swati",
        "Dewangan",
        "swati.dewangan@gmail.com",
        "Test123",
        "098980982335455677567"
      ],
      "line": 25,
      "id": "i-can-signup-to-mytutor-website;verify-user-should-see-the-error-message-when-entering-invalid-details;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1347228883,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User should able to see My Tutor sign up page and verify links and text",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "Home page is opened in a browser",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Verify header title and sign up column",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTutorSignUpStepDefs.home_page_is_opened_in_a_browser()"
});
formatter.result({
  "duration": 3253250020,
  "status": "passed"
});
formatter.match({
  "location": "MyTutorSignUpStepDefs.verify_header_title_and_sign_up_column()"
});
formatter.result({
  "duration": 70055967,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify user should see the error message when entering invalid details",
  "description": "",
  "id": "i-can-signup-to-mytutor-website;verify-user-should-see-the-error-message-when-entering-invalid-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@myTutorTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User enter the \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enter \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Enter the invalid \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enter password \"\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Enter telephone number \"\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Find Tutors",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the error messages",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 16
    }
  ],
  "location": "MyTutorSignUpStepDefs.user_enter_the(String)"
});
formatter.result({
  "duration": 129792040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    }
  ],
  "location": "MyTutorSignUpStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 202934241,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    }
  ],
  "location": "MyTutorSignUpStepDefs.enter_the_invalid(String)"
});
formatter.result({
  "duration": 145828103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 16
    }
  ],
  "location": "MyTutorSignUpStepDefs.enter_password(String)"
});
formatter.result({
  "duration": 173921248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "MyTutorSignUpStepDefs.enter_telephone_number(String)"
});
formatter.result({
  "duration": 125931174,
  "status": "passed"
});
formatter.match({
  "location": "MyTutorSignUpStepDefs.click_on_Find_Tutors()"
});
formatter.result({
  "duration": 5105270944,
  "status": "passed"
});
formatter.match({
  "location": "MyTutorSignUpStepDefs.verify_the_error_messages()"
});
formatter.result({
  "duration": 167802899,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: An invalid or illegal selector was specified\n  (Session info: chrome\u003d69.0.3497.92)\n  (Driver info: chromedriver\u003d2.36.540469 (1881fd7f8641508feb5166b7cae561d87723cfa8),platform\u003dMac OS X 10.13.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027YASHPALs-MBP\u0027, ip: \u0027fe80:0:0:0:18e1:c31d:ddc4:88a7%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dMAC, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dMAC, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540469 (1881fd7f8641508feb5166b7cae561d87723cfa8), userDataDir\u003d/var/folders/hb/h8t44fzn76z4d9s65ttskgt00000gn/T/.org.chromium.Chromium.jYVb42}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.92, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 60147489117574e4fb4ef718d810e70c\n*** Element info: {Using\u003dcss selector, value\u003d#parentsignupform:messagecontainer.error.errors}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:510)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\n\tat com.MyTutor.Pages.MyTutorPage.verifyErrorMessage(MyTutorPage.java:139)\n\tat com.MyTutor.StepDefs.MyTutorSignUpStepDefs.verify_the_error_messages(MyTutorSignUpStepDefs.java:59)\n\tat ✽.Then Verify the error messages(src/test/java/resources/featureFiles/MyTutorTest.feature:19)\n",
  "status": "failed"
});
formatter.after({
  "duration": 89290053,
  "status": "passed"
});
formatter.before({
  "duration": 698915470,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User should able to see My Tutor sign up page and verify links and text",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "Home page is opened in a browser",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Verify header title and sign up column",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTutorSignUpStepDefs.home_page_is_opened_in_a_browser()"
});
formatter.result({
  "duration": 4725945080,
  "status": "passed"
});
formatter.match({
  "location": "MyTutorSignUpStepDefs.verify_header_title_and_sign_up_column()"
});
formatter.result({
  "duration": 61570087,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify user should see the error message when entering invalid details",
  "description": "",
  "id": "i-can-signup-to-mytutor-website;verify-user-should-see-the-error-message-when-entering-invalid-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@myTutorTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User enter the \"Swati\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enter \"Dewangan\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Enter the invalid \"swati.dewangan\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enter password \"Test\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Enter telephone number \"09898\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Find Tutors",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the error messages",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Swati",
      "offset": 16
    }
  ],
  "location": "MyTutorSignUpStepDefs.user_enter_the(String)"
});
formatter.result({
  "duration": 175063584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dewangan",
      "offset": 12
    }
  ],
  "location": "MyTutorSignUpStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 152470656,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "swati.dewangan",
      "offset": 19
    }
  ],
  "location": "MyTutorSignUpStepDefs.enter_the_invalid(String)"
});
formatter.result({
  "duration": 172862067,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 16
    }
  ],
  "location": "MyTutorSignUpStepDefs.enter_password(String)"
});
formatter.result({
  "duration": 200233015,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "09898",
      "offset": 24
    }
  ],
  "location": "MyTutorSignUpStepDefs.enter_telephone_number(String)"
});
formatter.result({
  "duration": 181235629,
  "status": "passed"
});
formatter.match({
  "location": "MyTutorSignUpStepDefs.click_on_Find_Tutors()"
});
formatter.result({
  "duration": 109115656,
  "status": "passed"
});
formatter.match({
  "location": "MyTutorSignUpStepDefs.verify_the_error_messages()"
});
formatter.result({
  "duration": 147606810,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: An invalid or illegal selector was specified\n  (Session info: chrome\u003d69.0.3497.92)\n  (Driver info: chromedriver\u003d2.36.540469 (1881fd7f8641508feb5166b7cae561d87723cfa8),platform\u003dMac OS X 10.13.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027YASHPALs-MBP\u0027, ip: \u0027fe80:0:0:0:18e1:c31d:ddc4:88a7%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dMAC, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dMAC, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540469 (1881fd7f8641508feb5166b7cae561d87723cfa8), userDataDir\u003d/var/folders/hb/h8t44fzn76z4d9s65ttskgt00000gn/T/.org.chromium.Chromium.HJtf7r}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.92, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 9772401dce1cb7464c5da4376b866181\n*** Element info: {Using\u003dcss selector, value\u003d#parentsignupform:messagecontainer.error.errors}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:510)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\n\tat com.MyTutor.Pages.MyTutorPage.verifyErrorMessage(MyTutorPage.java:139)\n\tat com.MyTutor.StepDefs.MyTutorSignUpStepDefs.verify_the_error_messages(MyTutorSignUpStepDefs.java:59)\n\tat ✽.Then Verify the error messages(src/test/java/resources/featureFiles/MyTutorTest.feature:19)\n",
  "status": "failed"
});
formatter.after({
  "duration": 84731364,
  "status": "passed"
});
formatter.before({
  "duration": 711638809,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User should able to see My Tutor sign up page and verify links and text",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "Home page is opened in a browser",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Verify header title and sign up column",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTutorSignUpStepDefs.home_page_is_opened_in_a_browser()"
});
formatter.result({
  "duration": 5347717389,
  "status": "passed"
});
formatter.match({
  "location": "MyTutorSignUpStepDefs.verify_header_title_and_sign_up_column()"
});
formatter.result({
  "duration": 84820977,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify user should see the error message when entering invalid details",
  "description": "",
  "id": "i-can-signup-to-mytutor-website;verify-user-should-see-the-error-message-when-entering-invalid-details;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@myTutorTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User enter the \"Swati\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enter \"Dewangan\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Enter the invalid \"swati.dew\u003eanga+n@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enter password \"Tester\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Enter telephone number \"0989809823\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Find Tutors",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the error messages",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Swati",
      "offset": 16
    }
  ],
  "location": "MyTutorSignUpStepDefs.user_enter_the(String)"
});
formatter.result({
  "duration": 192542322,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dewangan",
      "offset": 12
    }
  ],
  "location": "MyTutorSignUpStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 152215886,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "swati.dew\u003eanga+n@gmail.com",
      "offset": 19
    }
  ],
  "location": "MyTutorSignUpStepDefs.enter_the_invalid(String)"
});
formatter.result({
  "duration": 200127602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 16
    }
  ],
  "location": "MyTutorSignUpStepDefs.enter_password(String)"
});
formatter.result({
  "duration": 163027968,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0989809823",
      "offset": 24
    }
  ],
  "location": "MyTutorSignUpStepDefs.enter_telephone_number(String)"
});
formatter.result({
  "duration": 197031064,
  "status": "passed"
});
formatter.match({
  "location": "MyTutorSignUpStepDefs.click_on_Find_Tutors()"
});
formatter.result({
  "duration": 118446937,
  "status": "passed"
});
formatter.match({
  "location": "MyTutorSignUpStepDefs.verify_the_error_messages()"
});
formatter.result({
  "duration": 143968431,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: An invalid or illegal selector was specified\n  (Session info: chrome\u003d69.0.3497.92)\n  (Driver info: chromedriver\u003d2.36.540469 (1881fd7f8641508feb5166b7cae561d87723cfa8),platform\u003dMac OS X 10.13.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027YASHPALs-MBP\u0027, ip: \u0027fe80:0:0:0:18e1:c31d:ddc4:88a7%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dMAC, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dMAC, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540469 (1881fd7f8641508feb5166b7cae561d87723cfa8), userDataDir\u003d/var/folders/hb/h8t44fzn76z4d9s65ttskgt00000gn/T/.org.chromium.Chromium.D9pMPZ}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.92, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 1081de7febedf57ab7ced02f749c7162\n*** Element info: {Using\u003dcss selector, value\u003d#parentsignupform:messagecontainer.error.errors}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:510)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\n\tat com.MyTutor.Pages.MyTutorPage.verifyErrorMessage(MyTutorPage.java:139)\n\tat com.MyTutor.StepDefs.MyTutorSignUpStepDefs.verify_the_error_messages(MyTutorSignUpStepDefs.java:59)\n\tat ✽.Then Verify the error messages(src/test/java/resources/featureFiles/MyTutorTest.feature:19)\n",
  "status": "failed"
});
formatter.after({
  "duration": 90959712,
  "status": "passed"
});
formatter.before({
  "duration": 833829312,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User should able to see My Tutor sign up page and verify links and text",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "Home page is opened in a browser",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Verify header title and sign up column",
  "keyword": "Then "
});
formatter.match({
  "location": "MyTutorSignUpStepDefs.home_page_is_opened_in_a_browser()"
});
formatter.result({
  "duration": 4875501453,
  "status": "passed"
});
formatter.match({
  "location": "MyTutorSignUpStepDefs.verify_header_title_and_sign_up_column()"
});
formatter.result({
  "duration": 58654095,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify user should see the error message when entering invalid details",
  "description": "",
  "id": "i-can-signup-to-mytutor-website;verify-user-should-see-the-error-message-when-entering-invalid-details;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@myTutorTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User enter the \"Swati\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enter \"Dewangan\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Enter the invalid \"swati.dewangan@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enter password \"Test123\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Enter telephone number \"098980982335455677567\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Find Tutors",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the error messages",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Swati",
      "offset": 16
    }
  ],
  "location": "MyTutorSignUpStepDefs.user_enter_the(String)"
});
formatter.result({
  "duration": 168705519,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dewangan",
      "offset": 12
    }
  ],
  "location": "MyTutorSignUpStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 150200423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "swati.dewangan@gmail.com",
      "offset": 19
    }
  ],
  "location": "MyTutorSignUpStepDefs.enter_the_invalid(String)"
});
formatter.result({
  "duration": 187611250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test123",
      "offset": 16
    }
  ],
  "location": "MyTutorSignUpStepDefs.enter_password(String)"
});
formatter.result({
  "duration": 150205096,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "098980982335455677567",
      "offset": 24
    }
  ],
  "location": "MyTutorSignUpStepDefs.enter_telephone_number(String)"
});
formatter.result({
  "duration": 181467589,
  "status": "passed"
});
formatter.match({
  "location": "MyTutorSignUpStepDefs.click_on_Find_Tutors()"
});
formatter.result({
  "duration": 116334799,
  "status": "passed"
});
formatter.match({
  "location": "MyTutorSignUpStepDefs.verify_the_error_messages()"
});
formatter.result({
  "duration": 169164240,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: An invalid or illegal selector was specified\n  (Session info: chrome\u003d69.0.3497.92)\n  (Driver info: chromedriver\u003d2.36.540469 (1881fd7f8641508feb5166b7cae561d87723cfa8),platform\u003dMac OS X 10.13.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027YASHPALs-MBP\u0027, ip: \u0027fe80:0:0:0:18e1:c31d:ddc4:88a7%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dMAC, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dMAC, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540469 (1881fd7f8641508feb5166b7cae561d87723cfa8), userDataDir\u003d/var/folders/hb/h8t44fzn76z4d9s65ttskgt00000gn/T/.org.chromium.Chromium.LVI30c}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d69.0.3497.92, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: f7ff6c6fd5e498a3d84984dfbbd215b9\n*** Element info: {Using\u003dcss selector, value\u003d#parentsignupform:messagecontainer.error.errors}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:510)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\n\tat com.MyTutor.Pages.MyTutorPage.verifyErrorMessage(MyTutorPage.java:139)\n\tat com.MyTutor.StepDefs.MyTutorSignUpStepDefs.verify_the_error_messages(MyTutorSignUpStepDefs.java:59)\n\tat ✽.Then Verify the error messages(src/test/java/resources/featureFiles/MyTutorTest.feature:19)\n",
  "status": "failed"
});
formatter.after({
  "duration": 83468068,
  "status": "passed"
});
});