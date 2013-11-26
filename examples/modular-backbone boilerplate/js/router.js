// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/boilerplate/BoilerPlateView'
], function($, _, Backbone, BoilerPlateView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    

    app_router.on('route:defaultAction', function (actions) {
     
       // We have no matching route, lets display the home page 
        console.log("route:defaultAction");
        var boilerplateView = new BoilerPlateView();
        boilerplateView.render();
    });


    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
