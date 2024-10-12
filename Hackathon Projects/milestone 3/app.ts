// Get references to the "Add More Skills" button and its container
const addMoreSkillsBtn = document.getElementById('addMoreSkillsBtn') as HTMLButtonElement;
const addMoreSkills = document.getElementById('addMoreSkills') as HTMLElement;

// Event listener to toggle visibility of the skills input section
addMoreSkillsBtn.addEventListener('click', (event: MouseEvent) => {
    event.preventDefault(); 
    addMoreSkills.classList.toggle('hidden');
});

// Get references to the form and content elements
const resumeForm = document.getElementById("resume-form") as HTMLFormElement;
const resumeContentElememt = document.getElementById("resume-content") as HTMLDivElement
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

// Event listener for form submission
resumeForm.addEventListener ('submit', (event: Event) => {
    event.preventDefault();// Prevent default form submission behavior

  // Get input values from the form
    const userImage = document.getElementById("userImage") as HTMLInputElement;
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const dateofbirth = (document.getElementById("Dateofbirth") as HTMLInputElement).value
    const phone =(document.getElementById("phoneNumber") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const institude = (document.getElementById("institude") as HTMLInputElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const passing = (document.getElementById("passing-year") as HTMLInputElement).value;
    const work = (document.getElementById("work") as HTMLInputElement).value;
    const skill1 = (document.getElementById("skills1") as HTMLInputElement).value;
    const skill2 = (document.getElementById("skills2") as HTMLInputElement).value;
    const skill3 = (document.getElementById("skills3") as HTMLInputElement).value;
    const skill4 = (document.getElementById("skills4") as HTMLInputElement).value;
    const skill5 = (document.getElementById("skills5") as HTMLInputElement).value;
    const skill6 = (document.getElementById("skills6") as HTMLInputElement).value;

// Check if a user image is uploaded
if (userImage.files && userImage.files[0]) {
  // Create a URL for the uploaded image
  const uploadedImageURL = URL.createObjectURL(userImage.files[0]);

// Construct the HTML content for the resume
const resumeContent = `
<img src="${uploadedImageURL}" alt="Profile Picture" />
<h1 style="text-align:left;">${name}</h1>
<h2>Personal Details</h2>
<p><strong>Date Of Birth:</strong> ${dateofbirth}</p>
<p><strong>Email:</strong>${email}</p>
<p><strong>Phone Number:</strong> ${phone}</p> 
<h2>Education:</h2>
<p><strong>Institude Name:</strong> ${institude}</p>
<p><strong>Degree:</strong> ${degree}</p>
<p><strong>Passing Year:</strong>${passing}</p>
<h2>Work Experience:</h2>
<p>${work}</p>
<h2>Skills:</h2>
<p>${skill1}</p>
<p>${skill2}</p>
<p>${skill3}</p>
<p>${skill4}</p>
<p>${skill5}</p>
<p>${skill6}</p>
`;

 // Update the resume content element with the generated HTML
if(resumeContentElememt){
    resumeContentElememt.innerHTML = resumeContent;
    resumeContentElememt.style.display = 'block';// Show the resume content
}
else{
    console.error("resume content element is missing")
}
}
})

