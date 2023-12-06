<script>
        document.addEventListener('DOMContentLoaded', function () {
            const headerTextElement = document.getElementById('headerText');
            let fadeIn = true;
            let opacity = 0;

            function fadeAnimation() {
                setInterval(function () {
                    if (fadeIn) {
                        opacity += 0.02;
                        headerTextElement.style.opacity = opacity;

                        if (opacity >= 1) {
                            fadeIn = false;
                        }
                    } else {
                        opacity -= 0.02;
                        headerTextElement.style.opacity = opacity;

                        if (opacity <= 0) {
                            fadeIn = true;
                        }
                    }
                }, 50);
            }

            fadeAnimation();
        });
    </script>

<script>
        document.addEventListener('DOMContentLoaded', function () {
            // Your existing code for header text animation

            // Smooth scroll for navigation links with pop-up transition
            document.querySelectorAll('nav a').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();

                    const targetSection = document.querySelector(this.getAttribute('href'));
                    const offsetTop = targetSection.offsetTop;

                    // Add the pop-up class
                    this.classList.add('pop-up');

                    // Scroll with a slight delay for the transition effect
                    setTimeout(function () {
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }, 100); // Adjust the delay as needed
                });

                // Remove the pop-up class when the transition ends
                anchor.addEventListener('transitionend', function () {
                    this.classList.remove('pop-up');
                });
            });
        });
    </script>
