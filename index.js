document.addEventListener('DOMContentLoaded', function(){

console.log('are we linked up?');

// [x] select container div of HTML with JavaScript
// [x] create HTML paragraph tag "" ""
// [x] insert texgt into paragraph tag "" ""
// [] append paragraph element to selected container

let container = document.querySelector('#container');

let message = document.createElement('p');

message.innerHTML = "Hello Sweet World";

container.appendChild(message);

})