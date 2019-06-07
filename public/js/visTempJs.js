var Sel = {
    homButt: document.getElementById('hom-butt'),
    playButt: document.getElementById('play-butt'),   
}

function HeaderManager() {

    var self = this;

    this.menuBtnFn = function(link) {
        window.location.replace(link);
    }

    this.menuBtnEvts = function() {
        Sel.homButt.addEventListener('click', function(){
            self.menuBtnFn("/");
        });
        Sel.playButt.addEventListener('click', function(){
            self.menuBtnFn("/play");
        });
    }
}

var headerManager = new HeaderManager;

headerManager.menuBtnEvts();