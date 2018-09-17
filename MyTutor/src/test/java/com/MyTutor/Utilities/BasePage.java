package com.MyTutor.Utilities;

import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class BasePage {
	
	public  static WebDriver driver;
	
	
	static ConfigDataProvider config = new ConfigDataProvider();
	
	
	public  WebDriver initWebDriver(String browserName){
		
		if(browserName.equalsIgnoreCase("chrome"))
		{
			System.out.println("launching CHROME browser");
			System.setProperty("webdriver.chrome.driver","//Users//yashpaldewangan//Downloads//chromedriver");
			driver = new ChromeDriver();

		}
		else if(browserName.equalsIgnoreCase("firefox"))
		{
			System.out.println("launching FIREFOX browser");
			System.setProperty("webdriver.gecko.driver",config.getFirefoxPath());
			driver = new FirefoxDriver();
			//driver.get(config.getApplicationUrl());
		}
		else if(browserName.equalsIgnoreCase("IE"))
		{
			System.out.println("launching IE browser");
			System.setProperty("webdriver.ie.driver", config.getIEPath());
		    driver = new InternetExplorerDriver();

		}
		
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(20,TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		return driver;
		
	}
	
	public  void getApplicationURL(){
		
		String baseURL = "https://www.mytutor.co.uk/parents/signup.html";
		driver.get(baseURL);
		
	}
	
	public static void verifyDisplayedMessage(String string, String message){
	      try{
	          assertEquals(message,string);
	      }catch (Exception e){
	          System.out.println("Cannot find the Message");
	      }
	      }
	    


}
