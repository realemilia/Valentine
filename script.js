document.getElementById("startSlideshow").addEventListener("click", function() {
    document.getElementById("slideshowContainer").classList.remove("hidden");
    document.getElementById("startSlideshow").classList.add("hidden"); 
    document.getElementById("bgMusic").play(); // Start music

    // Delay showing "Open Love Note" button until the slideshow completes
    setTimeout(() => {
        document.getElementById("openLoveNote").classList.remove("hidden");
    }, 27000); // 9 images × 3 seconds each
});

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
    heart.innerHTML = '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';

    document.getElementById('hearts-container').appendChild(heart);

    setTimeout(() => {
        heart.remove(); // Fixed bug (was `heart.remove;`)
    }, 5000);
}

// Generate floating hearts at intervals (lowered for mobile performance)
setInterval(createHeart, 500);
