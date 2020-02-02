let num = 37555;

function setup() {
    noCanvas();

    let bot = new RiveScript();
    bot.loadFile("brain.rive", brainReady, brainError);

    function brainReady() {
        console.log("Chatbot ready")
    };

    function brainError() {
        console.log("Chatbot error")
    }



    let button = select("#submit");
    let user_input = select("#user_input", loading);
    let output = select("#output");

    button.mousePressed(chat);

    function chat() {
        let input = user_input.value();
        output.html(input);
    }
}