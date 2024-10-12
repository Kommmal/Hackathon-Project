var addMoreSkillsBtn = document.getElementById('addMoreSkillsBtn');
var addMoreSkills = document.getElementById('addMoreSkills');
addMoreSkillsBtn.addEventListener('click', function (event) {
    event.preventDefault();
    addMoreSkills.classList.toggle('hidden');
});
var resumeForm = document.getElementById("resume-form");
var resumeContentElememt = document.getElementById("resume-content");
var downloadPdfButton = document.getElementById('download-pdf');
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
        var resumeContent = "\n<img src=\"".concat(uploadedImageURL, "\" alt=\"Profile Picture\" />\n<h1 style=\"text-align:left;\">").concat(name, "</h1>\n<h2>Personal Details</h2>\n<p><strong>Date Of Birth:</strong> ").concat(dateofbirth, "</p>\n<p><strong>Email:</strong>").concat(email, "</p>\n<p><strong>Phone Number:</strong> ").concat(phone, "</p> \n<h2>Education:</h2>\n<p><strong>Institude Name:</strong> ").concat(institude, "</p>\n<p><strong>Degree:</strong> ").concat(degree, "</p>\n<p><strong>Passing Year:</strong>").concat(passing, "</p>\n<h2>Work Experience:</h2>\n<p>").concat(work, "</p>\n<h2>Skills:</h2>\n<p>").concat(skill1, "</p>\n<p>").concat(skill2, "</p>\n<p>").concat(skill3, "</p>\n<p>").concat(skill4, "</p>\n<p>").concat(skill5, "</p>\n<p>").concat(skill6, "</p>\n");
        if (resumeContentElememt) {
            resumeContentElememt.innerHTML = resumeContent;
            resumeContentElememt.style.display = 'block';
        }
        else {
            console.error("resume content element is missing");
        }
    }
    downloadPdfButton.addEventListener('click', function () {
        window.print();
    });
});
