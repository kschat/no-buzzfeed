No BuzzFeed
==

A Content script that I quickly put together to remove all BuzzFeed posts from Facebook. 
Facebook obfuscates its class names and IDs so this probably won't work the next time they
update their css...

Install
--

**Chrome Extension**

_I didn't want to pollute the Chrome Web Store with this, so you'll need to install it manually_

* Download source code (either `git clone https://github.com/kschat/no-buzzfeed.git` or click the "Download ZIP button to the right" and unzip the file)
* Open a new tab in Chrome and navigate to `chrome://extensions/`
* Click the checkbox labled "Developer mode"
* Click "Load unpacked extension..."
* Navigate to the folder that contains the source code and click open

**TamperMonkey**

* Install with [TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)
* Select "Add new script..."
* Set url to "*://*.facebook.com/*"
* Copy app.js into the script text area