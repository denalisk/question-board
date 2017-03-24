import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        score: "0",
        question: this.get('question')
      };
      console.log("in answer-question.js saveanswer: " + params.author);
      this.sendAction('saveAnswer', params)
    }
  }
});
