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
<img src="${uploadedImageURL}" alt="Profile Picture" style="width: 150px; height: 150px; border-radius:50%"/>
<h1 contenteditable="true">${name}</h1>

<h2>Personal Details</h2>

<p contenteditable="true"><strong>Date Of Birth:</strong> ${dateofbirth}</p>
<p contenteditable="true"><strong>Email:</strong>${email}</p>
<p contenteditable="true"><strong>Phone Number:</strong> ${phone}</p> 

<h2>Education:</h2>

<p contenteditable="true"><strong>Institude Name:</strong> ${institude}</p>
<p contenteditable="true"><strong>Degree:</strong> ${degree}</p>
<p contenteditable="true"><strong>Passing Year:</strong>${passing}</p>

<h2>Work Experience:</h2>

<p contenteditable="true">${work}</p>

<h2>Skills:</h2>
<ul>
<li contenteditable="true">${skill1}</li>
<li contenteditable="true">${skill2}</li>
<li contenteditable="true">${skill3}</li>
<li contenteditable="true">${skill4}</li>
<li contenteditable="true">${skill5}</li>
<li contenteditable="true">${skill6}</li>
</ul>
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

// Add event listener to detect when the user edits the resume
addEditListeners();
})

function addEditListeners() {
  const editableElements = resumeContentElememt.querySelectorAll('[contenteditable="true"]');
  
  editableElements.forEach((element) => {
      (element as HTMLElement).addEventListener('input', (event: Event) => {
          const target = event.target as HTMLElement;
          console.log(`Updated content: ${target.innerText}`);
      });
  });
}