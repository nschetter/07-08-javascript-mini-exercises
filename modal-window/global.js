
var navLink = document.getElementsByTagName('nav')[0].getElementsByTagName('li');

for (var i = 0; i<navLink.length; i++) {
    navLink[i].addEventListener('click', displayModal);
    var hrefArray = navLink[i].childNodes[1].getAttribute('href').slice(1);
}

var buttonExit = document.getElementsByClassName('exit-button');
buttonExit.addEventListener('click', exit_modal);
var divWrapper = document.getElementById('wrapper');
var divModal = divWrapper.getElementsByClassName('modal');


function displayModal() {
    var content_id = this.childNodes[1].getAttribute('href').slice(1);
    for (var i = 0; i<navLink.length; i++) {
        divModal[i].style.display = 'none';
    }
    document.getElementById(content_id).style.display = 'block';
}

function exit_modal() {

}