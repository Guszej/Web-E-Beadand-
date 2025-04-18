function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(div => {
        div.classList.remove('active');
    });

    document.getElementById(sectionId).classList.add('active');
}