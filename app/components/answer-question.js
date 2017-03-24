import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        score: "0",
        creation_date: moment().format("MM/DD/YYYY"),
        question: this.get('question')
      };
      this.sendAction('saveAnswer', params)
    }
  }
});
