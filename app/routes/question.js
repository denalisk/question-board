import Ember from 'ember';

export default Ember.Route.extend({
  isAnswering: false,
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      console.log("in question.js save answer: " + params.question);
      console.log(params);
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', question);
    },
    // addAnswer() {
    //   console.log("clicky");
    //   this.set('isAnswering', true);
    // }
  }
});

// (results => this.set('noAnswersYet', (results.get('answers').get('length') < 0)))
