var TempSel = {
    admConButt: document.getElementById('adm-con-butt'),
    homButt: document.getElementById('hom-butt'),
    playButt: document.getElementById('play-butt'),
    conInner = document.getElementById('adm-con-inner'),
    closeConForm: document.getElementById('close-cross'),
    pseudoInp: document.getElementById('pseudo-inp'),
    passInp: document.getElementById('password-inp'),
    formSub: document.getElementById('form-sub'),
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
        console.log("lolo");
        console.log(resp);
    }

    this.openConFormFn = function() {
        TempSel.conInner.classList.remove("hidden");
    }

    this.closeConFormFn = function() {
        TempSel.conInner.classList.add("hidden");
    }

    this.subConFormFn = function() {
        if (TempSel.pseudoInp.value === "" || TempSel.passInp.value === "") {
            console.log("des champs ne sont pas remplis.");
            return;
        }
        Utils.ajaxGet("/connexion?pseudo=" + TempSel.pseudoInp.value.trim() + "&password=" + TempSel.passInp.value.trim(), self.formCallbackFn);
    }

    this.conFormEvts = function() {
        TempSel.admConButt.addEventListener('click', this.openConFormFn);

        TempSel.closeConForm.addEventListener('click', this.closeConFormFn);

        window.addEventListener('keydown', function(e){
            if(e.keyCode === 27 && !self.conInner.classList.contains("hidden")) {
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



/*function escapeHtml(text) {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };

  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}*/