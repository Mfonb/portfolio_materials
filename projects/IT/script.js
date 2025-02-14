//* getting elements from html
let socialButton =  document.getElementById("socialButton")
let socials = document.getElementById("media")

// Toggle on window click
function windowSocials() {
    window.onclick = function(event) {
        if (!event.target.matches('#socialButton')) {  // Fix target.matches syntax;

            if (socials.style.display === "grid") {
                socials.style.display = "none";  // Use assignment '=' instead of comparison '==='
                socialButton.innerHTML = 'Social Media <span id="socialsArrow"></span>';
            }
        }
    };
}

//* displaying social media options as dropdown on click of button
function toggleSocial() {
    if (socials.style.display === "none" || socials.style.display === "") {
        socials.style.display = "grid";
        socialButton.innerHTML = 'Social Media <span id="socialsArrow"></span>';
    } else {
        socials.style.display = "none"
        socialButton.innerHTML = 'Social Media <span id="socialsArrow"></span>';
    }
    //? Call windowSocials function to enable outside click detection
    windowSocials();
}

// Event listener for social button click
document.addEventListener("DOMContentLoaded", function () {
    socialButton.addEventListener("click", toggleSocial);
});