 document.getElementById('searchMatch').addEventListener("click", function () {
     var onPageData = document.getElementsByClassName("testDiv");
     var input = document.getElementById("userInput").value;
     //use toLowerCase(); method to determine a match regardless of letter case
     var inputL = input.toLowerCase();
     // for loop to cycle through the class of testDiv on the page
     for (var i = 0; i < onPageData.length; i++) {
         // console log to test the for loop is working
         console.log(onPageData[i].innerHTML);
         //use toLowerCase(); method to determine a match regardless of letter case
         var onPageDataL = onPageData[i].innerHTML.toLowerCase();
         //Use indexOf method to check for any part of the input string on the page
         var n = onPageDataL.indexOf(inputL);
         //conditional statement to determine a match on the page
         if (n > -1 && input !== "") {
             //functiont to automatically click the button on the page if there is a match
             document.getElementById('actionTakenButton').click();
             // add click listener to check for button click and return a message when click (for testing)
             document.getElementById('actionTakenButton').addEventListener("click", function () {
                 document.getElementById('actionDiv2').innerHTML = ("clicked!");
             });
             console.log("Pass");
             console.log(n);
         } else {
             console.log("Fail");
             console.log(n);
         }
     }
 });

 