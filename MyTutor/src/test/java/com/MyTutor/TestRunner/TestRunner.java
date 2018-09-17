package com.MyTutor.TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/resources/featureFiles/MyTutorTest.feature",
		glue = {"com/MyTutor/StepDefs"},
		plugin= {"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html",
				"html:target/cucumber-html-report","json:target/cucumber.json"},
		tags={"@myTutorTest"},
		monochrome =true
		)


public class TestRunner {
//"@myTutorTest"	,
}
