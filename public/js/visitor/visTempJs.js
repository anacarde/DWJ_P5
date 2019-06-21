var TempSel = {
    admConButt: document.getElementById('adm-con-butt'),
    homButt: document.getElementById('hom-butt'),
    playButt: document.getElementById('play-butt'),
    conInner: document.getElementById('adm-con-inner'),
    closeConForm: document.getElementById('close-cross'),
    pseudoInp: document.getElementById('pseudo-inp'),
    passInp: document.getElementById('password-inp'),
    formSub: document.getElementById('form-sub'),
    contLn: document.getElementById('cont-ln'),
    conInf: document.getElementById('con-inf'),
}

function HeaderManager() {

    var self = this;

    this.menuBtnFn = function(link) {
        window.location.replace(link);
    }

    this.menuBtnEvts = function() {
        TempSel.homButt.addEventListener('click', function(){
            self.menuBtnFn("/");
        });
        TempSel.playButt.addEventListener('click', function(){
            self.menuBtnFn("/play");
        });
    }

    this.formCallbackFn = function(resp) {
        TempSel.conInf.textContent = resp;
        TempSel.conInf.classList.remove("hidden");
        if (resp.includes("Connexion")) {
            TempSel.conInf.style.color = "blue";
            window.location = "/admin";
        }
    }

    this.openConFormFn = function() {
        TempSel.conInner.classList.remove("hidden");
    }

    this.closeConFormFn = function() {
        TempSel.conInner.classList.add("hidden");
    }

    this.remAlertLn = function() {
        if (!TempSel.contLn.classList.contains("hidden")) {
            TempSel.contLn.classList.add("hidden");
        }
        if (!TempSel.conInf.classList.contains("hidden")) {
            TempSel.conInf.classList.add("hidden");
        }
    }

    this.subConFormFn = function(e) {
        e.preventDefault();
        if (TempSel.pseudoInp.value === "" || TempSel.passInp.value === "") {
            TempSel.contLn.classList.remove("hidden");
            return;
        }
        var params = "pseudo=" + TempSel.pseudoInp.value.trim() + "&password=" + TempSel.passInp.value.trim();
        Utils.ajaxPost("/connexion", params, self.formCallbackFn);
    }

    this.conFormEvts = function() {
        TempSel.admConButt.addEventListener('click', this.openConFormFn);

        TempSel.closeConForm.addEventListener('click', this.closeConFormFn);

        TempSel.formSub.addEventListener('click', this.subConFormFn);

        TempSel.pseudoInp.addEventListener('focus', this.remAlertLn);

        TempSel.passInp.addEventListener('focus', this.remAlertLn);

        window.addEventListener('keydown', function(e){
            if(e.keyCode === 27 && !TempSel.conInner.classList.contains("hidden")) {
                self.closeConFormFn();
            }
        })
    }

    this.init = function() {
        this.menuBtnEvts();
        this.conFormEvts();
    }
}

var headerManager = new HeaderManager;

headerManager.init();