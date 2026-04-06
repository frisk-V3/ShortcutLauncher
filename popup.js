document.querySelectorAll("button").forEach(btn => {
  btn.onclick = () => {
    chrome.tabs.create({ url: btn.dataset.url });
  };
});
