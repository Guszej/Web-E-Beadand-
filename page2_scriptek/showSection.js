function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(div => {
        div.classList.remove('active');
    });

    // Show only the selected section
    document.getElementById(sectionId).classList.add('active');
}