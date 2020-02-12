var time_left = 10;
var timing = setInterval(function () {

    document.getElementById("timer").innerHTML = time_left;
    time_left -= 1;

    if (time_left < 0) {
        clearInterval(timing);
        document.getElementById("timer-wrapper").style.borderColor = "red";
        open('/quiz-fail/quiz-fail.html', '_self');
    }
}, 1000);

const firstbtn = document.getElementById("first-answer");
const secondbtn = document.getElementById("second-answer");
const thirdbtn = document.getElementById("third-answer");
const forthbtn = document.getElementById("forth-answer");
const point = document.getElementById("point");
point.innerHTML = localStorage.getItem('point');
var point_gain;
if (localStorage.getItem('point')) {
    point_gain = parseInt(localStorage.getItem('point'));
} else {
    point_gain = 0;
}

function correct() {
    open('/quiz-success/quiz-success.html', '_self');
    point_gain += 100;
    localStorage.setItem('point', point_gain);
    point.innerHTML = localStorage.getItem('point');
    console.log(point);
}

function wrong() {
    open('/quiz-fail/quiz-fail.html', '_self');
}

firstbtn.addEventListener('click', wrong);
secondbtn.addEventListener('click', wrong);
thirdbtn.addEventListener('click', correct);
forthbtn.addEventListener('click', wrong);
