// Filename: views/projects/list
/*define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above,
  'models/boilerplate/BoilerPlatetModel',
  'collections/boilerplate/BoilerPlateCollection',
  'text!templates/boilerplate/boilerplateListTemplate.html'

], function($, _, Backbone, BoilerPlatetModel, BoilerPlateCollection, boilerplateListTemplate){
  var BoilerPlateListView = Backbone.View.extend({
    el: $("#boilerplate-list"),

    render: function(){
      
      var data = {
        artists: this.collection.models
      };

      var compiledTemplate = _.template( boilerplateListTemplate, data );
      $("#projects-list").html( compiledTemplate ); 
    }
  });
  return BoilerPlateListView;
});*/