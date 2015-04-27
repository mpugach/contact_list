// for more details see: http://emberjs.com/guides/models/defining-models/

App.Contact = DS.Model.extend({
  phone: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string')
});
