#! usr/bin/env node
var addMoreSkillsBtn = document.getElementById('addMoreSkillsBtn');
var addMoreSkills = document.getElementById('addMoreSkills');
addMoreSkillsBtn.addEventListener('click', function (event) {
    event.preventDefault();
    addMoreSkills.classList.toggle('hidden');
});
