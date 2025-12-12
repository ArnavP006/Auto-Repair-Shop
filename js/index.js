document.addEventListener('DOMContentLoaded', function () {

    const heroSlider = document.querySelector('.hero-slider');
    if (heroSlider) {
        const slides = document.querySelectorAll('.hero-slide');
        const dots = document.querySelectorAll('.slider-dot');
        const prevBtn = document.querySelector('.slider-arrow.prev');
        const nextBtn = document.querySelector('.slider-arrow.next');
        let currentSlide = 0;
        let slideInterval;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            if (index >= slides.length) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = slides.length - 1;
            } else {
                currentSlide = index;
            }

            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        function startSlideShow() {
            slideInterval = setInterval(nextSlide, 5000);
        }

        function stopSlideShow() {
            clearInterval(slideInterval);
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function () {
                stopSlideShow();
                nextSlide();
                startSlideShow();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', function () {
                stopSlideShow();
                prevSlide();
                startSlideShow();
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', function () {
                stopSlideShow();
                showSlide(index);
                startSlideShow();
            });
        });

        showSlide(0);
        startSlideShow();
    }

    const stats = document.querySelectorAll('.stat-number');
    let statsAnimated = false;

    function animateStats() {
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.floor(current).toLocaleString();
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target.toLocaleString();
                }
            };

            updateCounter();
        });
    }

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !statsAnimated) {
                    animateStats();
                    statsAnimated = true;
                }
            });
        }, { threshold: 0.5 });

        observer.observe(statsSection);
    }
});
