document.addEventListener('DOMContentLoaded', function () {
    const aboutMeBtn = document.getElementById('aboutMeBtn');
    const aboutMeModal = document.getElementById('aboutMeModal');
    const closeAboutMe = document.getElementById('closeAboutMe');
    aboutMeBtn.onclick = () => aboutMeModal.style.display = 'block';
    closeAboutMe.onclick = () => aboutMeModal.style.display = 'none';
    window.onclick = (event) => {
        if (event.target === aboutMeModal) aboutMeModal.style.display = 'none';
    };
});