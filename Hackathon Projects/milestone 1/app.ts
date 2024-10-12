// Get references to the "Add More Skills" button and its container
const addMoreSkillsBtn = document.getElementById('addMoreSkillsBtn') as HTMLButtonElement;
const addMoreSkills = document.getElementById('addMoreSkills') as HTMLElement;

// Event listener to toggle visibility of the skills input section
addMoreSkillsBtn.addEventListener('click', (event: MouseEvent) => {
    event.preventDefault(); 
    addMoreSkills.classList.toggle('hidden');
});

