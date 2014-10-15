module.exports = {
  name: 'ember-validations-cli',
  included: function(app) {
    this._super.included(app);
    this.app.import(app.bowerDirectory + '/ember-list-view/dist/list-view.js');
  }
};
