### Planning

#### 1. Configuration/dependencies - Defined in the package.json file at root level
  * Default ember dependencies for complete functionality
  * ember-bootstrap for styling, used in most .hbs files
  * emberfire to assist access to the firebase database
  * ember-moment to assist with Date markers, primarily used in question/answer creation for a timestamp

#### 2. Specs
  * Users can create and save questions
  * Users can create and save answers to a question
  * Users can easily navigate between home page and create a new question and specific question pages
  * Users can edit questions

#### 3. Path Planning
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


#### 4. UX/UI
  * Navbar at top of page for easy navigation
  * Make it niiiiiiiice

#### Stretch Goals
  * Implement upvote functionality for questions and answers, sort accordingly
  * Search functionality for answered and unanswered questions
  * "Random Question" that takes you to a random question to answer
