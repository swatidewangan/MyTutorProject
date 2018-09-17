package com.MyTutor.StepDefs;

import org.openqa.selenium.WebDriver;

import com.MyTutor.Pages.MyTutorPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyTutorSignUpStepDefs {
	
	//public  WebDriver driver;
	MyTutorPage myTutor = new MyTutorPage();
	
	@Given("^Home page is opened in a browser$")
	public void home_page_is_opened_in_a_browser() throws Throwable {
	   myTutor.verifyHomePage();
	}

	@Then("^Verify header title and sign up column$")
	public void verify_header_title_and_sign_up_column() throws Throwable {
	    myTutor.verifyPageTitle();
	}

	@When("^User enter the \"([^\"]*)\"$")
	public void user_enter_the(String first_Name) throws Throwable {
	   myTutor.enterFirstName(first_Name);
	}
	
	@When("^User enter \"([^\"]*)\"$")
	public void user_enter(String last_Name) throws Throwable {
		myTutor.enterLastName(last_Name );
	}

	@When("^Enter the invalid \"([^\"]*)\"$")
	public void enter_the_invalid(String email_Address) throws Throwable {
		myTutor.enterEmail(email_Address );
	}

	@When("^Enter password \"([^\"]*)\"$")
	public void enter_password(String password) throws Throwable {
		myTutor.enterPassword(password  );
	}

	@When("^Enter telephone number \"([^\"]*)\"$")
	public void enter_telephone_number(String phoneNumber) throws Throwable {
		myTutor.enterPhoneNum(phoneNumber   );
	}


	@When("^Click on Find Tutors$")
	public void click_on_Find_Tutors() throws Throwable {
	   myTutor.clickFindTutorButton();
	}

	@Then("^Verify the error messages$")
	public void verify_the_error_messages() throws Throwable {
	   myTutor.verifyErrorMessage();
	}



}
