// Select elements
const button = document.getElementById("funButton");
const message = document.getElementById("funMessage");
const images = document.querySelectorAll(".image-container img");


// Some fun web dev messages
const messages = [
  "🎉 You just took one step closer to being a Web Developer!",
  "🚀 Keep going, your skills are leveling up!",
  "💻 Remember: Google is a developer’s best friend!",
  "🌟 Every great dev started as a beginner. You're on track!",
  "🔥 You're coding like a pro already!"
];

// Add click event
button.addEventListener("click", () => {
  // Pick a random message
  const random = Math.floor(Math.random() * messages.length);
  message.textContent = messages[random];
  message.classList.remove("hidden");
});

// IMAGE ZOOM FEATURE
images.forEach(img => {
  img.addEventListener("click", () => {
    // Remove active from other images
    images.forEach(other => {
      if (other !== img) other.classList.remove("active");
    });
    // Toggle zoom on clicked image
    img.classList.toggle("active");
  });
});
