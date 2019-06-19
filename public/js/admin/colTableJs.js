var Sel = {
    body: document.querySelector("body"),
    contBlo: document.getElementById("cont-blo"),
    closeCross: document.getElementById("close-cross"),
    table: document.querySelector("table"),
    hanColDiv: document.getElementById("hand-col-div"),
    hanColSrc: document.getElementById("col-table-src"),
    updButt: document.getElementsByClassName("upd-butt"),
    delButt: document.getElementsByClassName("del-butt"),
}

function ColTableManager() {

    var self = this;

    this.closeCrossFn = function() {
        Sel.contBlo.removeChild(Sel.hanColDiv);
        Sel.body.removeChild(Sel.hanColSrc);
    }

    this.closeCrossEvt = function() {
        Sel.closeCross.addEventListener('click', this.closeCrossFn);
    }

    this.updBlockCb = function(resp) {
        TempSel.contBlo.innerHTML = resp;
        Utils.rmvAndAddScript(Sel.body, "col-table-src", "/js/admin/colTableJs.js");
    }

    this.deleteFnCb = function(resp) {
        if (resp == 1) {
            var colGrp = Sel.table.getAttribute("data-colgrp");
            Utils.actInfMsg(Sel.body, "succ-msg", "couleur bien supprimée");
            Utils.ajaxGet("/admin/table/" + colGrp, this.updBlockCb);
        } else {
            Utils.actInfMsg(Sel.body, "fail-msg", "erreur en base de donnée");
        }
    }

    this.deleteFn = function(id) {
        Utils.ajaxGet("/admin/delete/" + id, this.deleteFnCb.bind(this));
    }

    this.updColForm = function(resp) {
        Sel.contBlo.innerHTML += resp;
        Utils.rmvAndAddScript(Sel.body, "col-form-src", "/js/admin/colFormJs.js");
    }

    this.updateFn = function(colObj) {
        Sel.hanColDiv.classList.add("hidden");
        Utils.ajaxGet("/admin/form/update?id=" + colObj.id + "&grp=" + colObj.grp + "&name=" + colObj.name + "&hex=" + colObj.hex, self.updColForm);
    }

    this.btnEvts = function() {
        for (var i = 0 ; i < Sel.delButt.length ; i++) {
            Sel.delButt[i].addEventListener('click', this.deleteFn.bind(this, Sel.delButt[i].getAttribute("data-id")));
        }   

        for (var i = 0 ; i < Sel.updButt.length ; i++) {
            var ColObj = {
                id: Sel.updButt[i].getAttribute("data-id"),
                name: Sel.updButt[i].getAttribute("data-name"),
                hex: Sel.updButt[i].getAttribute("data-hex").replace("#", "%23"),
                grp: Sel.table.getAttribute("data-colgrp"),
            }

            Sel.updButt[i].addEventListener('click', this.updateFn.bind(this, ColObj));
        }
    }

    this.init = function() {
        this.closeCrossEvt();
        this.btnEvts();
    }
}

var colTableManager = new ColTableManager;

colTableManager.init();