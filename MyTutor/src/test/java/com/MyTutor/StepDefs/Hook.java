package com.MyTutor.StepDefs;

import com.MyTutor.Utilities.BasePage;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hook extends BasePage{
	
	@Before
	public void beforeScenario(){
		
	//	BasePage.initWebDriver("chrome");
		
		initWebDriver("chrome");
		System.out.println("Opening the browser  *******");
	}

	@After
	public void afterScenario(){
		
		System.out.println("Closing the browser  *******");
		driver.quit();
		
	}
}
