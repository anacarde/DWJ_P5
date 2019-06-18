var Sel = {
    body: document.querySelector("body"),
    table: document.querySelector("table"),
    closeCross: document.getElementById("close-cross"),
    contBlo: document.getElementById("cont-blo"),
    hanColDiv: document.getElementById("hand-col-div"),
    hanColSrc: document.getElementById("hand-col-src"),
    updButt: document.getElementsByClassName("upd-butt"),
    delButt: document.getElementsByClassName("del-butt")
}

function ColTableManager() {

    this.closeCrossFn = function() {
        Sel.contBlo.removeChild(Sel.hanColDiv);
        Sel.body.removeChild(Sel.hanColSrc);
    }

    this.closeCrossEvt = function() {
        Sel.closeCross.addEventListener('click', this.closeCrossFn);
    }

    this.updBlockCb = function(resp) {
        TempSel.contBlo.innerHTML = resp;
        Utils.rmvAndAddScript(TempSel.body, "hand-col-src", "/js/admin/colTableJs.js");
    }

    this.deleteFnCb = function(resp) {
        if (resp == 1) {
            var colGrp = Sel.table.getAttribute("data-colgrp");
            Utils.actInfMsg(Sel.body, "succ-msg", "couleur bien supprimée");
            Utils.ajaxGet("/admin/handle/" + colGrp, this.updBlockCb);
        } else {
            Utils.actInfMsg(Sel.body, "fail-msg", "erreur en base de donnée");
        }
    }

    this.deleteFn = function(id) {
        Utils.ajaxGet("/admin/delete/" + id, this.deleteFnCb.bind(this));
    }

    this.updateFn = function(id) {

    }

    this.btnEvts = function() {
        for (var i = 0 ; i < Sel.delButt.length ; i++) {
            Sel.delButt[i].addEventListener('click', this.deleteFn.bind(this, Sel.delButt[i].getAttribute("data-id")));
        }   

        for (var i = 0 ; i < Sel.updButt.length ; i++) {
            Sel.updButt[i].addEventListener('click', this.updateFn.bind(this, Sel.updButt[i].getAttribute("data-id")));
        }
    }

    this.init = function() {
        this.closeCrossEvt();
        this.btnEvts();
    }
}

var colTableManager = new ColTableManager;

colTableManager.init();