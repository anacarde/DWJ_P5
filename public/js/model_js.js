var Sel = {
    lauButt: document.getElementById('lau-butt'),
    colBlo: document.getElementsByClassName('col-blo'),
}

function ModelStorageBackup() {

    var self = this;
    var colDataArr = [];
    var colRgb = null;
    var colName = null;

    this.getColDataArr = function() {
        for ( var i = 0 ; i < Sel.colBlo.length ; i++) {
            colRgb = getComputedStyle(Sel.colBlo[i].children[0]).backgroundColor.trim();
            colName = Sel.colBlo[i].children[1].textContent.trim();
            colDataArr.push([colRgb, colName]);
        }
        return colDataArr;
    }

    this.stockColDataArr = function() {
        // sessionStorage.clear();
        colDataArr = JSON.stringify(self.getColDataArr());
        sessionStorage.setItem('col-data', colDataArr);
    }

    this.sdGameRedirect = function() {
        window.location.replace("http://localhost/Vitrine/vis_game_one_block.php");
    }

    this.stockColDataArrAndRed = function() {
        self.stockColDataArr();
        self.sdGameRedirect();
    }

    this.init = function() {
        Sel.lauButt.addEventListener('click', this.stockColDataArrAndRed);
    }
}

var modelStorageBackup = new ModelStorageBackup;

modelStorageBackup.init();
