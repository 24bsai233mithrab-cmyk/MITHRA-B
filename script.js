// Insert current year in footer

document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scroll to projects

document.querySelector(".btn").addEventListener("click", function(e) {

    e.preventDefault();

    document.querySelector("#projects").scrollIntoView({
        behavior: "smooth"
    });

});

// Contact form

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    alert("Thank you! Your details were captured.");

    form.reset();

});