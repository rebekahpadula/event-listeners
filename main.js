// GO!get
// #1

var nav = document.querySelector('.nav-menu');
var hidden = document.querySelector('.nav-menu-hidden');
var button = document.querySelector('#button');

button.addEventListener('click', function (e) {
    if (nav.classList.contains('nav-menu')) {
        nav.classList.remove('nav-menu');
        nav.classList.add('nav-menu-hidden');
        button.textContent = 'show nav';
    } else {
        nav.classList.remove('nav-menu-hidden');
        nav.classList.add('nav-menu');
        button.textContent = 'hide nav';
    }
});

var answer = document.querySelector('#add-guest .answer-box');
answer.innerHTML = '<input class="first-input">' + answer.innerHTML;
var list = document.querySelector('.guest-list');
var input = document.querySelector('.first-input');

input.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        list.innerHTML += '<li class = "guest">' + input.value + '</li>';
        input.value = '';
    }
});

var input2 = document.querySelector('#add-guest-bonus input');
var list2 = document.querySelector('#add-guest-bonus .guest-list');
// answer2.innerHTML = '<input class="guest">' + input.value;

list2.addEventListener('click', function (e) {
    if (e.target.matches('button')) {
        e.target.parentElement.parentElement.removeChild(e.target.parentElement);
    }
});
input2.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        list2.innerHTML += '<li class = "guest">' + input2.value + '<button>X</button>' + '</li>';
        input2.value = '';
    }
});
