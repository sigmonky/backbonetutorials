define([
  'jquery',
  'underscore',
  'backbone',
  'collections/boilerplate/BoilerplateCollection',
  'text!templates/boilerplate/boilerplateTemplate.html'
], function($, _, Backbone,BoilerPlateCollection,boilerplateTemplate){

  var BoilerPlateView = Backbone.View.extend({
    el: $("#page"),

    initialize:function() {

      var that = this;

      var onDataHandler = function(collection) {
          console.log("view data handler...");
          
          collection.each(function(model){
            console.log(model.attributes);
          });
          
          that.render(collection);
      }

      that.collection = new BoilerPlateCollection([]); 
      that.collection.fetch({ success : onDataHandler });

    },

    render: function(collection){
      console.log("render....");
      
      $('.menu li').removeClass('active');
      $('.menu li a[href="#"]').parent().addClass('active');
      this.$el.html(boilerplateTemplate); 

    }




  });

  return BoilerPlateView;
  
});
