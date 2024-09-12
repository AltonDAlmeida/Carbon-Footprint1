const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
let counter = 1; // Start at the first real slide
const size = carouselImages[0].clientWidth; // Width of one slide

// Set the initial position of the carousel
carouselSlide.style.transform = `translateX(${-size * counter}px)`;

// Function to handle the next slide
function nextSlide() {
    if (counter >= carouselImages.length - 1) return; // Prevent sliding past the last real slide
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;

    // Handle the transition end to reset counter and position
    carouselSlide.addEventListener('transitionend', handleTransitionEndNext, { once: true });
}

// Function to handle the previous slide
function prevSlide() {
    if (counter <= 0) return; // Prevent sliding past the first real slide
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;

    // Handle the transition end to reset counter and position
    carouselSlide.addEventListener('transitionend', handleTransitionEndPrev, { once: true });
}

// Handle transition end for the next slide
function handleTransitionEndNext() {
    if (carouselImages[counter].id === 'first-clone') {
        carouselSlide.style.transition = "none"; // Disable transition for the jump
        counter = 1; // Reset to the first real slide
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
}

// Handle transition end for the previous slide
function handleTransitionEndPrev() {
    if (carouselImages[counter].id === 'first-clone') {
        carouselSlide.style.transition = "none"; // Disable transition for the jump
        counter = carouselImages.length - 2; // Reset to the last real slide
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
}

// Initial size setup for the carousel
carouselSlide.style.width = `${carouselImages.length * 100}%`;

// Handle window resize to update sizes
window.addEventListener('resize', () => {
    const newSize = carouselImages[0].clientWidth;
    carouselSlide.style.transform = `translateX(${-newSize * counter}px)`;
});
