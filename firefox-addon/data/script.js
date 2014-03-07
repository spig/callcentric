/* make a message call to the internal extension page and return the phone list as a json to the web page */

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://my.callcentric.com/phone_book.php", true);

xhr.onload = function() {
  var phoneNumbers = xhr.responseText.match(/[0-9]{11}/gm),
      uniqPhoneNumbers = {};

  phoneNumbers.forEach(function(val) { uniqPhoneNumbers[val] = val; });

  Object.keys(uniqPhoneNumbers).forEach(function(phoneNumber) {
    var nodes,
        i = 0,
        item;
    nodes = document.querySelectorAll("a[href*='dial_number1="+phoneNumber+"']")
    for (i=nodes.length; i--;) {
      item = nodes[i];  // Calling myNodeList.item(i) isn't necessary in JavaScript
      item.classList.add("inPhonebook");
    }
    // $("a[href*='dial_number1="+phoneNumber+"']").addClass("inPhonebook");
  });
};

// call before send
xhr.overrideMimeType("text/xml");
xhr.send();
