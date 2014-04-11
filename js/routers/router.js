var app = app || {};

// Todo Router
// -----------

define(['backbone', 'collections/todos'], function(Backbone, Todos) {
  var Workspace = Backbone.Router.extend({
    routes:{
      '*filter': 'setFilter'
    },

    setFilter: function( param ) {
      // Set the current filter to be used
      if (param) {
        param = param.trim();
      }
      app.TodoFilter = param || '';

      // Trigger a collection filter event, causing hiding/unhiding
      // of Todo view items
      Todos.trigger('filter');
    }
  });

  return Workspace;
});
