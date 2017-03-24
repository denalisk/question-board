# "A World Wide Web of Questions" An exercise in javascript and the Ember framework

#### _A World Wide Web of Questions_, 03.24.2017

### By _Sam Kirsch_

## Description

#### A website built as an exercise in implementations of the Ember framework. Users can post and answer questions on the site, as well as adding notes. Additionally, the site will flag questions with no answers with a badge on the home page to alert users that it needs an answer.

## Specifications

* Users can create and save questions
* Users can create and save answers to a question
* Users can easily navigate between home page and create a new question and specific question pages
* Users can edit questions

#### Stretch Goals

* Implement upvote functionality for questions and answers, sort accordingly
* Search functionality for answered and unanswered questions
* "Random Question" that takes you to a random question to answer

## Setup

* Make sure you have [ember.js](http://emberjs.com/) installed
* Clone this repository
* From inside the repository, run ember init
* run:
  * ember install ember-bootstrap
  * ember install emberfire
* Run ember serve and navigate to localhost:4200

### Technologies Used

* HTML and SCSS
* Javascript with Ember to manage packages

[github link for this project](https://github.com/denalisk/question-board)

##### Copyright (c) 2017 Sam Kirsch.

##### Licensed under the MIT license.


## Planning Section:
#### Configuration/dependencies - Defined in the package.json file at root level
  * Default ember dependencies for complete functionality
  * ember-bootstrap for styling, used in most .hbs files
  * emberfire to assist access to the firebase database

#### Path Planning
  * Routes:
    * **Index** - displays all questions in a list with their authors
      >Components
      * question-tile
    * **new question** - displays a form where users can create and submit new questions
      >Components
      * new-question form
    * **question** - displays a specific question along answers and functionality to answer and edit
      >Components
      * question-details
      * answers
      * edit-question
      * answer-question
  * Models:
    * **question**
      * Questions contain:
        * Question body
        * Author
        * Notes
        * Status
        * Answers in a has-many relationship
        * Creation Date
        * Score
    * **answer**
      * Answers contain:
        * Answer body
        * Author
        * Score
        * Creation Date
        * Question in a has-one relationship


#### UX/UI
  * Navbar at top of page for easy navigation
  * Make it niiiiiiiice
