chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'processUrls') {
      const urls = message.urls;
      urls.forEach(url => {
        chrome.tabs.create({ url }, (tab) => {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['content.js']
          });
        });
      });
      sendResponse({ status: 'URLs processed' });
    }
  });