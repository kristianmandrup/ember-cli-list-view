# Ember List View for Ember CLI #

This is an addon for [ember list-view](https://github.com/emberjs/list-view) for easy consumption by ember-cli.
Currently it wraps this [ember-list-view](https://github.com/kristianmandrup/ember-list-view)
bower component distribution fork while we wait for a "real" release for ember cli.

## Installation

In your Ember CLI app `packages.json` file, add this `"devDependency"`:

```json
  "ember-list-view-cli": "kristianmandrup/ember-list-view-cli.git#master"
```

And run `npm install`

### Bower library installation

The addon depends on `ember-validations` being installed as a bower component.

Since the `package.json` file now has an "install" script defined, it should auto-install its bower dependencies!!

```js
"scripts": {
  "install": "bower install"
```

This should install the dependencies listed in the `bower.json` file of this addon (named `"dummy"` for this reason!)

```js
{
  "name": "bower-dummy",
  "devDependencies": {
    "ember-list-view": "kristianmandrup/ember-list-view.git#master",
  }
}
```

If this for some reason doesn't work or you want to install manually:

Try `bower install kristianmandrup/ember-list-view.git#master --save-dev`

Which should install `ember-list-view` bower distribution and save it into your `bower.json` file.

### Test if installation works

Run `ember serve`

*Test in the browser*

 Now you can serve the final build (the library will be part of `vendor.js`).

 `$ open localhost:4200`

In the console of your browser web tools:

```bash
> Ember.ListView
```

## Legal ##

[Licensed under the MIT license](http://www.opensource.org/licenses/mit-license.php)

See See [Ember List view license](https://github.com/emberjs/list-view/blob/master/LICENSE)
