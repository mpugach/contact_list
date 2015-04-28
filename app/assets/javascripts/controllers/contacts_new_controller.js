App.ContactsNewController = Ember.Controller.extend({
  actions: {
    save: function() {
      var _this = this;

      this.get('model').save().then(function(resolvedContact) {
        _this.transitionToRoute('contact', resolvedContact);
      });
    }
  }
});
