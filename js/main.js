
require.config({
  baseUrl:'../',
  paths: {
    jquery: 'lib/jquery-2.1.0',
    underscore: 'lib/underscore-1.6.0',
    backbone: 'lib/backbone-1.1.2',
    text: 'lib/require/text'
  }
});

require(['views/app'], function(AppView) {
  var app_view = new AppView;
});
