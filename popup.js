const getSelectedTab = (tabs) => {
  console.log(tabs)
  const tabId = tabs[0].id;
  const sendMessage = messageObj => (
    chrome.tabs.sendMessage(tabId, messageObj)
  );

  document.getElementById('recite').addEventListener(
    'click', () => sendMessage({ action: 'RECITE' })
  );
  document.getElementById('stopRecite').addEventListener(
    'click', () => sendMessage({ action: 'STOP_RECITE' })
  );
};

chrome.tabs.query({ currentWindow: true, }, getSelectedTab);
