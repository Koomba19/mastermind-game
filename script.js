class mastermind {
    constructor() {
        this.colors = ['black', 'white', 'green', 'yellow', 'red', 'blue'];
        this.secretCode = this.generateSecretCode();
        this.playerAttempt =[];
        this.attemptSubmissionListener();
        this.feedbackPegs = {};
    }

    generateSecretCode() {
        let code = [];
        for (let i = 0; i < 4; i++) {
            let randomColor = Math.floor(Math.random() * 6);
            code.push(this.colors[randomColor]);
        }
        return code;
    }

    submissionAndFeedback() {
        const colorOne = document.getElementById('color-1');
        const colorTwo = document.getElementById('color-2');
        const colorThree = document.getElementById('color-3');
        const colorFour = document.getElementById('color-4');
        const playerAttempt = [colorOne.value, colorTwo.value, colorThree.value, colorFour.value];
        this.feedbackPegs = {black : 0, white: 0};
        const colorCounter = {
            black : 0,
            white : 0,
            green : 0,
            yellow : 0,
            red : 0,
            blue : 0,
        };

        //black pegs
        for (let i = 0; i < 4; i++) {
            if(playerAttempt[i] === this.secretCode[i]){
                this.feedbackPegs.black++;
                playerAttempt[i] = null;
            }
        }

        //white pegs
        for (let i = 0; i < 4; i++) {
            colorCounter[this.secretCode[i]]++;
            console.log(colorCounter);
        }
        //colors are counted. Now we have to compare them to the player guesses remaining, unnulled, colors. I'm thinking that we go through the index of the player guess
        //break if it's null, then count down to zero. If the counter is already zero, we break, otherwise whitePeg++ and counter down
    }
//note to self. Plan: when the button is pushed is when the dropdowns should be read and made into an array. Then push the array into a comparison, which pushes out the feedback
    attemptSubmissionListener() {
        const submissionButton = document.getElementById('submissionButton');
        submissionButton.addEventListener("click", this.submissionAndFeedback.bind(this));
    }
}
const game = new mastermind();