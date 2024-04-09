/*--------------------------typing animation-------------------*/
var typed = new Typed(".typing",{
    strings:["","Web Designer","Web Developer","Graphic Designer","YouTuber"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})



// const navItems = document.querySelectorAll('aside ul li a');
// const contentSections = document.querySelectorAll('.content');

// navItems.forEach(item => {
//     item.addEventListener('click', function(event) {
//         event.preventDefault();
//         const targetId = event.target.id + 'content';

//         contentSections.forEach(section => {
//             section.style.display = 'none';
//         });

//         document.getElementById(home).style.display = 'block';
//     });
// });


// document.getElementById(targetId).style.display = 'block';


// document.addEventListener("DOMContentLoaded", function() {
//     // Get all navigation links
//     var navLinks = document.querySelectorAll('.nav a');

//     // Get all sections
//     var sections = document.querySelectorAll('.section');

//     // Add click event listeners to each navigation link
//     navLinks.forEach(function(link) {
//         link.addEventListener('click', function(event) {
//             // Prevent default link behavior
//             event.preventDefault();

//             // Get the target section id from the href attribute
//             var targetId


        

// Function to show content based on the clicked navigation item
function showContent(sectionId) {
    // Hide all content sections
    var allSections = document.querySelectorAll('.section');
    allSections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected content
    var selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}

// Initially show the home section
document.addEventListener('DOMContentLoaded', function() {
    showContent('home');
});
