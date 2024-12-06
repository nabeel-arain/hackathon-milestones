// Selecting the form and resume display elements
const form = document.getElementById("resume-form");
const resumeDisplay = document.getElementById('resume-display');

// Event listener for form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('Phone').value;
    const education = document.getElementById('Education').value;
    const experience = document.getElementById('Experience').value;
    const skills = document.getElementById('Skills').value;

    // Generate resume content
    const resumeContent = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <hr>
        <h3>Education</h3>
        <p>${education.replace(/\n/g, '<br>')}</p>
        <hr>
        <h3>Experience</h3>
        <p>${experience.replace(/\n/g, '<br>')}</p>
        <hr>
        <h3>Skills</h3>
        <p>${skills.replace(/\n/g, '<br>')}</p>
    `;

    // Display resume
    resumeDisplay.innerHTML = resumeContent;
});

