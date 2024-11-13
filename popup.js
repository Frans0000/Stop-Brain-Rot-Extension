// Retrieve blocked site counters when the popup loads
chrome.storage.local.get(["shortsBlocked", "tiktokBlocked", "facebookReelsBlocked", "instagramReelsBlocked"], (data) => {
  document.getElementById("shorts-count").textContent = data.shortsBlocked || 0;
  document.getElementById("tiktok-count").textContent = data.tiktokBlocked || 0;
  document.getElementById("facebook-reels-count").textContent = data.facebookReelsBlocked || 0;
  document.getElementById("instagram-reels-count").textContent = data.instagramReelsBlocked || 0;
});

// Update counters when a change occurs
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "local") {
    if (changes.shortsBlocked) {
      document.getElementById("shorts-count").textContent = changes.shortsBlocked.newValue;
    }
    if (changes.tiktokBlocked) {
      document.getElementById("tiktok-count").textContent = changes.tiktokBlocked.newValue;
    }
    if (changes.facebookReelsBlocked) {
      document.getElementById("facebook-reels-count").textContent = changes.facebookReelsBlocked.newValue;
    }
    if (changes.instagramReelsBlocked) {
      document.getElementById("instagram-reels-count").textContent = changes.instagramReelsBlocked.newValue;
    }
  }
});

// Function to reset counters
function resetCounters() {
  chrome.storage.local.set({
    shortsBlocked: 0,
    tiktokBlocked: 0,
    facebookReelsBlocked: 0,
    instagramReelsBlocked: 0
  }, () => {
    // Update displayed values after reset
    document.getElementById("shorts-count").textContent = 0;
    document.getElementById("tiktok-count").textContent = 0;
    document.getElementById("facebook-reels-count").textContent = 0;
    document.getElementById("instagram-reels-count").textContent = 0;
  });
}

// Handle reset button click
document.getElementById("reset-button").addEventListener("click", resetCounters);
