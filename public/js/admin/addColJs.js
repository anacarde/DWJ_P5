var Sel = {
    body: document.querySelector("body"),
    form: document.querySelector("form"),
    closeCross: document.getElementById("close-cross"),
    contBlo: document.getElementById("cont-blo"),
    addColDiv: document.getElementById("add-col-div"),
    addColSrc: document.getElementById("add-col-src"),
    groInp: document.getElementById("gro-inp"),
    namInp: document.getElementById("nam-inp"),
    hexInp: document.getElementById("hex-inp"),
    colSqu: document.getElementById("col-prev"),
    subButt: document.getElementById("sub-butt"),
    groErr: document.getElementById("gro-inp-err"),
    namErr: document.getElementById("nam-inp-err"),
    hexErr: document.getElementById("hex-inp-err"),
    // : document.getElementById(""),
}

function AddColManager() {

    var self = this;
    var regexStr = /^[\D]+$/;
    var regexHex = /^#[a-zA-Z0-9]{6}$/;

    this.closeCrossFn = function() {
        Sel.contBlo.removeChild(Sel.addColDiv);
        Sel.body.removeChild(Sel.addColSrc);
    }

    this.addErrNode = function(msg, msgId) {
        var errMsg = document.createElement("p");
        errMsg.id = msgId;   
    }

    this.inpFocFn = function(errSel) {
        if (this.classList.contains("error")) {
            this.classList.remove("error");
            errSel.classList.add("hidden");   
        }
    }

    this.filColSquFn = function() {
        var hexCode = Sel.hexInp.value.trim();
        Sel.colSqu.style.backgroundColor = hexCode; 
    }

    this.errFn = function(inpSel, errSel, msg) {
        inpSel.classList.add("error");
        errSel.textContent = msg;
        errSel.classList.remove("hidden");
    }

    this.subButtFn = function(e) {
        e.preventDefault();
        if (Sel.groInp.value.trim() === "" || Sel.namInp.value.trim() === "" || Sel.hexInp.value.trim() === "" || regexStr.test(Sel.groInp.value.trim()) === false || regexStr.test(Sel.namInp.value.trim()) === false || regexHex.test(Sel.hexInp.value.trim()) === false) {
            if (Sel.groInp.value.trim() === "") {
                this.errFn(Sel.groInp, Sel.groErr, "Ce champ n'est pas rempli");
            } else if (regexStr.test(Sel.groInp.value.trim()) === false) {
                this.errFn(Sel.groInp, Sel.groErr, "format incorrect");
            }
            if (Sel.namInp.value.trim() === "") {
                this.errFn(Sel.namInp, Sel.namErr, "Ce champ n'est pas rempli");
            } else if (regexStr.test(Sel.namInp.value.trim()) === false) {
                this.errFn(Sel.namInp, Sel.namErr, "format incorrect");
            }
            if (Sel.hexInp.value.trim() === "") {
                this.errFn(Sel.hexInp, Sel.hexErr, "Ce champ n'est pas rempli");
            } else if (regexHex.test(Sel.hexInp.value.trim()) === false) {
                this.errFn(Sel.hexInp, Sel.hexErr, "format incorrect");
            }
            return;
        }
    }

    this.closeCrossEvt = function() {
        Sel.closeCross.addEventListener("click", this.closeCrossFn);
    }

    this.inpEvts = function() {
        Sel.groInp.addEventListener("focus", this.inpFocFn.bind(Sel.groInp, Sel.groErr));
        Sel.namInp.addEventListener("focus", this.inpFocFn.bind(Sel.namInp, Sel.namErr));
        Sel.hexInp.addEventListener("focus", this.inpFocFn.bind(Sel.hexInp, Sel.hexErr));
        Sel.hexInp.addEventListener("input", this.filColSquFn);
    }

    this.subButtEvt = function() {
        Sel.form.addEventListener("submit", this.subButtFn.bind(this));
    }

    this.init = function() {
        this.closeCrossEvt();
        this.inpEvts();
        this.subButtEvt();
    }
}

var addColManager = new AddColManager();

addColManager.init();
