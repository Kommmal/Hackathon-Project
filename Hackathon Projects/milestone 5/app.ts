// Get references to the "Add More Skills" button and its container
const addMoreSkillsBtn = document.getElementById(
  "addMoreSkillsBtn"
) as HTMLButtonElement;
const addMoreSkills = document.getElementById("addMoreSkills") as HTMLElement;

// Event listener to toggle visibility of the skills input section
addMoreSkillsBtn.addEventListener("click", (event: MouseEvent) => {
  event.preventDefault();
  addMoreSkills.classList.toggle("hidden");
});

// Get references to the form and content elements
const resumeForm = document.getElementById("resume-form") as HTMLFormElement;
const resumeContentElememt = document.getElementById(
  "resume-content"
) as HTMLDivElement;
const downloadPdfButton = document.getElementById(
  "download-copylink-btn"
) as HTMLButtonElement;

// Event listener for form submission
resumeForm.addEventListener("submit", (event: Event) => {
  event.preventDefault(); // Prevent default form submission behavior

  // Get input values from the form
  const userImage = document.getElementById("userImage") as HTMLInputElement;
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const dateofbirth = (
    document.getElementById("Dateofbirth") as HTMLInputElement
  ).value;
  const phone = (document.getElementById("phoneNumber") as HTMLInputElement)
    .value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const institude = (document.getElementById("institude") as HTMLInputElement)
    .value;
  const degree = (document.getElementById("degree") as HTMLInputElement).value;
  const passing = (document.getElementById("passing-year") as HTMLInputElement)
    .value;
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
    if (resumeContentElememt) {
      resumeContentElememt.innerHTML = resumeContent;
      resumeContentElememt.style.display = "block"; // Show the resume content
      // resumeForm.style.display = 'none';
    } else {
      console.error("resume content element is missing");
    }
  }

  

  const clickbutton = document.getElementById(
    "download-copylink-btn"
  ) as HTMLDivElement;
  // clickbutton.id="clickbutton";
  resumeContentElememt.appendChild(clickbutton);

  const download = document.getElementById("download-btn") as HTMLElement;
  // download.textContent="DOWNLOAD AS PDF";
  download.addEventListener("click", () => {
    resumeForm.style.display = "none";
    downloadPdfButton.style.display = "none";
    window.print();
  });
  
  // Show the download button if resume content exists
  if (resumeContentElememt) {
    downloadPdfButton.style.display = "inline"; // Make the button visible
  } else {
    downloadPdfButton.style.display = `none`;  //This line will not execute as resumeContentElememt is guaranteed to exist here
  }


  const shareLINK = document.getElementById("generate-link-btn") as HTMLElement;
  shareLINK.addEventListener("click", async () => {
    try {
      const shareableLink = `https://yourdomain.com/resumes/${name.replace(
        /\s+/g,
        "_"
      )}_cv.html`;
      await navigator.clipboard.writeText(shareableLink);
      alert("LINK COPIED TO CLIPBOARD!");
    } catch (err) {
      console.error("FAILED TO COPY LINK:", err);
      alert("FAILED TO COPY LINK TO CLIPBOARD,PLEASE TRY AGAIN IN A MOMENT");
    }
  });
  clickbutton.appendChild(shareLINK);
});
