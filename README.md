glazier-card-bootstrap
======================

This project offers a starting point for developing new [glazier](https://github.com/yapplabs/glazier)
cards.  Note this is a work in progress.  In the future we plan to have a more robust
development environment, processes, generators etc.  But for now, this project offers
a lightweight, relatively painless way to start developing cards.

## Steps for developing a glazier card from this repo

1.  Clone this repo

  As present, to run cards, you will need to place them within the cards directory of the glazier instance you are running.  We suggest you clone this repo outside of glazier, then simlink your card dir into the glazier/cards dir to minimizing versioning issues between separate projects.

2.  Rename the project

        * rename the enclosing directory
        * edit the name-related properties in package.json (including name, displayName, etc.)

3.  If you plan to use Ember.js to develop your card:

        * copy the files in the /ember-app-files dir to the /app dir
        * in cards.js uncomment the ember and handlebars js files:

        Conductor.require('/vendor/handlebars.js');
        Conductor.require('/vendor/ember-latest.js');

  If you are not using Ember, you may delete the /ember-app-files directory and the require statements.

4. Symlink your card dir

        cd to your-glazier-installation-dir/cards/
        ln -s /path/to/your-glazier-card-dir

5. Ingest your card

        # in `glazier/`
        grunt ingestCards

6. Adding your card to a Github repository dashboard

  Navigate to the repository in Glazier.  Click on the `Add Pane` link on the top right of the page.
  Your card type should appear in the menu.  Click on it and it should appear in the dashboard.

  To **remove a card** from a dashboard, hover on the gear in the lower right of the card and a Remove Card
  link will appear.

  **Only if your card does not appear in the menu** you can try to install it manually onto your repository
  page as follows:

        # in glazier/glazier-server/
        bundle exec rails console

        # add the Pane to the repository dashboard of your choosing
        # for instance to add to the yapplabs/glazier dashboard, do the following:
        dashboard = Dashboard.find_or_bootstrap('yapplabs/glazier')

        # if your card's name in package.json is 'my-card'
        dashboard.add_pane('my-card')

  In your browser, navigate to your repository page.  Your card should appear there.

  To manually remove a card, use:

        # you should be able to do this from the dashboard as described above
        dashboard.remove_pane(card_type_name)


## Developing a Glazier Card

###Adding Services to your Card

To add a service, in this example the FullXhrService, do the following:

1. Add service in `package.json` `glazierConfig` property

    {
      ...
      "glazierConfig": {
        "consumes": [
          ...
          "fullXhr"
        ],
        ...
    }

2. Add an entry in your cards `consumers` property.  For instance to add the `fullXhr`
 service to your card:

    var card = Conductor.card({
        ...
        consumers: {
            ...,
            'fullXhr': Conductor.OasisConsumer
        }
    }


## Debugging

### Templates not found

`Assertion failed: Module: 'templates' not found`
`Uncaught Error: Module: 'templates' not found.`

You must have a /templates dir and at least one template, otherwise the
templates module won't get required and you will get an error (or if not
using templates can get rid of the require templates in card (todo: verify and fix)

### Mysterious Syntax Error

Check that your import and export statements are correct, e.g.:

import Resolver from 'resolver';
...
export default card;

You can verify this is the problem by looking in the generated card,
`/dist/card.js`, where you will see statements like:

 __exports__ ...
 __import__ ...
