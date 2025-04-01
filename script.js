class mastermind {
    constructor() {
        this.colors = ['black', 'white', 'green', 'yellow', 'red', 'blue'];
        this.secretCode = this.generateSecretCode();
    }

    generateSecretCode() {
        let code = [];
        for (let i = 0; i < 4; i++) {
            let randomColor = Math.floor(Math.random() * 6);
            code.push(this.colors[randomColor]);
        }
        return code;
    }
}
const game = new mastermind();