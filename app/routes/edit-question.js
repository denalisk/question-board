import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    updateQuestion() {
      this.set('updatingQuestion', false);
      var params = {
        author: this.controller.get('author'),
        body: this.controller.get('body'),
        notes: this.controller.get('notes'),
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
