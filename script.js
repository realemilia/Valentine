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

    if (slides.length === 0) {
        console.error("No slides found!");
        return;
    }

    slides.forEach(slide => slide.style.opacity = "0"); // Hide all
    slides[index].style.opacity = "1"; // Show the first slide

    setInterval(() => {
        slides[index].style.opacity = "0"; // Hide current slide
        index = (index + 1) % slides.length; // Move to next slide
        slides[index].style.opacity = "1"; // Show next slide
    }, 3000);
}


// Function to show love note
document.getElementById("openLoveNote").addEventListener("click", function() {
    document.getElementById("loveNote").classList.remove("hidden");
    document.getElementById("openLoveNote").classList.add("hidden");
});


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
