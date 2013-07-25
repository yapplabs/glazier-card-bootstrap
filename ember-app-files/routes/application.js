import card from 'card';
import Conductor from 'conductor';
//import ExampleModel from 'app/models/example_model';


var ApplicationRoute = Ember.Route.extend({

  /*
    see existing cards for how data retrieval may
    actually work
   */
  model: function(){
    //var params = {};
    //return ExampleModel.find(params).then(function(data) {
    //  return data;
    //});
  }
});

export default ApplicationRoute;
