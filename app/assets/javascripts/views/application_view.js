App.ApplicationView = Ember.View.extend({
  templateName: 'layouts/application',
  didInsertElement: function() {
    alert('1')
  }
});
