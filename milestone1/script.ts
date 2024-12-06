const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

// Check if elements exist before adding the event listener
if (toggleSkillsButton && skillsSection) {
    // Initialize skills' display state if not explicitly set in CSS
    if (window.getComputedStyle(skillsSection).display === 'none') {
        skillsSection.style.display = 'none';
    }

    toggleSkillsButton.addEventListener('click', () => {
        // Toggle the display between 'none' and 'block'
        const isHidden = skillsSection.style.display === 'none';
        skillsSection.style.display = isHidden ? 'block' : 'none';

        // Update accessibility attribute
        toggleSkillsButton.setAttribute('aria-expanded', isHidden.toString());
    });
}
