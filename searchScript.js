/* 

© 2015 Josh Cramoy
All rights reserved

Thanks for taking a look at my code! 

*/
var input;
//To Define onPageData as the location element in the Facebook Pop-up window
var onPageData = document.getElementsByClassName("_2aku");
//To Receive the message from the popup.js script file to get the value of the var "input"
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    //assign the value of rquest.message to var input
    var input = request.message; 
      //send a message back to popup.js to note a successful message received
    sendResponse({message: "Success!"});
      //for loop to cycle through the class _2aku in the invite window
    for (var i = 0; i < onPageData.length; i++) {
         // console log to test the for loop is working
        console.log(onPageData[i].innerHTML);
        // convert input.value to lowercase
        var inputL = input.toLowerCase();
         //use toLowerCase(); method to determine a match regardless of letter case
        var onPageDataL = onPageData[i].innerHTML.toLowerCase();
         //Use indexOf method to check for any part of the input string on the page
        var n = onPageDataL.indexOf(inputL);
        // messaging to tell popup.js that the script is running 
        chrome.runtime.sendMessage({message: "working"}, function(response){
    console.log(response);
    });
        //conditional statement to determine a match on the page
        if (n > -1 && input !== "") {
             // console log for testing and QA purposes
             console.log("Pass");
             console.log(n);
             //use .click(); to automatically click the button on the page if there is a match
             onPageData[i].click();
         } else {
             console.log("Fail");
             console.log(n);
         }
    };
    // To pass message back to popup.js to notify the script is finished running
    chrome.runtime.sendMessage({message: "Done!"}, function(response){
    console.log(response);
    });
});





