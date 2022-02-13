function calculate(evt) {
    evt.preventDefault();
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var oprator = document.getElementById('op').value;

    if (oprator=='add') {
        var answer = Number(num1) + Number(num2);
    } 
    if (oprator=='mtp') {
        var answer = num1 * num2;
    }
    if (oprator=='dvd') {
        var answer = num1 / num2;
    }
    if (oprator=='sub') {
        var answer = num1 - num2;
    }

    var answerString = 'YOUR ANSWER IS: '+answer;
    var answerElement = document.getElementById('ans');
    answerElement.innerText = answerString;

}

var calcForm = document.getElementById('myForm');
calcForm.addEventListener('submit',calculate)