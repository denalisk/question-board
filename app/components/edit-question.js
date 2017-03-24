import Ember from 'ember';

export default Ember.Component.extend({
  updatingQuestion: false,
  actions: {
    updateQuestion() {
      this.set('updatingQuestion', false);
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        notes: this.get('notes'),
        score: question.get('score'),
        status: question.get('status')
      };
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('question', newQuestion);
    },
    showUpdate() {
      this.set('updatingQuestion', true);
    },
    hideUpdate() {
      this.set('updatingQuestion', false);
    }
  }
});
