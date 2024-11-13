# Stop Brainrot - Browser Extension

This browser extension helps users stay focused by blocking time-wasting content on popular social media platforms. Specifically, it blocks YouTube Shorts, TikTok, Facebook Reels, and Instagram Reels, helping users avoid endless scrolling through short-form videos.

## Features

- **Block YouTube Shorts**: Prevents the automatic loading of YouTube Shorts.
- **Block TikTok**: Redirects TikTok pages to avoid mindless browsing.
- **Block Facebook Reels**: Stops access to Facebook Reels.
- **Block Instagram Reels**: Disables Instagram Reels content.
- **Tracking and Resetting Blocked Content**: Tracks how many times each type of content was blocked and provides an option to reset the counters.

## How It Works


When the extension is installed, it initializes counters for blocked content (YouTube Shorts, TikTok, Facebook Reels, Instagram Reels) using `chrome.storage.local`. The extension then listens for page loads and checks the URL. If it detects a page that matches one of the blocked content sources (YouTube Shorts, TikTok, Facebook Reels, Instagram Reels), it redirects the user to a more neutral pages like google.
The popup also keeps track of how many times content from these platforms has been blocked, and allows the user to reset the counters.

## Installation

1. Download or clone this repository to your local machine.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" at the top right of the page.
4. Click on the "Load packed" button and select the folder where you downloaded or cloned this repository.
5. The extension will be installed, and you'll see the icon in the Chrome toolbar.

## Usage

- When the extension is installed, it will automatically start blocking the specified content (YouTube Shorts, TikTok, Facebook Reels, Instagram Reels).
- You can see how many pieces of content have been blocked by clicking on the extension icon in the toolbar.
- You can reset the block counters by clicking the "Reset" button in the popup.

---

Feel free to modify and use this extension to stay focused and productive. Happy browsing!
