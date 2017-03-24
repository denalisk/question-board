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
      this.set('author', "");
      this.set('body', "");
      this.sendAction('saveAnswer', params)
    }
  }
});
