var today = new Date();
var hoursNow = today.getHours();
var message;

if ( hoursNow > 18) {
    message = 'Good evening!';
} else if (hoursNow > 12) {
    message = 'Good afternoon!';
} else if (hoursNow > 0) {
    message = 'Good morning';
} else {
    message = 'Welcome!';
}

var por = document.getElementById('message');
por.textContent = message;