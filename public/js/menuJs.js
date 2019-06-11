var Sel = {
    form: document.getElementById("sel-form"),
    colFamOpt: document.getElementById("col-fam-opt"),
    colFamName: document.getElementsByClassName("col-fam-name"),
    colRandOpt: document.getElementById("col-rand-opt"),
    famLs: document.getElementById("fam-ls"),
    colNbInp: document.getElementById("col-nb-inp"),
    appLev: document.getElementById("app-lev-lab"),
    expLev: document.getElementById("exp-lev-lab"),
}

function MenuManager() {

    var self = this;

    this.ajaxGet = function(url, callback) {
        var req = new XMLHttpRequest();
        req.open("GET", url);
        req.addEventListener("load", function() {
            if (req.status >= 200 && req.status < 400) {
               callback(req.responseText);
            } else {
               console.error(req.status + " " + req.statusText + " " + url);
            }
        });
        req.addEventListener("error", function() {
            console.error("Erreur réseau avec l'URL " + url);
        });

        req.send(null);
    }

    this.returnColMaxNb = function($data) {
        Sel.colNbInp.setAttribute('placeholder', "Maximum: " + $data);
    }

    this.managerEvts = function() {
        
        Sel.colFamOpt.addEventListener('click', function() {
            Sel.famLs.classList.remove('invisible');
        })

        for (var i = 0 ; i < Sel.colFamName.length ; i++) {
            Sel.colFamName[i].addEventListener('click', function() {
                var colFam = this.getAttribute('value').trim();
                self.ajaxGet('/play/sel-col-nb/' + colFam, self.returnColMaxNb);
            })
        }

        Sel.colRandOpt.addEventListener('click', function() {
            Sel.famLs.classList.add('invisible');
            self.ajaxGet('/play/sel-col-nb/rand', self.returnColMaxNb);
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



