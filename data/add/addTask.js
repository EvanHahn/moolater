/*jslint browser: true */
/*global self */
'use strict';

// When the user hits return, send the "text-entered"
// message to main.js.
// The message payload is the contents of the edit box.

var textArea = document.getElementById("edit-box");
textArea.addEventListener('keyup', function onkeyup(event) {
    if (event.keyCode === 13) {
        self.port.emit("save-task", textArea.value);
        textArea.value = '';
    }
}, false);

// Listen for the "show" event being sent from the
// main add-on code. It means that the panel's about
// to be shown.
//
// Set the focus to the text area so the user can
// just start typing.
self.port.on("update-page-details", function fooBar(title, url) {
    console.log("Active window title is: '" + title + "' url is: '" + url + "'");
    textArea.value = "Title" + title + "URL " + url;
    textArea.focus();
});
