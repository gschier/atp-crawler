ATP.fm Web Crawler
==================

Simple web crawler to fetch all show titles of ATP podcasts (atp.fm)

50 lines of code on top of ~165,000 lines of dependencies (for Casey)


## What does it use?

- [request](https://github.com/mikeal/request) (HTTP client)
- [domino](https://github.com/fgnass/domino) (server-side DOM)
- [zepto-node](https://github.com/fgnass/zepto-node) (JQuery-like library)


## How does it work?

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
