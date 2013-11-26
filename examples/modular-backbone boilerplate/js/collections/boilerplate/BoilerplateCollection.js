define([
  'underscore',
  'backbone',
  'models/boilerplate/BoilerplateModel'
], function(_, Backbone, BoilerplateModel){

  var BoilerplateCollection = Backbone.Collection.extend({
      
      model: BoilerplateModel,

      initialize : function(models, options) {},
      
      url : function() {
        return 'http://developer.echonest.com/api/v4/playlist/basic?api_key=PZ4LKPTF5EEUFUVKM&artist=Weezer&format=json&results=20&type=artist-radio';
      },
    
      parse : function(data) {
          console.log("parse");
          console.log(data.response);
          return data.response.songs;
      },
     
  });
  console.log(BoilerplateCollection);

  return BoilerplateCollection;

});