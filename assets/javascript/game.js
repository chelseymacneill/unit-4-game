// makes sure the document fully loads before the jQuery tries to interact with it
$(document).ready(function() {
    
    
    // Variables 
    const randomNumber = 0; 
    const randomNumberMax = 120;
    const randomNumberMin = 19;
    var sumOfGuesses = 0; 
    var jewel1 = 0;
    var jewel2 = 0;
    var jewel3 = 0;
    var jewel4 = 0;
    const jewelMax = 12;
    const jewelMin = 1;
    var wins = 0;
    var losses = 0;
    
    // Functions 
    
    function generateRandomNumber() {
        randomNumber = Math.floor((Math.random() * randomNumberMax) + randomNumberMin);
        //to print random number
        console.log(randomNumber);
        $("#randomNumber").text(randomNumber);
    };
    
    function generateJewelValues() {
        jewel1 = Math.floor((Math.random() * jewelMax) + jewelMin);
        jewel2 = Math.floor((Math.random() * jewelMax) + jewelMin);
        jewel3 = Math.floor((Math.random() * jewelMax) + jewelMin);
        jewel4 = Math.floor((Math.random() * jewelMax) + jewelMin);
    };
    
    // each time a crystal is clicked it will be added to the sumofGuesses
    function jewelClicks() {
        $("#jewel1").click(function () {
            sumOfGuesses += jewel1;
            $("#sumofGuesses").text(sumOfGesses);
            console.log(jewel1);
            //numberCheck();
        });
        $("#jewel2").click(function () {
            sumOfGuesses += jewel2;
            $("#sumofGuesses").text(sumOfGesses);
            console.log(jewel2);
            //numberCheck();
        });
        $("#jewel3").click(function () {
            sumOfGuesses += jewel3;
            $("#sumOfGuesses").text(sumOfGesses);
            console.log(jewel3);
            //numberCheck();
        });
        $("#jewel4").click(function () {
            sumOfGuesses += jewel4;
            $("#sumOfGuesses").text(sumOfGesses);
            console.log(jewel4);
            //numberCheck();
        });
    };
    
    function resetGame() {
        $("#totalScore").empty();
        generateRandomNumber();
        generateJewelValues();
        randomNumber= 0;
    };
    
    function numberCheck() {
        if (sumOfGuesses === randomNum) {
            // Have an HTML element created that says you are a winner instead of a pop up
            alert("You're a winner!");
            wins++;
            $("#wins").text(wins);
            resetGame();
        }
        if (totalScore > randomNum) {
            // Have an HTML element created that says you lose instead of a pop up
            alert("No Jewel for you!");
            losses++;
            $("#losses").text(losses);
            resetGame();
        }
    };
    
}); // Document ready closing

//Function Calls

generateRandomNumber();
generateJewelValues();
jewelClicks()

