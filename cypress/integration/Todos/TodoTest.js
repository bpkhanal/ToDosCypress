/// <reference types="cypress" />

const { TodoPage } = require("./TodosPage");
var arr = [];
let todoPage = new TodoPage
Given('I navigate to the Todos page', () => {
    todoPage.navigate();
    //todoPage.clearTodos();
});
Then('I can varify the page title-header-text', () => {
    todoPage.getPageTitle().should('eq', 'Angular Todos List Example Demo');
    todoPage.getHeader().should('have.text', 'Angular - Simple Todo List Example')
 });
And('I should see all the webelement label displayed with proper Text', () => {
    var m = todoPage.getmap();
    for (const [key, value] of m.entries()) {
        console.log(key, value);
        cy.get(key).should('have.text', value);
    }
});
When('I enter my {string} in textbox with enter keyword', (todoTasks1) => {
    todoPage.addTodoWithEnter(todoTasks1);
    arr.push(todoTasks1);
});
And('I enter my {string} in textbox with enter keyword', (todoTasks2) => {
    todoPage.addTodoWithEnter(todoTasks2);
    arr.push(todoTasks2);
});
And('I enter my {string} in textbox with enter keyword', (todoTasks3) => {
    todoPage.addTodoWithButtonClick(todoTasks3);
    arr.push(todoTasks3);
    cy.wait(3000);
});
Then('I can verify count of all todo task', () => {
    cy.get('.checkbox').should('have.length', 3);
});

And('I can verify name of all the todos list and can be checked as completed  in the buttom', () => {
    for (var i = arr.length; i >= 1 ; i--) {
        cy.get('ul > :nth-child(' + i + ') > :nth-child(2)').should('have.text', arr.pop())
        cy.get(':nth-child(' + i + ') > .checkbox').click();
    }    
    cy.wait(3000);
});

And('I can delete the selected todo tasks', () => {
    todoPage.deleteTodos();
    cy.wait(3000);
});
