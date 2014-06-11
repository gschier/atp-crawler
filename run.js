var domino  = require('domino');
var Zepto   = require('zepto-node');
var request = require('request');

// CONSTANTS
var BASE_URL = 'http://atp.fm';
var NEXT_PAGE_LINK_SELECTOR = '#nextLink';
var SHOW_TITLE_SELECTOR = '.entry-title';
var FETCH_DELAY = 200;

var showTitles = [ ];

var fetchPage = function(url, callback) {

  // Prepend the BASE_URL if relative path
  if (url.indexOf('http://') == -1) { url = BASE_URL + url; }

  // Some logging
  console.log('Fetching', url);

  // Actually download the page
  request(url, function (err, response, body) {
    if (err || response.statusCode != 200) {
      return callback(error);
    }

    // Construct DOM and Zepto
    var $ = Zepto(domino.createWindow(body));

    // Fetch show titles
    $(SHOW_TITLE_SELECTOR).each(function() {
      showTitles.push($(this).text());
    });

    // Get the Url of the next page
    var nextPageUrl = $(NEXT_PAGE_LINK_SELECTOR).attr('href');

    // We're done! Bail out, no more links
    if (!nextPageUrl) { return callback(); }

    // Queue up the next page fetch (but not too soon)
    setTimeout(function() {
      fetchPage(nextPageUrl, callback);
    }, FETCH_DELAY);
  });
};

fetchPage(BASE_URL, function(err) {
  console.log('DONE', showTitles);
});
