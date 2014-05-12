// Execute the inject.js in a tab and call a method,
// passing the result to a callback function.
function injectedMethod (tab, method, callback) {
  chrome.tabs.executeScript(tab.id, { file: 'inject.js' }, function(){
    chrome.tabs.sendMessage(tab.id, { method: method }, callback);
  });
}

// Get background-color values from the current tab
// and open them in Colorpeek.
function getSelection (tab) {
  alert("getSelection is running");
  injectedMethod(tab, 'getSelectionText', function (response){
    responseString = response.data; 
  })
}
// When the browser action is clicked, call the
// getBgColors function.
 chrome.browserAction.onClicked.addListener(getSelection);
chrome.browserAction.onClicked.addListener(getSelectionText);