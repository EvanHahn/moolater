/* global self:false, document:false */

(function () {
    "use strict";

    var submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", function click() {
        self.port.emit("do-login");
    });

//    self.port.on("login-failed", function onShow(title) {
//        console.log("msg-recieved: show-login" + title);
//    });

}());