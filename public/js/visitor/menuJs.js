var Sel = {
    form: document.getElementById("sel-form"),
    colFamOpt: document.getElementById("col-fam-opt"),
    colFamName: document.getElementsByClassName("col-fam-name"),
    colRandOpt: document.getElementById("col-rand-opt"),
    famLs: document.getElementById("fam-ls"),
    colNbInp: document.getElementById("col-nb-inp"),
    appOpt: document.getElementById("app-lev"),
    expOpt: document.getElementById("exp-lev"),
    appLab: document.getElementById("app-lev-lab"),
    expLab: document.getElementById("exp-lev-lab"),
}

function MenuManager() {

    var self = this;

    this.setSessionInpInf = function() {
        if (sessionStorage.getItem("vis-sel-info")) {
            OptObj = JSON.parse(sessionStorage.getItem("vis-sel-info"));
            if (OptObj.grpOpt === "colFamOpt") {
                Sel.colFamOpt.checked = true;
                Sel.famLs.classList.remove('invisible');
                Sel.famLs.value = OptObj.famName;
            } else {
                Sel.colRandOpt.checked = true;
            }
            Sel.colNbInp.value = OptObj.number;
            if (OptObj.level === "appLev") {
                Sel.appOpt.checked = true;
            } else {
                Sel.expOpt.checked = true;
            }
        }
    }

    this.returnColMaxNb = function($data) {
        Sel.colNbInp.setAttribute('placeholder', "Maximum: " + $data);
    }

    this.getInputInfo = function() {
        var OptObj = {};
        if (Sel.colFamOpt.checked === true) {
            OptObj.grpOpt = "colFamOpt";
            OptObj.famName = Sel.famLs.value;
        } else {
            OptObj.grpOpt = "colRandOpt";
        }
        OptObj.number = Sel.colNbInp.value;
        if (Sel.appOpt.checked === true) {
            OptObj.level = "appLev";
        } else {
            OptObj.level = "expLev";
        }

        var visSelInfo = JSON.stringify(OptObj);
        sessionStorage.setItem("vis-sel-info", visSelInfo);
    }

    this.managerEvts = function() {
        
        Sel.colFamOpt.addEventListener('click', function() {
            Sel.famLs.classList.remove('invisible');
        })

        for (var i = 0 ; i < Sel.colFamName.length ; i++) {
            Sel.colFamName[i].addEventListener('click', function() {
                var colFam = this.getAttribute('value').trim();
                Utils.ajaxGet('/play/sel-col-nb/' + colFam, self.returnColMaxNb);
            })
        }

        Sel.colRandOpt.addEventListener('click', function() {
            Sel.famLs.classList.add('invisible');
            Utils.ajaxGet('/play/sel-col-nb/rand', self.returnColMaxNb);
        })

        Sel.appLab.addEventListener('click', function() {
            if(Sel.form.getAttribute("action") !== "/play/model") {
                Sel.form.setAttribute("action", "/play/model");
            }
        })

        Sel.expLab.addEventListener('click', function() {
            if(Sel.form.getAttribute("action") !== "/play/game-one") {
                Sel.form.setAttribute("action", "/play/game-one");
            }
        })

        Sel.form.addEventListener('submit', this.getInputInfo);
    }

    this.init = function() {
        this.setSessionInpInf();
        this.managerEvts();
    }

}

var menuManager = new MenuManager;

menuManager.init();



