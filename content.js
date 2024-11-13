let shortsRedirected = false;
let tiktokRedirected = false;
let facebookReelsRedirected = false;
let instagramReelsRedirected = false;

// Function to check if the user is on any of the blocked sites
function checkForBlockedContent() {
  const url = window.location.href;

  // Check YouTube Shorts
  if (url.includes("youtube.com/shorts")) {
    if (!shortsRedirected) {
      chrome.storage.local.get("shortsBlocked", (data) => {
        const newCount = (data.shortsBlocked || 0) + 1;
        chrome.storage.local.set({ shortsBlocked: newCount });
      });
      shortsRedirected = true;
      window.location.href = "https://www.youtube.com";
    }
  } else {
    shortsRedirected = false;
  }

  // Check TikTok
  if (url.includes("tiktok.com")) {
    if (!tiktokRedirected) {
      chrome.storage.local.get("tiktokBlocked", (data) => {
        const newCount = (data.tiktokBlocked || 0) + 1;
        chrome.storage.local.set({ tiktokBlocked: newCount });
      });
      tiktokRedirected = true;
      window.location.href = "https://www.google.com";
    }
  } else {
    tiktokRedirected = false;
  }

  // Check Facebook Reels
  if (url.includes("facebook.com/reel")) {
    if (!facebookReelsRedirected) {
      chrome.storage.local.get("facebookReelsBlocked", (data) => {
        const newCount = (data.facebookReelsBlocked || 0) + 1;
        chrome.storage.local.set({ facebookReelsBlocked: newCount });
      });
      facebookReelsRedirected = true;
      window.location.href = "https://www.google.com";
    }
  } else {
    facebookReelsRedirected = false;
  }

  // Check Instagram Reels
  if (url.includes("instagram.com/reels")) {
    if (!instagramReelsRedirected) {
      chrome.storage.local.get("instagramReelsBlocked", (data) => {
        const newCount = (data.instagramReelsBlocked || 0) + 1;
        chrome.storage.local.set({ instagramReelsBlocked: newCount });
      });
      instagramReelsRedirected = true;
      window.location.href = "https://www.google.com";
    }
  } else {
    instagramReelsRedirected = false;
  }
}

// Check blocked sites on load
checkForBlockedContent();

// Listen for URL changes
const observer = new MutationObserver(checkForBlockedContent);
observer.observe(document, { subtree: true, childList: true });
