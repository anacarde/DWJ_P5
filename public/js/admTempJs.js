var TempSel = {
    body: document.querySelector('body'),
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
        var script = document.createElement('script');
        script.id = "add-col-scr";
        script.setAttribute('src', '/js/addColJs.js');
        TempSel.body.appendChild(script);
    }

    this.hanColCb = function(rep) {
        TempSel.contBlo.innerHTML = rep;
    }

    this.addColFn = function() {
        Utils.ajaxGet("/admin/add", self.addColCb);
    }

    this.hanColFn = function(colGrpName) {
         console.log("/admin/handle/" + colGrpName);
        Utils.ajaxGet("/admin/handle/" + colGrpName, self.hanColCb);
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