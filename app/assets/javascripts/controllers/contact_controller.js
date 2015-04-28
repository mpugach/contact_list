App.ContactController = Ember.Controller.extend({
  fullName: Ember.computed('firstName', 'lastName', function () {
    return this.get('model.firstName') + ' ' + this.get('model.lastName')
  })
});
