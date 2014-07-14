//
// https://developer.mozilla.org/en-US/Add-ons/SDK
//
//
// Import the page-mod API
var pageMod = require("sdk/page-mod");
// Import the self API
var self = require("sdk/self");

var data = self.data;

// Create a page mod
// It will run a script whenever a ".org" URL is loaded
// The script replaces the page contents with a message
pageMod.PageMod({
  include: ["https://my.callcentric.com/calls_made*", "https://my.callcentric.com/calls_received*", "https://my.callcentric.com/home*"],
  contentScriptFile: data.url("script.js"),
  contentStyleFile: data.url("styles.css"),
  // contentStyle is built dynamically here to include an absolute URL
  // for the file referenced by this CSS rule.
  // This workaround is needed because we can't use relative URLs
  // in contentStyleFile or contentStyle.
  contentStyle: ".inPhonebook { background: url(" + data.url("phonebook-small.png") + ") no-repeat center right }"
});
