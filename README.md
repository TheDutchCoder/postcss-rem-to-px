# postcss-rem-to-px

[PostCSS] plugin to convert `rem` values to `px` values.

[PostCSS]: https://github.com/postcss/postcss

```css
.foo {
  margin: 2rem;
}
```

```css
.foo {
  margin: 32px;
}
```

## Usage

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss postcss-rem-to-px
```

**Step 2:** Check you project for an existing PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

**Step 3:** Add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('@thedutchcoder/postcss-rem-to-px'),
    require('autoprefixer')
  ]
}
```

## Options

You can set a `baseValue` to represent the body's root pixel value for `font-size`, which is the base for `rem` values. The default `baseValue` is 16.

```diff
module.exports = {
  plugins: [
+   require('@thedutchcoder/postcss-rem-to-px', { baseValue: 10 }),
    require('autoprefixer')
  ]
}
```

[official docs]: https://github.com/postcss/postcss#usage
