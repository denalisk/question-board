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
      question.get('answers').addObject(newAnswer);
      question.set('status', false);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.set('isAnswering', false);
      this.transitionTo('question', question);
    },
    addAnswer() {
      this.set('isAnswering', true);
    },
  }
});
