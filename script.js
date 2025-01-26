// app.js

let audioRecording = false;
let tripStarted = false;

// Toggle audio recording
function toggleRecording() {
  if (audioRecording) {
    // Stop the audio recording (simulated here, as actual audio requires permissions and APIs)
    document.getElementById('audio-status-text').textContent = 'Inactive';
    document.getElementById('audio-toggle').textContent = 'Start Audio Recording';
    audioRecording = false;
  } else {
    // Start the audio recording (simulated here)
    document.getElementById('audio-status-text').textContent = 'Active';
    document.getElementById('audio-toggle').textContent = 'Stop Audio Recording';
    audioRecording = true;
  }
}

// Simulating a speed tracker
function startTripMonitoring() {
  if (!tripStarted) {
    tripStarted = true;
    document.getElementById('trip-status').textContent = "Trip in Progress";
    // Simulate the map, speed, and trip updates
    setInterval(() => {
      const speed = Math.floor(Math.random() * 100); // Random speed for demonstration
      document.getElementById('trip-speed').textContent = `Speed: ${speed} km/h`;
      // Simulate location updates (just placeholder text)
      document.getElementById('trip-location').textContent = `Location: [Updated Location]`;
    }, 2000);
  }
}

// Triggering an emergency SOS
function triggerSOS() {
  alert("SOS! Help is on the way!");
  // This could trigger an alert to authorities or an emergency contact.
}

// Reporting an incident
function reportIncident() {
  alert("Incident Reported! We are investigating.");
  // This could send an incident report to the server.
}

// Simulate trip start after page load
window.onload = () => {
  startTripMonitoring();
};
