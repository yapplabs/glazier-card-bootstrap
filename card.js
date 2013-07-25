import 'conductor' as Conductor;

/* Uncomment/add required javascript files */
Conductor.require('/vendor/jquery.js');
//Conductor.require('/vendor/handlebars.js');
//Conductor.require('/vendor/ember-latest.js');
//Conductor.require('/vendor/loader.js');

/* Uncomment/add required css files */
//Conductor.requireCSS('/css/glazier_card.css');
Conductor.requireCSS('card.css');

var card = Conductor.card({
  /* uncomment or add needed services here */
  consumers: {
    //'fullXhr': Conductor.Oasis.Consumer,
    //'paneUserStorage': Conductor.Oasis.Consumer,
    //'authenticatedGithubApi': Conductor.Oasis.Consumer,
    //'unauthenticatedGithubApi': Conductor.Oasis.Consumer,
    'repository': Conductor.Oasis.Consumer,
    'test': TestConsumer

  },

  render: function (intent, dimensions) {

    document.body.innerHTML = "<div id=\"card\">Hello Bootstrap.  Click me.</div>";
    /*
      After verifying card bootstrapped, replace above line with line below
      and remove (or overwrite) the defaultOnActivation function and its call.

      If using Ember, the App.rootElement is set to '#card', so you will need
      it in your DOM as below.
     */
    //document.body.innerHTML = "<div id=\"card\"></div>";


    /* Remove this line if not using Ember.js in your card */
    //todo make this a try/catch with appropriate msg if can't find ember
    Ember.run(this.App, 'advanceReadiness');
  },

  defaultOnActivation: function(){
    card.consumers.repository.request('getRepository').then(function(name) {
      $('#card').click(function() {
        alert('You clicked me in ' + name);
      });
    });
  },

  activate: function() {
    this.App = requireModule('app/application');
    this.defaultOnActivation();
  },

  metadata: {
    document: function(promise) {
      promise.resolve({
        title: "Give this card a proper title in card.js card.metadata"
      });
    }
  }

});

export = card;

