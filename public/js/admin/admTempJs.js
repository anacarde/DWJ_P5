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
        script.id = "add-col-src";
        script.setAttribute('src', '/js/admin/addColJs.js');
        TempSel.body.appendChild(script);
    }

    this.hanColCb = function(rep) {
        TempSel.contBlo.innerHTML = rep;
        if (document.getElementById("hand-col-src") === null) {
            var script = document.createElement('script');
            script.id = "hand-col-src";
            script.setAttribute('src', '/js/admin/hanColJs.js');
            TempSel.body.appendChild(script);
        }
    }

    this.addColFn = function() {
        Utils.ajaxGet("/admin/add", self.addColCb);
        if(document.getElementById("hand-col-src") != null) {
            TempSel.body.removeChild(document.getElementById("hand-col-src"));
        }
    }

    this.hanColFn = function(colGrpName) {
        Utils.ajaxGet("/admin/handle/" + colGrpName, self.hanColCb);
        if(document.getElementById("add-col-src") != null) {
            TempSel.body.removeChild(document.getElementById("add-col-src"));
        }
        if(document.getElementById("hand-col-src") != null) {
            TempSel.body.removeChild(document.getElementById("hand-col-src"));
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