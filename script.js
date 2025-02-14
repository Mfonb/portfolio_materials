//* getting elements from html
let socialButton =  document.getElementById("socialButton")
let socials = document.getElementById("media")

let btnProjects = document.getElementById("btnProjects")
let projects = document.getElementById("projects")

let togglebtnAcademics = document.getElementById("togglebtnAcademics")
let academics = document.getElementById("academics")

let togglebtnExperience = document.getElementById("togglebtnExperience")
let experience = document.getElementById("experience")

let btnResume = document.getElementById("btnResume")
let resume = document.getElementById("resume")
let resume2 = document.getElementById("resume2")
//let hidden = document.getElementsByClassName("hidden")

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

//* function to toggle Academics section
//function toggleInfoAcademics() {
  //  if (academics.style.display === "none" || academics.style.display === "") {
    //    academics.style.display = "grid";
      //  togglebtnAcademics.innerHTML = 'Academics     ▲';
    //} else {
      //  academics.style.display = "none";
        //togglebtnAcademics.innerHTML = 'Academics     ▼';
    //}
//}


//* function to toggle Experience section
//function toggleInfoExperience() {
  //  if (experience.style.display === "none" || experience.style.display === "") {
    //    experience.style.display = "grid";
      //  togglebtnExperience.innerHTML = 'Experience     ▲';
    //} else {
      //  experience.style.display = "none";
        //togglebtnExperience.innerHTML = 'Experience     ▼';
   // }
//}

// Toggle on window click
function windowProjects() {
    window.onclick = function(event) {
        if (!event.target.matches('#btnProjects')) {  // Fix target.matches syntax;

            if (projects.style.display === "grid") {
                projects.style.display = "none";  // Use assignment '=' instead of comparison '==='
                btnProjects.innerHTML = 'Projects       ▼';
            }
        }
    };
}

//* displaying social media options as dropdown on click of button
function toggleProjects () {
    if (projects.style.display === "none" || projects.style.display === "") {
        projects.style.display = "grid";
        btnProjects.innerHTML = 'Projects       ▲';
    } else {
        projects.style.display = "none"
        btnProjects.innerHTML = 'Projects       ▼';
    }

    windowProjects()
}

// Function to close resume sections when clicking outside
function windowResume(event) {
    if (
        !btnResume.contains(event.target) &&
        !resume.contains(event.target) &&
        !resume2.contains(event.target)
    ) {
        resume.classList.add("hidden");
        resume2.classList.add("hidden");
        btnResume.innerHTML = 'Resume ▼';
        document.removeEventListener("click", windowResume); // Remove event listener after closing
    }
}

// Function to toggle resume sections
function toggleResumeSections(event) {
    if (event) event.stopPropagation(); // Ensure event is defined before calling stopPropagation()

    let isHidden = resume.classList.contains("hidden") && resume2.classList.contains("hidden");

    if (isHidden) {
        resume.classList.remove("hidden");
        resume.classList.add("show");
        resume2.classList.remove("hidden");
        resume2.classList.add("show");
        btnResume.innerHTML = 'Resume ▲';
        // Add event listener to detect clicks outside the resume area
        setTimeout(() => document.addEventListener("click", windowResume), 100);
    } else {
        resume.classList.add("hidden");
        resume2.classList.add("hidden");
        btnResume.innerHTML = 'Resume ▼';
        document.removeEventListener("click", windowResume); // Remove event listener after closing
    }
}

// Calculating resume file size
document.addEventListener("DOMContentLoaded", function () {
    let resumeFile = "files/andrew_brown_MCV.docx"; // File path
    let resumeSizeElement = document.getElementById("resume2");

    // Use fetch API to get file size
    fetch(resumeFile, { method: "HEAD" })
        .then(response => {
            let fileSize = response.headers.get("Content-Length"); // Get file size in bytes

            if (fileSize) {
                let sizeInKB = (fileSize / (1000)).toFixed(2); // Convert to MB
                resumeSizeElement.textContent = `File size: ${sizeInKB} KB`;
                //resumeSizeElement.textContent = `File size: ${sizeInMB} MB`;
            } else {
                resumeSizeElement.textContent = "File size: Unknown";
            }
        })
        .catch(error => {
            console.error("Error fetching file size:", error);
            resumeSizeElement.textContent = "File size: Unavailable";
        });
});

// Event listener for social button click
document.addEventListener("DOMContentLoaded", function () {
    socialButton.addEventListener("click", toggleSocial);
    btnProjects.addEventListener("click", toggleProjects);
    //togglebtnAcademics.addEventListener("click", toggleInfoAcademics);
    //togglebtnExperience.addEventListener("click", toggleInfoExperience);
});

document.addEventListener("DOMContentLoaded", function () {
    btnResume.addEventListener("click", function () {
        toggleResumeSections();
    });
});