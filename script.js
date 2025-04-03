class mastermind {
    constructor() {
        this.colors = ['black', 'white', 'green', 'yellow', 'red', 'blue'];
        this.secretCode = this.generateSecretCode();
        this.playerAttempt =[];
        this.attemptSubmissionListener();
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
        
    }
//note to self. Plan: when the button is pushed is when the dropdowns should be read and made into an array. Then push the array into a comparison, which pushes out the feedback
    attemptSubmissionListener() {
        const submissionButton = document.getElementById('submissionButton');
        submissionButton.addEventListener("click", this.submissionAndFeedback.bind(this));
    }
}
const game = new mastermind();