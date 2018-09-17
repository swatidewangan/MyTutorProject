@myTutorTest
Feature: I can signup to MyTutor website
         as a Parent
         so that I can choose teacher
         and able to sent message to the tutor

  Background: User should able to see My Tutor sign up page and verify links and text
    Given Home page is opened in a browser
    Then Verify header title and sign up column

        
  Scenario Outline: Verify user should see the error message when entering invalid details
    When User enter the "<first_Name>"
    And User enter "<last_Name>"
    And Enter the invalid "<email_Address>"
    And Enter password "<password>"
    And Enter telephone number "<phoneNumber>"
    And Click on Find Tutors
    Then Verify the error messages
Examples:
  | first_Name    |   last_Name        |     email_Address          |    password      | phoneNumber             |
  |               |                    |                            |                  |                         |
  |  Swati        |  Dewangan          |     swati.dewangan         |       Test       | 09898                   |
  |  Swati        |  Dewangan          |swati.dew>anga+n@gmail.com  |       Tester     | 0989809823              |
  |  Swati        |  Dewangan          |swati.dewangan@gmail.com    |       Test123    | 098980982335455677567   |