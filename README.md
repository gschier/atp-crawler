ATP.fm Web Crawler
==================

Simple web crawler to fetch all show titles of ATP podcasts (atp.fm)


## How Does it Work?

- uses [Request](https://github.com/mikeal/request) + [Domino](https://github.com/fgnass/domino) to download HTML and build DOM 
- uses [Zepto](https://github.com/fgnass/zepto-node) to select HTML elements and attributes

1. fetch base URL of atp.fm
2. download HTML
3. build DOM object with Domino
4. select show titles with Zepto
5. select next page link with Zepto
6. repeat with URL of next page


## Usage

```shell
$ npm install
$ npm start
```


## Todo

* make it fetch more metadata


## Author

[@GregorySchier](http://twitter.com/gregoryschier) - [schier.co](http://schier.co)
