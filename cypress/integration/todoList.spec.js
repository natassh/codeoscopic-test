
/// <reference types="cypress" />

context('TODO List App', () => {

    it('Can open the app', () => {

        cy.visit('http://localhost:3000/');

    })

    it('Can write in the input field with the text: First Todo', () => {

        const inputText = cy.get('.AddTodoForm__Input');
        inputText.type('Can write in the input field with the text: First Todo').should('have.value', 'Can write in the input field with the text: First Todo')

    })
    it('Can press the button and a todo is added to the list and the list have 1 todo', () => {

        const buttonAddTodo = cy.get('.AddTodoForm__Button-submit');
        buttonAddTodo.click();

        const todoList = cy.get('.TodoList ul')
        todoList.should('have.length', 1);

    })

    it('Can add another todo', () => {

        const inputText = cy.get('.AddTodoForm__Input');
        inputText.type('My second todo').should('have.value', 'My second todo')

        const buttonAddTodo = cy.get('.AddTodoForm__Button-submit');
        buttonAddTodo.click();


    })
    it('Can delete a todo', () => {

        const buttonAddTodo = cy.get(':nth-child(1) > button')
        buttonAddTodo.click();

        const todoList = cy.get('.TodoList ul')
        todoList.should('have.length', 1);

    })
});