package com.MyTutor.Utilities;

import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;

import com.aventstack.extentreports.configuration.Config;

public class ConfigDataProvider {
	
	public static Properties properties;
	public static Config con;
	
	public ConfigDataProvider()
	{
	File src = new File("MyTutor/src/test/java/com/MyTutor/Utilities/configuration.properties");
	
	try 
	{
		FileInputStream fis = new FileInputStream(src);
		
		properties = new Properties();
		
		properties.load(fis);
	} 
	catch (Exception e) 
	{
		System.out.println("Exception is " + e.getMessage());
	}
	
	}

	public String getChromePath()
	{
		String baseUrl = properties.getProperty("chromePath");
		return baseUrl;
	}
	
	public String getFirefoxPath()
	{
		String firefoxExe = properties.getProperty("firefoxPath");
		return firefoxExe;
	}


	public String getIEPath()
	{
		String baseUrl = properties.getProperty("iePath");
		return baseUrl;
	}

}
