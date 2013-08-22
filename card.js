import Conductor from 'conductor';
import TestConsumer from 'app/consumers/test';

/* Uncomment/add required javascript files */
Conductor.require('/vendor/jquery.js');
Conductor.require('/vendor/handlebars.js');
Conductor.require('/vendor/ember-latest.js');
//Conductor.require('/vendor/loader.js');

/* css files */
Conductor.requireCSS('/css/glazier_card.css');
Conductor.requireCSS('card.css');

var card = Conductor.card({
  /* uncomment or add needed services here */
  consumers: {
    //'fullXhr': Conductor.Oasis.Consumer,
    //'paneUserStorage': Conductor.Oasis.Consumer,
    //'authenticatedGithubApi': Conductor.Oasis.Consumer,
    //'unauthenticatedGithubApi': Conductor.Oasis.Consumer,
    'test': TestConsumer

  },
  defaultContentDiv: "<div id=\"card\"></div>",
  bootstrapDiv: "<div id=\"card\">Hello New Card!! (remove me from /card.js)</div>",
  render: function (intent, dimensions) {

    document.body.innerHTML = this.bootstrapDiv;   //this.defaultContentDiv
    /*
      After verifying card bootstrapped, replace this.bootstrapDiv with
      this.defaultContentDiv and you can delete the bootstrapDiv property

      If using Ember, the App.rootElement is set to '#card', so you will need
      it in your DOM as below.
     */

    /* Remove this line if not using Ember.js in your card */
    //todo make this a try/catch with appropriate msg if can't find ember
    Ember.run(this.App, 'advanceReadiness');
  },


  activate: function() {
    this.App = requireModule('app/application');
  },

  metadata: {
    document: function(promise) {
      promise.resolve({
        title: "Give this card a proper title in card.js card.metadata"
      });
    }
  }

});

export default card;

