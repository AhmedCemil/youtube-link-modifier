// Wait for YouTube to load and inject our button
function addYoutTubeButton() {
  // Find the controls container (where CC, settings, etc. buttons are)
  const controlsContainer = document.querySelector('.ytp-right-controls');
  
  if (!controlsContainer) {
    // If not found, try again after a short delay
    setTimeout(addYoutTubeButton, 1000);
    return;
  }
  
  // Check if our button already exists
  if (document.getElementById('yout-ube-btn')) {
    return;
  }
  
  // Create our custom button
  const button = document.createElement('button');
  button.id = 'yout-ube-btn';
  button.className = 'ytp-button yout-ube-button';
  button.title = 'Open in Yout-ube';
  button.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
    </svg>
  `;
  
  // Add click event listener
  button.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    // Get current URL and modify it
    const currentUrl = window.location.href;
    const newUrl = currentUrl.replace('youtube.com', 'yout-ube.com');
    
    // Open in new tab
    window.open(newUrl, '_blank');
  });
  
  // Insert the button before the settings button
  const settingsButton = controlsContainer.querySelector('.ytp-settings-button');
  if (settingsButton) {
    controlsContainer.insertBefore(button, settingsButton);
  } else {
    controlsContainer.appendChild(button);
  }
}

// Initialize when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addYoutTubeButton);
} else {
  addYoutTubeButton();
}

// Re-add button when navigating to new videos (YouTube uses AJAX navigation)
let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    setTimeout(addYoutTubeButton, 1000);
  }
}).observe(document, { subtree: true, childList: true });

// Also listen for YouTube's navigation events
window.addEventListener('yt-navigate-finish', addYoutTubeButton);
window.addEventListener('yt-page-data-updated', addYoutTubeButton);