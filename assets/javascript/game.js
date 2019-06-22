
    //Creating array with word in it and creating a guess counter
    var word = ["JCOLE", "DRAKE", "KENDRICKLAMAR"];
    var guessleft = 15;
    var randomWord = word[Math.floor(Math.random() * word.length)];
    var emptyWord = []
    //var userkey
    var counter = 0
    var lettersUsed = []


    //function to create blank underscores based on random word length
    function createblank() {
        for(i = 0; i < randomWord.length; i++) {
            // for an array
            emptyWord.push("_ ")
            document.querySelector("#blankletters").innerHTML = emptyWord
        }

    }
    // function to check if guesses reach 0. Once they reach 0, refresh the page so user can play again
    function lose() {
        if (guessleft === 0) {
            alert("You lost. The answer was: " + randomWord)
            location.reload()           
        }
    }
    

    
    // --------------------------------------- CODE FOR GAME --------------------------------------------------------------------------------  

    // create blanks
    createblank()
    document.onkeyup = function (event) {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            userkey = event.key.toUpperCase();
            //check if that letter is already guessed...
            if (emptyWord.indexOf(userkey) === -1) {
                // replace the value in array with the userykey
                for (i = 0; i < randomWord.length; i++) {
                    if (userkey === randomWord[i]) {
                        emptyWord[i] = userkey
                        document.querySelector("#blankletters").innerHTML = emptyWord
                        counter = counter + 1
                        if (counter === randomWord.length) {
                            alert("YOU WON!!")
                            location.reload()
                        }
                    }

                }
                // reduce guuess outer after every time the user clicked key is incorrect
                var res = randomWord.split("")
                if(res.indexOf(userkey) === -1){
                guessleft = guessleft - 1
                document.querySelector("#numberofguesses").innerHTML = "Number of Guess Left :" + guessleft
                lose()

                }
            }
            // Add letter clicked to lettersused array if it is not already in there
            if (lettersUsed.indexOf(userkey) === -1) {
                lettersUsed = lettersUsed + " " + userkey
                document.querySelector("#lettersused").innerHTML = "Letters you have used:" + lettersUsed

            }

        }
    }
