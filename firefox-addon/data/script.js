/* make a message call to the internal extension page and return the phone list as a json to the web page */

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://my.callcentric.com/phone_book.php", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    var div = document.createElement('div');
    div.id = "phonebook";
    div.innerHTML = xhr.responseText;
    var ref = document.getElementsByTagName('script')[0];
    ref.parentNode.insertBefore(div, ref);
    $("#phonebook").find("a[href*='click2dial.php?dial_number']").each(function(idx, el) {
      var phoneNumber = $(el).attr("href").match(/\d{11,}/)[0];
      $("a[href*='dial_number1="+phoneNumber+"']").addClass("inPhonebook");
//      $("a[href*='"+phoneNumber+"']").replaceWith($(el).text());
    });
  }
};
// call before send
xhr.overrideMimeType("text/xml");
xhr.send();

/*
$("a[href^='https://my.callcentric.com/click2dial.php?dial_number']")

https://my.callcentric.com/phone_book.php


https://my.callcentric.com/calls_received.php


var xhr = new XMLHttpRequest();
xhr.open("GET", "http://api.example.com/data.json", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // JSON.parse does not evaluate the attacker's scripts.
    var resp = JSON.parse(xhr.responseText);
  }
}
xhr.send();
*/
