"use strict";

import webpTest from './webpTest';

webpTest();

document.addEventListener("DOMContentLoaded", function () {

const header = document.getElementById('header');
const html = document.getElementById('html');

function disableScroll() {
	html.style.overflowX = 'hidden';
	html.style.overflowY = 'hidden';
};

function enableScroll() {
	html.style.overflowX = 'hidden';
	html.style.overflowY = 'scroll';
};

const searchOpen = document.getElementById('searchOpen')
const searchClose = document.getElementById('searchClose')

searchOpen.addEventListener('click', function() {
	header.classList.add('search')
})

searchClose.addEventListener('click', function() {
	header.classList.remove('search')
})

const searchForm = document.getElementById('searchForm')

searchForm.addEventListener('submit', function(ev) {
	ev.preventDefault();
	const searchInput = searchForm.querySelector('input');
	const inputValue = searchInput.value;
	console.log(inputValue)
	window.location.href = `/search?search=${inputValue}`
})

const burgerOpen = document.getElementById('burgerOpen')
const burgerClose = document.getElementById('burgerClose')

burgerOpen.addEventListener('click', function() {
	header.classList.add('menu')
	disableScroll()
})

burgerClose.addEventListener('click', function() {
	header.classList.remove('menu')
	enableScroll()
})

});