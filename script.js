class mastermind {
    constructor() {
        this.secretCode = this.generateSecretCode();
        this.turn = 0
        this.playerAttempt = [];
        this.feedbackPegs = {};
        this.attemptHistory = [];
        this.matchedGuesses = [];
        this.attemptSubmissionListener();
    }

    //WOrking on issues here
    updateHistory() {
        let totalPegs = this.attemptHistory[this.turn].feedback.black + this.attemptHistory[this.turn].feedback.white;

        for (totalPegs; totalPegs > this.attemptHistory[this.turn].feedback.black; totalPegs--){
            document.getElementById(`results-${this.turn}-${totalPegs}`).innerHTML = 'white';
        }
        for (totalPegs; totalPegs > 0; totalPegs--) {
            document.getElementById(`results-${this.turn}-${totalPegs}`).innerHTML = 'black';
        }
        for (let colorHistory = 0; colorHistory < 4; colorHistory++) {
            console.log(this.turn);
            console.log(colorHistory);
            console.log(this.attemptHistory[this.turn].playerAttempt[colorHistory]);
            document.getElementById(`attempt-${this.turn}-${colorHistory + 1}`).innerHTML = `${this.attemptHistory[this.turn].playerAttempt[colorHistory]}`;
        }
    }
    
    submissionAndFeedback() {
        this.feedbackPegs = {black : 0, white: 0};
        this.matchedGuesses = [false, false, false, false];
        this.getPlayerAttempt();
        this.compareForBlackPegs();
        this.compareForWhitePegs();
        
        let turnHistory = {
            turn : this.turn,
            feedback : {...this.feedbackPegs},
            playerAttempt : [...this.playerAttempt]
        };
        this.attemptHistory.push(turnHistory);
        this.updateHistory();
        this.turn++;
        console.log(this.attemptHistory);
        if (this.feedbackPegs.black === 4){
            console.log('You Win!')
        }
    }
    
    attemptSubmissionListener() {
        const submissionButton = document.getElementById('submissionButton');
        submissionButton.addEventListener("click", this.submissionAndFeedback.bind(this));
    }

    generateSecretCode() {
        const colors = ['black', 'white', 'green', 'yellow', 'red', 'blue'];
        let code = [];
        for (let i = 0; i < 4; i++) {
            let randomColor = Math.floor(Math.random() * 6);
            code.push(colors[randomColor]);
        }
        return code;
    }
    
    getPlayerAttempt() {
        const colorOne = document.getElementById('color-1');
        const colorTwo = document.getElementById('color-2');
        const colorThree = document.getElementById('color-3');
        const colorFour = document.getElementById('color-4');
        this.playerAttempt = [colorOne.value, colorTwo.value, colorThree.value, colorFour.value];
    }

    compareForBlackPegs() {
        for (let i = 0; i < 4; i++) {
            if(this.playerAttempt[i] === this.secretCode[i]){
                this.feedbackPegs.black++;
                this.matchedGuesses[i] = true;
            }
        }
    }

    compareForWhitePegs() {
        for (let codeIndex = 0; codeIndex < 4; codeIndex++) {
            if (!this.matchedGuesses[codeIndex]) {
                for (let attemptIndex = 0; attemptIndex < 4; attemptIndex++){
                    if (!this.matchedGuesses[attemptIndex]){
                        if (this.secretCode[codeIndex] === this.playerAttempt[attemptIndex]) {
                            this.feedbackPegs.white++;
                            this.matchedGuesses[attemptIndex] = true;
                            break;
                        }
                    }
                }
            }    
        }
    }
}
const game = new mastermind();