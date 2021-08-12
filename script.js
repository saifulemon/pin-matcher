const generatePin = document.getElementById('generate-pin');
generatePin.addEventListener('click', pinNumberGenerate)

let currentPin = document.getElementById('current-pin');

let matchPinNUm = document.getElementById('match-pin');

const submitResult = document.getElementById('submit');
submitResult.addEventListener('click', function(){
    console.log(nowNumber, nowPin);
    if (nowNumber == nowPin) {
        document.getElementById('matchedPin').style.display = 'block';
    }
    else{
        document.getElementById('wrongPin').style.display = 'block';
    }
})

// for pin number match
let nowNumber = 0;
function number(result) {
    let resultNum = result.innerHTML;
    matchPinNUm.value += resultNum;
    nowNumber = matchPinNUm.value;
}

// for backspace
 function backspc() {
    let rekensom  = matchPinNUm.value;
    matchPinNUm.value = rekensom.substring(0, rekensom.length -1);
}

// for all clear
function remv() {
    matchPinNUm.value = null;
}

// for pin number generate  
let nowPin = 0;
function pinNumberGenerate() {
    const masterPin = Math.random() * 9999;
    const roundNumber = Math.round(masterPin);
    currentPin.value = roundNumber;
    nowPin = roundNumber;
}
