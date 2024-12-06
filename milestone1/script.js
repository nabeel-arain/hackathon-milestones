var togglebutton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
// Check if elements exist before adding event listener
if (togglebutton && skills) {
    // Initialize skills' display style if it's not set
    if (skills.style.display === '') {
        skills.style.display = 'none'; // Default to hidden if not set
    }
    togglebutton.addEventListener('click', function () {
        // Toggle the display between 'none' and 'block'
        if (skills.style.display === 'none') {
            skills.style.display = 'block';
        }
        else {
            skills.style.display = 'none';
        }
    });
}
