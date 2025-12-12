document.addEventListener('DOMContentLoaded', function () {

    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = this.querySelector('input[name="name"]').value.trim();
            const email = this.querySelector('input[name="email"]').value.trim();
            const service = this.querySelector('select[name="service"]').value;
            const vehicle = this.querySelector('input[name="vehicle"]').value.trim();
            const date = this.querySelector('input[name="date"]').value;
            const time = this.querySelector('select[name="time"]').value;

            if (!name || !email || !service || !vehicle || !date || !time) {
                alert('Please fill in all required fields.');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            alert('Thank you for booking! We will contact you shortly to confirm your appointment.');
            this.reset();
        });
    }
});
