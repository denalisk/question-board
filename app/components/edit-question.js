import Ember from 'ember';

export default Ember.Component.extend({
  updatingQuestion: false,
  actions: {
    updateQuestion() {
      this.set('updatingQuestion', false);
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        notes: this.get('notes')
      };
      this.sendAction('updateQuestion', question, params)
    },
    showUpdate() {
      this.set('updatingQuestion', true);
    },
    hideUpdate() {
      this.set('updatingQuestion', false);
    }
  }
});
