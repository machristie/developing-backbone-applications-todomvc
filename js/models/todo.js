
// Todo Model
// ----------

define(['underscore', 'backbone'], function(_, Backbone) {
  var TodoModel = Backbone.Model.extend({

    defaults: {
      title: '',
      completed: false
    },

    // Toggle the `done` state of this todo item.
    toggle: function() {

      this.save({
        completed: !this.get('completed')
      });
    },

    // Remove this Todo from *localStorage* and delete its view.
    clear: function() {
      this.destroy();
      this.view.remove();
    }
      
  });

  return TodoModel;
});
