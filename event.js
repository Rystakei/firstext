// Execute the inject.js in a tab and call a method,
// passing the result to a callback function.
function injectedMethod (tab, method, callback) {
  chrome.tabs.executeScript(tab.id, { file: 'inject.js' }, function(){
    chrome.tabs.sendMessage(tab.id, { method: method }, callback);
  });
}

//Grab the selected text
function getSelection (tab) {
  alert("getSelection is running");
  injectedMethod(tab, 'getSelectionText', function (response){
    responseString = response.data; 
  })
}
// When the browser action is clicked, call the
// getSelection function.
 chrome.browserAction.onClicked.addListener(getSelection);
