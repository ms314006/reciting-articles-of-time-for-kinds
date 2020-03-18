var getSelectedTab = tab => {
  var tabId = tab.id;
  var sendMessage = (messageObj) => chrome.tabs.sendMessage(tabId, messageObj);
  document.getElementById('recite').addEventListener('click', () => sendMessage({ action: 'RECITE' }));
  document.getElementById('stopRecite').addEventListener('click', () => sendMessage({ action: 'STOP_RECITE' }));
}

chrome.tabs.getSelected(null, getSelectedTab);
