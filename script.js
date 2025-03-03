//DON'T TOUCH IT!!! PAGE CHANGING JS*/
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById('home').style.display = 'block';
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}
/*DON'T TOUCH IT!!!*/

/*Footer year js*/
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;
