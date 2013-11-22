define([
  'underscore',
  'backbone',
  'models/contributor/BoilderplateModel'
], function(_, Backbone, BoilerplateModel){

  var BoilerplateCollection = Backbone.Collection.extend({
      
      model: BoilerplateModel,

      initialize : function(models, options) {},
      
      url : function() {
        return '';
      },
    
      parse : function(data) {
          return {};
      },
     
  });

  return BoilerplateCollection;

});