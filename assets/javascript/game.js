// makes sure the document fully loads before the jQuery tries to interact with it
$(document).ready(function() {
    
    
    // Variables 
    var randomNumber = 0; 
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
    
    // Drying out generateJewelValues function
    function generateJewelValues() {
        for 
    }





    //function generateJewelValues() {
        jewel1 = Math.floor((Math.random() * jewelMax) + jewelMin);
        jewel2 = Math.floor((Math.random() * jewelMax) + jewelMin);
        jewel3 = Math.floor((Math.random() * jewelMax) + jewelMin);
        jewel4 = Math.floor((Math.random() * jewelMax) + jewelMin);
    };
    
    // each time a crystal is clicked it will be added to the sumofGuesses
    function jewelClicks() {
        $("#jewel1").click(function () {
            sumOfGuesses += jewel1;
            $("#sumOfGuesses").text(sumOfGuesses);
            console.log(jewel1);
            console.log(sumOfGuesses);
            numberCheck();
        });
        $("#jewel2").click(function () {
            sumOfGuesses += jewel2;
            $("#sumOfGuesses").text(sumOfGuesses);
            console.log(jewel2);
            console.log(sumOfGuesses);
            numberCheck();
        });
        $("#jewel3").click(function () {
            sumOfGuesses += jewel3;
            $("#sumOfGuesses").text(sumOfGuesses);
            console.log(jewel3);
            console.log(sumOfGuesses);
            numberCheck();
        });
        $("#jewel4").click(function () {
            sumOfGuesses += jewel4;
            $("#sumOfGuesses").text(sumOfGuesses);
            console.log(jewel4);
            console.log(sumOfGuesses);
            numberCheck();
        });
    };
    
    function resetGame() {
        $("#sumOfGuesses").text("0");
        generateRandomNumber();
        generateJewelValues();
        sumOfGuesses = 0;
    };
    
    function numberCheck() {



        if (sumOfGuesses === randomNumber) {
            // Have an HTML element created that says you are a winner instead of a pop up
            // Add one to the win column
            wins++;
            // Update the html of wins
            $("#wins").text(wins);
            $("#user-instructions").html("<h2> You won! Try again! </h2>")
            // Have a you win image pop up 

            // Reset values for the player to play again
            resetGame();
        } 
        if (sumOfGuesses > randomNumber) {
            // Have an HTML element created that says you lose instead of a pop up
            losses++;
            $("#losses").text(losses);
            $("#user-instructions").html("<h2> You lost!!! Redeem yourself by trying again! </h2>")
            resetGame();
        } else  $("#user-instructions").html("<h2> You need more Jewel's keep guessing!</h2>")
    };
    


//Function Calls

generateRandomNumber();
generateJewelValues();
jewelClicks();


}); // Document ready closing



