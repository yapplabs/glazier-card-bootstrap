glazier-card-bootstrap
======================

A starting point for a new glazier card


## Adding to glazier

    # in `glazier/cards/`
    ln -s your/path/to/glazier-card-bootstrap

    # in `glazier/`
    grunt ingestCards

    # register the card with the github repo you wish to have it available on
    # by creating a Pane record
    
    # in `glazier/glazier-server/`
    bundle exec rails console

    # create a Pane
    > pane = Pane.new
    > pane.pane_type_name="your-cards-type-name"  #refers to the name property in your card's package.json
    > pane.save!

    # add the Pane to the repository dashboard of your choosing
    db = Dashboard.where(repository: 'yapplabs/glazier').first  #repository is the repo you wish to add card to
    db.panes.push(pane)

In your browser, navigate to your glazier repository page.  Your card should appear there.
