const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const enhance = id => {
    const element = document.getElementById(id),
        text = element.innerText.split("");

    element.innerText = "";

    text.forEach((value, index) => {
        const outer = document.createElement("span");

        outer.className = "outer";

        const inner = document.createElement("span");

        inner.className = "inner";

        inner.style.animationDelay = `${rand(-5000, 0)}ms`;

        const letter = document.createElement("span");

        letter.className = "letter";

        letter.innerText = value;

        letter.style.animationDelay = `${index * 1000 }ms`;

        inner.appendChild(letter);

        outer.appendChild(inner);

        element.appendChild(outer);
    });
}

enhance("channel-link");

// Function to play the audio
async function playAudio() {
    var audio = document.getElementById("myAudio");

    try {
        // Attempt to play the audio
        await audio.play();
    } catch (error) {
        // Autoplay was prevented, handle it here (e.g., show a play button)
        console.error("Autoplay prevented:", error.message);
    }
}

// Call playAudio() on page load
playAudio();

var audio = document.getElementById("myAudio");

// Listen for scroll events
window.addEventListener("scroll", function () {
    // Get the current scroll position
    var scrollPosition = window.scrollY;

    // Get the position of the footer
    var footerPosition = document.querySelector("footer").offsetTop;

    // Adjust this value based on when you want the audio to stop
    var offset = 200;

    // Check if the scroll position is near the footer
    if (scrollPosition > footerPosition - offset) {
        // Pause the audio when it reaches the footer
        audio.pause();
    }
});