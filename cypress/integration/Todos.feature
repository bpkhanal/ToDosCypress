Feature: Validate the Todos page

    Background:
        Given I navigate to the Todos page

    Scenario:  I navigate to the Todos page
        Then I can varify the page title-header-text        
        And I should see all the webelement label displayed with proper Text

    Scenario Outline: I should be able add/verify todos list    
        When I enter my "<todoTasks1>" in textbox with enter keyword
        And I enter my "<todoTasks2>" in textbox with enter keyword
        And I enter my "<todoTasks3>" in textbox with enter keyword  
        Then I can verify count of all todo task      
        And I can verify name of all the todos list and can be checked as completed  in the buttom
        And I can delete the selected todo tasks
        
        Examples:
            | todoTasks1   | todoTasks2     | todoTasks3     |
            |Requirement Analisys| Test Planing | Tests Creation |
            | Tests Excution | Bug Management | Test Reporting|
    
   
           

        