var Sel = {
    closeCross: document.getElementById("close-cross"),
    contBlo: document.getElementById("cont-blo"),
    addColDiv: document.getElementById("add-col-div"),
}

function AddColManager() {

    this.closeCrossFn = function() {
        Sel.contBlo.removeChild(Sel.addColDiv);
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