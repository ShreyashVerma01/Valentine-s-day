// Function to create a rose at a random position
function createRose(x, y) {
    const rose = document.createElement('div');
    rose.classList.add('rose');

    // Random horizontal position if not provided
    const posX = x || Math.random() * window.innerWidth;
    const posY = y || -50; // Start above the screen

    rose.style.left = `${posX}px`;
    rose.style.top = `${posY}px`;

    // Random delay for animation
    const delay = Math.random() * 5;
    rose.style.animationDelay = `${delay}s`;

    // Append the rose to the container
    document.getElementById('rose-container').appendChild(rose);

    // Remove the rose after the animation ends
    setTimeout(() => {
        rose.remove();
    }, 5000); // Match the animation duration
}

// Create roses at regular intervals for the background
setInterval(createRose, 500); // Adjust interval for more/less roses

// Get references to the buttons
const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');

let clickCount = 0; // Track clicks on "No" button

// Add event listener to the "No" button
noButton.addEventListener('click', () => {
    console.log("No button clicked!"); // Debugging: Check if this logs in the console

    if (clickCount < 3) { // Allow shrinking up to 3 times
        const scaleValue = 1 - (clickCount + 1) * 0.2; // Reduce size gradually
        noButton.style.transform = `scale(${scaleValue})`;
        clickCount++;
    }

    // Enlarge the "Yes" button more each time
    yesButton.style.transform = `scale(${1 + clickCount * 0.5})`;
});

// Add event listener to the "Yes" button
yesButton.addEventListener('click', () => {
    console.log("Yes button clicked!"); // Debugging: Check if this logs in the console

    // Create a burst of roses
    for (let i = 0; i < 1000; i++) { // Adjust the number of roses in the burst
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        createRose(x, y);
    }
});
