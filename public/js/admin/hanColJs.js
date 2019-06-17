var Sel = {
    body: document.querySelector("body"),
    closeCross: document.getElementById("close-cross"),
    contBlo: document.getElementById("cont-blo"),
    hanColDiv: document.getElementById("hand-col-div"),
    hanColSrc: document.getElementById("hand-col-src"),
}

function HanColManager() {

    this.closeCrossFn = function() {
        Sel.contBlo.removeChild(Sel.hanColDiv);
        Sel.body.removeChild(Sel.hanColSrc);
    }

    this.closeCrossEvt = function() {
        Sel.closeCross.addEventListener('click', this.closeCrossFn);
    }

    this.init = function() {
        this.closeCrossEvt();
    }
}

var hanColManager = new HanColManager;

hanColManager.init();