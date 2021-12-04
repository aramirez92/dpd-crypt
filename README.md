# dpd-crypt

This custom resource type allows you allows md5 encryption.

## Installation

`$ npm install dpd-crypt`

See [Installing Modules](http://docs.deployd.com/docs/using-modules/) for details.

## Example Usage

`By default md5 you don't need specify method`

```

dpd.crypt.get({
    string: 'Text to encode',
    method: 'sha1'
}, function (results) {
    // ...
});

```

## Follow me on Twitter

[@realDonAlfred](https://twitter.com/realdonalfred)
