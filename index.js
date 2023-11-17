document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    if (name.trim() === '' || email.trim() === '') {
        alert('Name and email are required fields!');
        return false;
    }

    alert('Form submitted successfully!');
    return true;
}
