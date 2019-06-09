var Sel = {
    form: document.getElementById("sel-form"),
    colFamOpt: document.getElementById("col-fam-opt"),
    colRandOpt: document.getElementById("col-rand-opt"),
    famLs: document.getElementById("fam-ls"),
    appLev: document.getElementById("app-lev-lab"),
    expLev: document.getElementById("exp-lev-lab"),
}

function MenuManager() {

    this.managerEvts = function() {
        
        Sel.colFamOpt.addEventListener('click', function() {
            Sel.famLs.classList.remove('invisible');
        })

        Sel.colRandOpt.addEventListener('click', function() {
            Sel.famLs.classList.add('invisible');
        })

        Sel.appLev.addEventListener('click', function() {
            if(Sel.form.getAttribute("action") !== "/play/model") {
                Sel.form.setAttribute("action", "/play/model");
            }
        })

        Sel.expLev.addEventListener('click', function() {
            if(Sel.form.getAttribute("action") !== "/play/game-one") {
                Sel.form.setAttribute("action", "/play/game-one");
            }
        })
    }

}

var menuManager = new MenuManager;

menuManager.managerEvts();



