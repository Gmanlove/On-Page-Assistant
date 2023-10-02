document.getElementById('sampleButton').addEventListener('click', function() {
    const assistantVideo = document.getElementById('assistantVideo');
    const hoverIcon = document.querySelector('.hover-icon');

    // Hide hover icon
    hoverIcon.style.transform = 'scale(0)';
    hoverIcon.style.opacity = '0';

    // Show assistant with animation
    assistantVideo.style.display = 'block';
    assistantVideo.style.transform = 'scale(1)';
    assistantVideo.style.opacity = '1';
});

document.getElementById('assistantVideo').addEventListener('click', function() {
    this.style.transform = 'scale(0)';
    this.style.opacity = '0';
});

const assistantVideo = document.getElementById('assistantVideo');

assistantVideo.addEventListener('mouseenter', function() {
    this.style.transform = 'scale3d(1.1, 1.1, 1.1)';
});

assistantVideo.addEventListener('mouseleave', function() {
    this.style.transform = 'scale3d(1, 1, 1)';
});
document.getElementById('infoButton').addEventListener('click', function() {
    // Get the assistant and button elements
    const assistant = document.getElementById('assistantVideo');
    const button = document.getElementById('infoButton');

    // Get the position of the button
    const buttonRect = button.getBoundingClientRect();

    // Calculate the target position for the assistant
    const targetX = buttonRect.left;
    const targetY = buttonRect.top;

    // Animate the assistant's movement
    animateAssistantMovement(assistant, targetX, targetY);
});

function animateAssistantMovement(assistant, targetX, targetY) {
    const startX = assistant.offsetLeft;
    const startY = assistant.offsetTop;

    const deltaX = targetX - startX;
    const deltaY = targetY - startY;

    let startTime;

    function moveAssistant(timestamp) {
        if (!startTime) startTime = timestamp;

        const progress = Math.min((timestamp - startTime) / 1000, 1);

        assistant.style.left = `${startX + deltaX * progress}px`;
        assistant.style.top = `${startY + deltaY * progress}px`;

        if (progress < 1) {
            requestAnimationFrame(moveAssistant);
        }
    }

    requestAnimationFrame(moveAssistant);
}
const hoverIcon = document.getElementById('hoverIcon');
const assistant = document.getElementById('assistantVideo');

hoverIcon.addEventListener('click', function() {
    // Simulate providing explanation (you can replace this with actual logic)
    alert("Explanation: This is a sample explanation.");

    // Optional: You can add further logic to show the explanation on the assistant's interface.
});

document.addEventListener('mouseover', function(event) {
    // Check if the event target has a data-explanation attribute
    const explanation = event.target.dataset.explanation;

    if (explanation) {
        // Get the position of the hovered element
        const elementRect = event.target.getBoundingClientRect();

        // Calculate the target position for the assistant
        const targetX = elementRect.left;
        const targetY = elementRect.top;

        // Animate the assistant's movement
        animateAssistantMovement(assistant, targetX, targetY);
    }
});

function animateAssistantMovement(assistant, targetX, targetY) {
    // ... (use the previous animateAssistantMovement function)
}
