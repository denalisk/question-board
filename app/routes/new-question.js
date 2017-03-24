import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },

  actions: {
    saveQuestion() {
      var params = {
        // author: this.controller.get('author'),
        // body: this.controller.get('body'),
        // notes: this.controller.get('notes'),
        // score: "0",
        // status: true,
        // creation_date: moment().format("MM/DD/YYYY"),
        // answers: {}
        author: "sam",
        body: "Did it work",
        notes: "I hope so",
        score: "0",
        status: true,
        creation_date: moment().format("MM/DD/YYYY"),
        answers: {}
      };
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
