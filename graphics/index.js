'use strict';

var QueuedTips = [];
var bAlerting = false;


nodecg.listenFor('tips-new', 'nodecg-streamtip-service', function(tip) {
    QueuedTips.push(tip);
    if (bAlerting === false) {
        playAlert();
    }
});


function playAlert() {
    if (bAlerting === true) {
        setTimeout(playAlert, 1000);
        return;
    }

    if (QueuedTips.length > 0) {
        bAlerting = true;
        var tipper = QueuedTips.shift();
        exportRoot.showAlert(tipper.username, tipper.amount, tipper.note);
        setTimeout(() => {
            bAlerting = false;
            playAlert();
        }, 14000);        
    }
}