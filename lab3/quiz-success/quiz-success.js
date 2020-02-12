const point = document.getElementById('point');
point.innerHTML = localStorage.getItem('point');

function next() {
    open('/quiz-land/quiz-land.html', '_self');
}