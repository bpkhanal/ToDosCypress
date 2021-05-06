/// <reference types="cypress" />

export class TodoPage {
    
    navigate() {
        cy.visit('http://www.angulartodo.com/index.html');
    }
    clearTodos(){
      cy.get('.active').click();
    }
    getPageTitle() {
        return cy.title();
    }
    getHeader(){
      return cy.get('h1');
    }
    addTodoWithEnter(todoTask) {
      cy.get('.textfield').type(todoTask + '{enter}')
    }
    addTodoWithButtonClick(todoTask) {
      cy.get('.textfield').type(todoTask);
      cy.get('form.ng-valid > button').click();
    }
    deleteTodos(){
      cy.get('.mtop20 > button').click();
      console.log("mmmm");
      cy.get('.checkbox').should('have.length',0);
    }
    getmap(){
      var myMap = new Map();
      myMap.set('.mtop0', 'Using Angular version 7 Official Release');
      myMap.set('.active', 'The Demo');
      myMap.set('.todos > :nth-child(2)', ' Type in a new todo... ');
      myMap.set('.mtop20 > button', 'Delete Selected');
      myMap.set('form.ng-valid > button', 'Add Todo');
      myMap.set('[href="code.html"]', 'The Code');        
      return myMap;
    }

}
