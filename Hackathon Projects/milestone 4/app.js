var addMoreSkillsBtn = document.getElementById('addMoreSkillsBtn');
var addMoreSkills = document.getElementById('addMoreSkills');
addMoreSkillsBtn.addEventListener('click', function (event) {
    event.preventDefault();
    addMoreSkills.classList.toggle('hidden');
});
var resumeForm = document.getElementById("resume-form");
var resumeContentElememt = document.getElementById("resume-content");
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var userImage = document.getElementById("userImage");
    var name = document.getElementById("name").value;
    var dateofbirth = document.getElementById("Dateofbirth").value;
    var phone = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;
    var institude = document.getElementById("institude").value;
    var degree = document.getElementById("degree").value;
    var passing = document.getElementById("passing-year").value;
    var work = document.getElementById("work").value;
    var skill1 = document.getElementById("skills1").value;
    var skill2 = document.getElementById("skills2").value;
    var skill3 = document.getElementById("skills3").value;
    var skill4 = document.getElementById("skills4").value;
    var skill5 = document.getElementById("skills5").value;
    var skill6 = document.getElementById("skills6").value;
    // if(!name || !email || !education ||!work || ! skills){
    //     alert("PLease fill out all fields")
    // }
    if (userImage.files && userImage.files[0]) {
        // Create a URL for the uploaded image
        var uploadedImageURL = URL.createObjectURL(userImage.files[0]);
        var resumeContent = "\n<img src=\"".concat(uploadedImageURL, "\" alt=\"Profile Picture\" style=\"width: 150px; height: 150px; border-radius:50%\"/>\n<h1 contenteditable=\"true\">").concat(name, "</h1>\n\n<h2>Personal Details</h2>\n\n<p contenteditable=\"true\"><strong>Date Of Birth:</strong> ").concat(dateofbirth, "</p>\n<p contenteditable=\"true\"><strong>Email:</strong>").concat(email, "</p>\n<p contenteditable=\"true\"><strong>Phone Number:</strong> ").concat(phone, "</p> \n\n<h2>Education:</h2>\n\n<p contenteditable=\"true\"><strong>Institude Name:</strong> ").concat(institude, "</p>\n<p contenteditable=\"true\"><strong>Degree:</strong> ").concat(degree, "</p>\n<p contenteditable=\"true\"><strong>Passing Year:</strong>").concat(passing, "</p>\n\n<h2>Work Experience:</h2>\n\n<p contenteditable=\"true\">").concat(work, "</p>\n\n<h2>Skills:</h2>\n<ul>\n<li contenteditable=\"true\">").concat(skill1, "</li>\n<li contenteditable=\"true\">").concat(skill2, "</li>\n<li contenteditable=\"true\">").concat(skill3, "</li>\n<li contenteditable=\"true\">").concat(skill4, "</li>\n<li contenteditable=\"true\">").concat(skill5, "</li>\n<li contenteditable=\"true\">").concat(skill6, "</li>\n</ul>\n");
        if (resumeContentElememt) {
            resumeContentElememt.innerHTML = resumeContent;
            resumeContentElememt.style.display = 'block';
        }
        else {
            console.error("resume content element is missing");
        }
    }
    // Add event listener to detect when the user edits the resume
    addEditListeners();
});
function addEditListeners() {
    var editableElements = resumeContentElememt.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach(function (element) {
        element.addEventListener('input', function (event) {
            var target = event.target;
            console.log("Updated content: ".concat(target.innerText));
        });
    });
}
