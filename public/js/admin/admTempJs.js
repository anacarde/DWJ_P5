var TempSel = {
    body: document.querySelector('body'),
    addButt: document.getElementById("add-col-butt"),
    hanButt: document.getElementById("han-col-butt"),
    grpButt: document.getElementsByClassName("col-grp-butt"),
    contBlo: document.getElementById("cont-blo"),
}

function AdminManager() {

    var self = this;

    this.addColCb = function(rep) {
        TempSel.contBlo.innerHTML = rep;
        Utils.rmvAndAddScript(TempSel.body, "add-col-src", "/js/admin/colFormJs.js");
    }

    this.hanColCb = function(resp) {
        TempSel.contBlo.innerHTML = resp;
        Utils.rmvAndAddScript(TempSel.body, "hand-col-src", "/js/admin/colTableJs.js");
    }

    this.addColFn = function() {
        Utils.ajaxGet("/admin/add/form", self.addColCb);
        if(document.getElementById("hand-col-src") != null) {
            TempSel.body.removeChild(document.getElementById("hand-col-src"));
        }
    }

    this.hanColFn = function(colGrpName) {
        Utils.ajaxGet("/admin/handle/" + colGrpName, self.hanColCb);
        if(document.getElementById("add-col-src") != null) {
            TempSel.body.removeChild(document.getElementById("add-col-src"));
        }
    }

    this.buttEvts = function() {
        TempSel.addButt.addEventListener('click', this.addColFn);

        for (var i = 0 ; i < TempSel.grpButt.length ; i++) {
            TempSel.grpButt[i].addEventListener('click', this.hanColFn.bind(this, TempSel.grpButt[i].getAttribute("data-colGrp")) );
        }
    }

    this.init = function() {
        this.buttEvts();
    }
    
}

var adminManager = new AdminManager();

adminManager.init();