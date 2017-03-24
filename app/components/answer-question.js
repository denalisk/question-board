import Ember from 'ember';

export default Ember.Component.extend({
  isAnswering: false,
  actions: {
    saveAnswer(model) {
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        score: "0",
        question: model
      };
      this.set('author', "");
      this.set('body', "");
      this.sendAction('saveAnswer', params)
    },
    showAnswerForm() {
      this.set('isAnswering', true);
    },
    hideAnswerForm() {
      this.set('isAnswering', false);
    }
  }
});
