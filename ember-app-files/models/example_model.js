import card from 'card';

/*
  this file contains some boilerplate which may be helpful for retrieving
  data from external sources.  please refer to other cards for complete
  working examples.  though in the model directory, the example here
  and in our other cards are not Ember models per se, though they
  could be.
 */
var ExampleModel = {

  find: function(params) {
    var service = card.consumers.fullXhr;
    var url = 'someUrl';

    return service.request("ajax", {
      data: params,
      url: url,
      type: 'get',
      dataType: 'json'
    });
  }
};

export default ExampleModel;
