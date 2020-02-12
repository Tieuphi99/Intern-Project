const point = document.getElementById('point');
point.innerHTML = localStorage.getItem('point');

function replay() {
    open('/quiz-homepage/index.html', '_self');
    localStorage.removeItem('username');
}