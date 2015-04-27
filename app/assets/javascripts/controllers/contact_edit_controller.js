App.ContactEditController = Ember.Controller.extend({
  actions: {
    save: function() {
      var contact = this.get('model');

      contact.save();

      this.transitionToRoute('contact', contact);
    }
  }
});
