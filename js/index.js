/*
    -------creator James Meshack feel free to call me or text me on whatsapp or normal text
    -------i build website,application,systems using different frameworks
    #####################################################################################################
    My Skills:------ Programming ,Drawing,Graphics design,Game Development 
    ###################################################################################################
    Programming language that i know and use to do all of my work
        @@@@@@ Python
        @@@@@@ Php
        @@@@@@ C
        @@@@@@ C++
        @@@@@@ C#
        @@@@@@ Javascript
        @@@@@@ Dart
    ######################################################################################################
    Frame works that i use in most of my works
        @@@@@@ Laravel
        @@@@@@ Flutter
        @@@@@@ Vue
        @@@@@@ Bootstrap
    #####################################################################################################
    Additional Skills
        @@@@@@ HTML 5
        @@@@@@ CSS 3
        @@@@@@ SASS
    Year @2021
    ######################################################################################################
    Contact Number-------@ 0622727660 / +255622727660
    You can also Email me on 'jasjastone@gmail.com'
    Thank You for viewing and happy birthday Editha #CR;❤ ❤ ❤ ❤ ❤ ❤ 
*/

// ----------------global variable declaration--------------------------------
var imagesNumber = 8;
var imagesNumberMygallary = 6;
var currentSlideNumber = 1;
var slideIndex = 1;
var row = document.createElement('div');
var row2 = document.createElement('div');
row.classList.add('row');
row.classList.add('margin-top-2');
row2.classList.add('row');
row2.classList.add('margin-top-2');
// ----------------------- end of global variables---------------------------
//----------------- special thanks image controls call the function inorder to be automatically
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}    
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
setTimeout(showSlides, 5000); // Change image every 5 seconds
}
//-----------------end of  special thanks image controls

//--------------------- header navigation bar start --------------------
//------------------ start ----for the nav menu button
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click',mobileMenu);

function mobileMenu(){
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}
const navLink = document.querySelectorAll('.nav-link');
navLink.forEach(n => n.addEventListener('click',closeMenu));
function closeMenu(){
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}
// ----------end of nav menu button

// ---------load more gallary photos
function loadMore(){
    if (imagesNumber < 12) {
        var gallerysection = document.querySelector('.gallerysection');   
        for (let index = 0; index < 4; index++) {
            const img = document.createElement('img');
            const div = document.createElement('div');
            const p = document.createElement('p');
            p.classList.add('separator');
            div.classList.add('col-md-3');
            div.classList.add('col-sm-3');
            div.classList.add('col-xs-12');
            img.setAttribute('src','./images/cake/'+(imagesNumber + (index + 1))+'.jpg');
            img.classList.add('myslides');
            div.appendChild(img);
            row.appendChild(div);
            row.appendChild(p);
        }
        imagesNumber += 4;
        gallerysection.appendChild(row);
    }
}
// --------- end of load more gallary photos

// ----------loadmore mygallary photos
function viewMore(){
    if (imagesNumberMygallary < 12) {
        var gallerysection = document.querySelector('.mygallary');   
        for (let index = 0; index < 3; index++) {
            const img = document.createElement('img');
            const div = document.createElement('div');
            const p = document.createElement('p');
            p.classList.add('separator');
            div.classList.add('col-md-4');
            div.classList.add('col-sm-4');
            div.classList.add('col-xs-12');
            img.setAttribute('src','./images/edithaphotos/mygallary/'+(imagesNumberMygallary + (index + 1))+'.jpeg');
            img.classList.add('myslides');
            div.appendChild(img);
            row2.appendChild(div);
            row2.appendChild(p);
        }
        imagesNumberMygallary += 3;
        gallerysection.appendChild(row2);
    }
}
// ----------end of loadmore mygallary photos


