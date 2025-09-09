// Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Animate progress bars when in view
        function animateProgressBars() {
            const progressBars = document.querySelectorAll('.progress-bar');
            progressBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                const rect = bar.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    setTimeout(() => {
                        bar.style.width = width + '%';
                    }, 200);
                }
            });
        }

        // Fade in animation for sections
        function animateFadeIn() {
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach(element => {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    element.classList.add('visible');
                }
            });
        }

        // Create floating particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const numberOfParticles = 50;

            for (let i = 0; i < numberOfParticles; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
                            particle.style.animationDelay = (Math.random() * 4) + 's';
                            particle.style.top = Math.random() * 100 + '%';
                            particlesContainer.appendChild(particle);
                        }
                    }
            
                    // Run animations on scroll and load
                    window.addEventListener('scroll', () => {
                        animateProgressBars();
                        animateFadeIn();
                    });
            
                    window.addEventListener('load', () => {
                        animateProgressBars();
                        animateFadeIn();
                        createParticles();
                    });
