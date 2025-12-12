document.addEventListener('DOMContentLoaded', function () {

    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = this.querySelector('input[name="name"]').value.trim();
            const email = this.querySelector('input[name="email"]').value.trim();
            const message = this.querySelector('textarea[name="message"]').value.trim();

            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
});
