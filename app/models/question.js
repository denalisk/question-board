import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr(),
  author: DS.attr(),
  notes: DS.attr(),
  score: DS.attr(),
  status: DS.attr(),
  answers: DS.hasMany('answer', {async: true}),
  creation_date: DS.attr()
});
