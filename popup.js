/* 

© 2015 Josh Cramoy
All rights reserved

Thanks for taking a look at my code! 

*/

document.getElementById("searchMatch").addEventListener("click", function (){
    //var onPageData = document.getElementsByClassName("_2aku");
    var input = document.getElementById("userInput").value;
     //use toLowerCase(); method to determine a match regardless of letter case
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {message: document.getElementById("userInput").value}, function(response) {
    console.log(response);
  });
});

    console.log("Step One");
  	chrome.tabs.executeScript(
      {file:"searchScript.js"});
});
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
      console.log(request.message);
      var complete = request.message;
      if (complete === "Done!"){
        document.getElementById("copy_background").innerHTML = "<h2>Done!</h2>";
      }
      else {
        document.getElementById("copy_background").innerHTML = '<img src="ajax-loader.gif"/>';
      }
    });
