module('Routing spec', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('root route', function() {
  visit('/');

  andThen(function() {
    var current_route = currentPath();

    equal(current_route, 'index', 'Expected index got: ' + current_route);
  });
});
