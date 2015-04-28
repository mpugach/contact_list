App.ContactEditRoute = Ember.Route.extend({
  deactivate: function () {
    this.controller.model.rollback();
  }
});
