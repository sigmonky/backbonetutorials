define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var BoilerplateModel = Backbone.Model.extend({

  		defaults : {
          query : "unknown"
      },  

      initialize: function( options ) {
  			this.query = options.query; 
  		},

		url : function() {
	        //return '' + this.query;
          return '';
	    },
	    
	    parse : function(response) { 
        // because of jsonp 
	        //return res.data;
	    }

    });

  	return BoilerplateModel;

});
