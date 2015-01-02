#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

> [Selection sort](http://en.wikipedia.org/wiki/Selection_sort) with O(n^2) time complexity


## Install

```sh
$ npm install --save selectionsort
```


## Usage

```js
var selectionsort = require('selectionsort');

selectionsort([6,4,9,3,1,7]); 
// => [1,3,4,6,7,9]

selectionsort([5, 1, 12, -5, 16, 2, 12, 14]);
// => [-5, 1, 2, 5, 12, 12, 14, 16]
```


## License

MIT © [Addy Osmani](http://addyosmani.com)


[npm-url]: https://npmjs.org/package/selectionsort
[npm-image]: https://badge.fury.io/js/selectionsort.svg
[travis-url]: https://travis-ci.org/addyosmani/selectionsort
[travis-image]: https://travis-ci.org/addyosmani/selectionsort.svg?branch=master
[daviddm-url]: https://david-dm.org/addyosmani/selectionsort.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/addyosmani/selectionsort
