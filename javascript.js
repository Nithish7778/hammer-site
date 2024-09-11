// Select the hammer images
const hammer1 = document.getElementById('hammer1');
const hammer2 = document.getElementById('hammer2');

// Function to rotate the hammer based on scroll position
function rotateHammers() {
    const scrollPosition = window.scrollY;  // Get the vertical scroll position

    // Calculate the rotation degree (45 degrees for each full viewport height)
    const rotationAngle = scrollPosition / window.innerHeight * 90;

    // Apply rotation to each hammer image
    hammer1.style.transform = `rotate(${rotationAngle}deg)`;
    hammer2.style.transform = `rotate(${rotationAngle}deg)`;
}

// Add the scroll event listener
window.addEventListener('scroll', rotateHammers);
