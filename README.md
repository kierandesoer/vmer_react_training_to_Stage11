# How to get started

* Install node (this will also install npm) by running the following commands in your terminal: 
  * `brew install nvm` (this will install nvm, which is a node version manager)
  * `nvm install node` (this will install the latest version of node)
  * `nvm use node` (this will use the latest version of node)
  * `npm install yarn -g` (this will install yarn globally)
  * `yarn` (this will install all dependencies)

* Run the front end by running the following command in your terminal: `yarn start`

# Helpful links and documentation

React docs - https://react.dev/reference/react

Javascript docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript

Generally typing what you want to research (let's say it's dates) and the word 'mdn' into Google will get you to the correct MDN reference page.

Questions with answers - https://stackoverflow.com/ - this is a great resource for finding answers to questions you have, and if you can't find an answer, you can ask a question and someone will answer it. Do be aware that the quality of answers varies wildly, and many answers may be old and out of date compared to the version of React you're using now. Always check the answer yourself before using it, and try to write out the code yourself rather than copying and pasting it.

# Exercises

## Exercise 1 - Hello world!
In this first exercise, you will edit the App.tsx file to display a simple "Hello world!" message, which should be inside a div that stretches across the page, with a red background.

## Exercise 2 - a button.
In this exercise, you will add a button to the page that says 'Click me', which when clicked, will display an alert with the text "clicked!".

## Exercise 3 - a button component
In this exercise, you will extract the code you used to create the button into a separate React component.

## Exercise 4 - a button component with props
In this exercise, you will add a property ('prop') to the button component, which will allow you to change the text of the button and of the alert popup.

## Exercise 5 - a button component with props and state
In this exercise, you will add state to the button component, which will display the total times the button has been clicked, and increment each time it has been clicked.

## Exercise 6 - pass through and change state from a higher level component
In this exercise, you will add two more instances of the button component, and show the total times that all the buttons have been clicked. You will need to pass down state from the App.tsx component to the button component, and change the state from the button component.

How could you clean up the code so that less of it is in the JSX, and additionally so that the Button component doesn't need to know how to manipulate the total count state?

## Exercise 7 - conditional rendering
In this exercise you will add some simple text that will conditionally display whether the total number of clicks is even or odd.

## Exercise 8 - a list of things
In this exercise you will render a collection of simple objects and display them in a list.

## Exercise 9 - User input and modifying arrays
In this exercise you will add a couple of labelled inputs that will allow the user to add new items to the list.

## Exercise 10 - Editing and deleting entries
This exercise will pull knowledge from all the previous exercises in order to allow you to edit and delete entries. 

You will need to add a button to each entry that will allow you to delete it, and you will need to add a button to each entry that will allow you to edit it. The edit button should display 'edit' at first, and when clicked change to 'confirm'.

There should also be two inputs next to each entry that will allow you to edit the make and name. You will need to ensure you follow the [rules of hooks](https://react.dev/warnings/invalid-hook-call-warning) when doing this. These inputs should be disabled until the edit button is clicked, and re-disabled when the confirm button is clicked.

Each set of edit inputs should by default have the current value of the car entry, and should only change that entry.

## Exercise 11 - tidy up the code and make it look visually clearer and better
In this exercise you will make the code cleaner and more readable, and make the page look better visually. You can do this however you like, but some suggestions are:
* Extracting some state and JSX/HTML into a separate component
* Adding some CSS to make the page look better
* Add additional JSX/HTML to make the page look better
* Combine the various `useState` hooks into a single `useReducer` hook - see [here for the docs for that](https://react.dev/reference/react/useReducer).