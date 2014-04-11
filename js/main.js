var ENTER_KEY = 13;

require.config({
  paths: {
    jquery: 'lib/jquery-2.1.0',
    underscore: 'lib/underscore-1.6.0',
    backbone: 'lib/backbone-1.1.2',
    text: 'lib/text',
    localStorage: 'lib/backbone.localStorage-1.1.7'
  },
  shim: {

    underscore: {
      exports: '_'
    },

    backbone: {
      deps: [ 'underscore', 'jquery' ],
      exports: 'Backbone'
    }
  }
});

require(['backbone', 'views/app', 'routers/router'], function(Backbone, AppView, Router) {
  var app_view = new AppView;

  var router = new Router();
  Backbone.history.start();
});
