glazier-card-bootstrap
======================

This project offers a starting point for developing new glazier cards.  Note this
is a work in progress.  In the future....  But for now, this project offers a
relatively painless way to start developing cards.

## Adding a card to glazier

As you have develop a card (process described below), or want to incorporate someone
else's card in your project, we recommend you keep the project in a separate folder
from the glazier folder and simlink your folder into the glazier cards directory.  This
way you can easily pull glazier project updates, while allowing you to develop and test
your card independently.

Steps for adding a card to glazier locally:


    1. Simlink your card dir into the glazier cards dir

    cd your-local-glazier/cards/
    ln -s your/path/to/glazier-card-bootstrap

    2. Ingest

    # in `glazier/`
    grunt ingestCards

    3. Add your card to the github repository dashboard on which you wish to have it available

    # in `glazier/glazier-server/`
    bundle exec rails console

    # add the Pane to the repository dashboard of your choosing
    # for instance to add to the yapplabs/glazier dashboard, do the followin:
    > dashboard = Dashboard.find_or_bootstrap('yapplabs/glazier')

     # if your card's name (defined ?) is 'my-awesome-card'
    > dashboard.add_pane('my-awesome-card')

    #if add_pane doesn't work, can add manually
    > pane = Pane.new
    > pane.pane_type_name="your-cards-type-name"  #refers to the name property in your card's package.json
    > pane.save!
    > dashboard.panes.push(pane)

Removing a card from a dashboard

    dashboard.remove_pane(card_type_name)

In your browser, navigate to your repository page.  Your card should appear there.

## Developing a Glazier Card

  1. clone this project
  2. rename folder and files
  3. if using ember, copy files in ember-app-files dir to the app dir
  4.  scope out services you need
  5.  develop your card
  6. ember-specific card development
