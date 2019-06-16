var TempSel = {
    addButt: document.getElementById("add-col-butt"),
    hanButt: document.getElementById("han-col-butt"),
    grpButt: document.getElementsByClassName("col-grp-butt"),
    contBlo: document.getElementById("cont-blo"),
/*       : document.getElementById(""),
        : document.getElementById(""),
         : document.getElementById(""),
*/
}

function AdminManager() {

    var self = this;

    this.addColCb = function(rep) {
        TempSel.contBlo.innerHTML = rep;
    }

    this.addColFn = function() {
        Utils.ajaxGet("/admin/add", self.addColCb);
    }

    this.addColEvt = function() {
        TempSel.addButt.addEventListener('click', this.addColFn);
    }

    this.init = function() {
        this.addColEvt();
    }


}

var adminManager = new AdminManager();

adminManager.init();