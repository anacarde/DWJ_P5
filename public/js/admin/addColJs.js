var Sel = {
    body: document.querySelector("body"),
    closeCross: document.getElementById("close-cross"),
    contBlo: document.getElementById("cont-blo"),
    addColDiv: document.getElementById("add-col-div"),
    addColSrc: document.getElementById("add-col-src"),
}

function AddColManager() {

    this.closeCrossFn = function() {
        Sel.contBlo.removeChild(Sel.addColDiv);
        Sel.body.removeChild(Sel.addColSrc);
    }

    this.closeCrossEvt = function() {
        Sel.closeCross.addEventListener('click', this.closeCrossFn);
    }

    this.init = function() {
        this.closeCrossEvt();
    }
}

var addColManager = new AddColManager();

addColManager.init();