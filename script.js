document.getElementById("startSlideshow").addEventListener("click", function() {
    document.getElementById("slideshowContainer").classList.remove("hidden");
    document.getElementById("startSlideshow").classList.add("hidden"); 
    document.getElementById("bgMusic").play(); // Start music

    startSlideshow(); // Start cycling through images

    // Delay showing "Open Love Note" button until the slideshow completes
    setTimeout(() => {
        document.getElementById("openLoveNote").classList.remove("hidden");
    }, 27000); // 9 images × 3 seconds each
});

// Function to handle the slideshow manually
function startSlideshow() {
    let slides = document.querySelectorAll(".slide");
    let index = 0;

    // Initially, hide all slides
    slides.forEach(slide => slide.style.opacity = "0");

    // Show the first slide
    slides[index].style.opacity = "1";

    setInterval(() => {
        // Hide the current slide
        slides[index].style.opacity = "0";

        // Move to the next slide (loop back if at the last one)
        index = (index + 1) % slides.length;

        // Show the next slide
        slides[index].style.opacity = "1";
    }, 3000); // Change slide every 3 seconds
}

// Function to show love note
document.getElementById("openLoveNote").addEventListener("click", function() {
    document.getElementById("loveNote").classList.remove("hidden");
    document.getElementById("openLoveNote").classList.add("hidden");
});

// Function to close love note
function closeLoveNote() {
    document.getElementById("loveNote").classList.add("hidden");
}

// Function to create floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';

    heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    heart.style.top = "-20px"; // Start slightly above the screen
    heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random fall speed

    document.getElementById('hearts-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000); // Remove after 5 seconds
}

// Generate floating hearts at intervals (lowered for mobile performance)
setInterval(createHeart, 200);
