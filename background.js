chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ shortsBlocked: 0 });
});
