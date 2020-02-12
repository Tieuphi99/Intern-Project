var user_name = localStorage.getItem('username');
localStorage.removeItem('point');
var point = 0;
localStorage.setItem('point', point);
console.log(localStorage.getItem('username'))
if (user_name === null) {
    localStorage.removeItem('username')
    user_name = prompt('Enter your name:');
    localStorage.setItem('username', user_name);
    while (user_name == '') {
        user_name = prompt('Your name is required. Please enter your name:');
        localStorage.setItem('username', user_name);
    }
    confirm(localStorage.getItem('username') + ', are you ready?');
} else {
    confirm(localStorage.getItem('username') + ', are you ready?');
}
