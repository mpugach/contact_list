var routesTo = function(url ,route_name) {
  visit(url);

  andThen(function() {
    var current_route = currentPath();

    equal(current_route, route_name, '\n\texpected: ' + route_name + '\n\tgot: ' + current_route);
  });
};
