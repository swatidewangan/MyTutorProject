package com.MyTutor.Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import com.MyTutor.Utilities.BasePage;

public class MyTutorPage extends BasePage{
	
	String firstNameReqMessage = "First name is required.";
	String lastNameReqMessage  = "Last name is required.";
	String emailReqMessage = "Email is not well-formed.";
	String passwordReqMessage1 = "Your password must contain at least one number.";
	String passwordReqMessage2 = "Your password must be at least 6 characters long.";
	String passwordReqMessage3 = "Password is required.";
	String telePhoneReqMessage = "Phone number is not valid.";
	
	By signUpPageHeader = By.cssSelector("#allcontent > div > div.banner.darkskybluefill.uni.v2signup__bg > div > a > img");
	By firstName = By.id("parentsignupform:firstname:input");
	By lastName = By.id("parentsignupform:lastname:input");
	By emailAddress = By.id("parentsignupform:email:input");
	By passWord = By.id("parentsignupform:passwordinput");
	By telePhoneNum = By.id("parentsignupform:phone:input");
	By findTutor = By.id("parentsignupform:signup");
	By firstNameErrorMessage = By.id("parentsignupform:firstname:message");
	By lastNameErrorMessage = By.id("parentsignupform:lastname:message");
	By emailErrorMessage = By.id("parentsignupform:email:message");
	By passwordErrorMessage1 = By.id("parentsignupform:messagecontainer");
	By passwordErrorMessage2 = By.cssSelector("#parentsignupform:messagecontainer.error.errors");
	By passwordErrorMessage3 = By.cssSelector("#parentsignupform\3a messagecontainer");
	By telePhoneErrorMessage = By.cssSelector("#parentsignupform\3a phone\3a message");
	By firstNameHeader = By.id("parentsignupform:firstname:label");
	By lastNameHeader = By.id("parentsignupform:lastname:label");
	By emailHeader = By.id("parentsignupform:email:label");
	By passwordHeader = By.id("parentsignupform:label");
	By phoneNumHeader = By.id("parentsignupform:phone:label");
	By signUpHeader = By.cssSelector("#parentsignupform > h1");
	
	public void verifyHomePage() {
		
		//getting browser and url
		initWebDriver("chrome");
		getApplicationURL();
		
	}

	
	public void verifyPageTitle() {
		
		//verify my tutor logo and my tutor title
     Boolean headerText = driver.findElement(By.cssSelector("#allcontent > div > div.banner.darkskybluefill.uni.v2signup__bg > div > a > img")).isDisplayed();
	System.out.println("Signup page header logo is displayed " + headerText);
	
	String signUpTitle = driver.findElement(signUpHeader).getText();
	String expectedSignUpTitle = "Parent sign up";
    verifyDisplayedMessage(signUpTitle,expectedSignUpTitle);
	}

	public void enterFirstName(String first_Name) throws InterruptedException {
        
		//verify firstname title, box are displayed, and enter firstname
		
		String firstNameTitle = driver.findElement(firstNameHeader).getText();
	    verifyDisplayedMessage(firstNameTitle,"First name");
		Boolean firstNameBox = driver.findElement(firstName).isDisplayed();
		System.out.println("First name box is displayed " + firstNameBox );
		driver.findElement(firstName).clear();
	    driver.findElement(firstName).sendKeys(first_Name);
		
	}

	public void enterLastName(String last_Name ) {
		
		//verify lastname title, box are displayed, and enter lastname
		
		String lastNameTitle = driver.findElement(lastNameHeader).getText();
	    verifyDisplayedMessage(lastNameTitle,"Last name");
		Boolean lastNameBox = driver.findElement(lastName).isDisplayed();
		System.out.println("Last name box is displayed " + lastNameBox );
		driver.findElement(lastName).clear();
		driver.findElement(lastName).sendKeys(last_Name );
	}

	public void enterEmail(String email_Address) {
		
		//verify email title, box are displayed, and enter email
		
		String emailTitle = driver.findElement(emailHeader).getText();
	    verifyDisplayedMessage(emailTitle,"Email address");
		Boolean emailAddressBox = driver.findElement(emailAddress).isDisplayed();
		System.out.println("Email address box is displayed " + emailAddressBox );
		driver.findElement(emailAddress).clear();
		driver.findElement(emailAddress).sendKeys(email_Address );
		
	}

	public void enterPassword(String password) {
		
		//verify password title, box are displayed, and enter password
		
		String passwordTitle = driver.findElement(passwordHeader).getText();
	    verifyDisplayedMessage(passwordTitle,"Create a password");
		Boolean passWordBox = driver.findElement(passWord).isDisplayed();
		System.out.println("Password box is displayed " + passWordBox );
		driver.findElement(passWord).clear();
		driver.findElement(passWord).sendKeys(password );
	}

	public void enterPhoneNum(String phoneNumber) {
		
		//verify phone number title, box are displayed, and enter phone number
		
		String phoneNumTitle = driver.findElement(phoneNumHeader).getText();
	    verifyDisplayedMessage(phoneNumTitle,"Phone number");
		Boolean telePhoneNumBox = driver.findElement(telePhoneNum).isDisplayed();
		System.out.println("Telephone number box is displayed " + telePhoneNumBox );
		driver.findElement(telePhoneNum).clear();
		driver.findElement(telePhoneNum).sendKeys(phoneNumber);
	}

	public void clickFindTutorButton() {
		
		//verify find tutor box is displayed, and click
		Boolean findTutorButton = driver.findElement(findTutor).isDisplayed();
		System.out.println("Find Tutor button is displayed " + findTutorButton );
		driver.findElement(findTutor).click();
	}

	public void verifyErrorMessage() throws InterruptedException {
		
		//verify different error message
		
		
		
		String actualfirstNameReqMessage = driver.findElement(firstNameErrorMessage).getText();
		String actuallastNameReqMessage = driver.findElement(lastNameErrorMessage).getText();
		String actualemailReqMessage = driver.findElement(emailErrorMessage).getText();
		String actualpasswordReqMessage1 = driver.findElement(passwordErrorMessage1).getText();
		String actualpasswordReqMessage2 = driver.findElement(passwordErrorMessage2).getText();
		String actualpasswordReqMessage3 = driver.findElement(passwordErrorMessage3).getText();
		String actualtelePhoneReqMessage = driver.findElement(telePhoneErrorMessage).getText();
		
		if(telePhoneReqMessage.equals(actualtelePhoneReqMessage)){
			
			Thread.sleep(3000);
			System.out.println(actualtelePhoneReqMessage);
			
		}else if(passwordReqMessage1.equals(actualpasswordReqMessage1)&&
				emailReqMessage.equals(actualemailReqMessage)){
			
			Thread.sleep(3000);
			System.out.println(actualemailReqMessage);
			System.out.println(actualpasswordReqMessage1);
			
		}else if(emailReqMessage.equals(actualemailReqMessage)&&
				passwordReqMessage2.equals(actualpasswordReqMessage2)&&
				telePhoneReqMessage.equals(actualtelePhoneReqMessage)){
			
			Thread.sleep(3000);
			System.out.println(actualemailReqMessage);
			System.out.println(actualpasswordReqMessage2);
			System.out.println(actualtelePhoneReqMessage);
			
		}else if(firstNameReqMessage.equals(actualfirstNameReqMessage)&&
				lastNameReqMessage.equals(actuallastNameReqMessage)&&
				emailReqMessage.equals(actualemailReqMessage)&&
				passwordReqMessage3.equals(actualpasswordReqMessage3)&&
				telePhoneReqMessage.equals(actualtelePhoneReqMessage)){
			
			Thread.sleep(3000);
			System.out.println(actualfirstNameReqMessage);
			System.out.println(actuallastNameReqMessage);
			System.out.println(actualemailReqMessage);
			System.out.println(actualpasswordReqMessage2);
			System.out.println(actualtelePhoneReqMessage);
		}
	}

}
