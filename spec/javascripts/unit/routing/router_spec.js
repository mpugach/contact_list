module('Routing spec', {
  setup: function () {
    App.ApplicationAdapter = DS.FixtureAdapter;
    App.Contact.FIXTURES = [
      {
        id: 1,
        first_name: 'Petro',
        last_name: 'Ivanov',
        phone: '111'
      }
    ]
  },

  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('root route', function() {
  routesTo('/', 'index');
});

test('contacts route', function() {
  routesTo('/contacts', 'contacts.index');
});

test('contacts.new route', function() {
  routesTo('/contacts/new', 'contacts.new');
});

test('contact show route', function() {
  routesTo('/contacts/1', 'contacts.contact.index');
});

test('contact edit route', function() {
  routesTo('/contacts/1/edit', 'contacts.contact.edit');
});
