'use strict'
console.log('Starting up');

var gProjs;
var gProjNames = ['Mine-Sweeper', 'Pacman', 'Touch-Nums']
var gServices = [
    { speciality: 'Business Development', img: 'fa-briefcase' , desc: 'Strategic partnerships with fortune 500'},
    { speciality: 'Open Innovation', img: 'fa-search', desc: 'Connecting Corporates with Israel\'s innovation ecosystem' },
    { speciality: 'Web Development', img: 'fa-laptop', desc: 'Coding academy @ 2020' }
]

function onInit() {
    createProjs();
    renderProjs();
    renderServices();
}


