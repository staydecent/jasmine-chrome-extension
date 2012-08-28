
// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (tab.url.indexOf('google') > -1) {
        // ... show the page action.
        chrome.pageAction.show(tabId);
    }
});

// Listen for click event on our Page Action
chrome.pageAction.onClicked.addListener(function(tab) {
    var thisTab = tab;

    // load our spec file
    chrome.tabs.executeScript(tab.id, { file: 'spec/example_spec.js' }, function() {
        // once loaded, run jasmine
        chrome.tabs.executeScript(thisTab.id, { file: 'JasmineSpecRunner.js' });
    });
});