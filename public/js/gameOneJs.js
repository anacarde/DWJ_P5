var Sel = {
    colBloCont: document.getElementById('col-blo-cont'),
    colBlo: document.getElementsByClassName('col-blo'),
    lauButt: document.getElementById('lau-butt'),
}

function SetColBloManager() {

    var arr = [];

    this.getJSONSessDataInArr = function(key) {
        arr = JSON.parse(sessionStorage.getItem(key));
        return arr;
    };

    this.shuffleArr = function(arr) {
        var currentIndex = arr.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = arr[currentIndex];
            arr[currentIndex] = arr[randomIndex];
            arr[randomIndex] = temporaryValue;
        }

        return arr;
    }

    this.addColBloInHTML = function(colName, colRGB) {
        var inner = [
            "<div class='col-blo'>",
                "<div class='col-squ' data-col-name='" + colName + "' style='background-color:" + colRGB + ";'> </div>",
                "<input type='text' class='col-inp' />",
            "</div>"
        ].join('');

        Sel.colBloCont.innerHTML += inner;   
    }

    this.getColArrShuffAndAdd = function() {
        arr = this.getJSONSessDataInArr('col-data');

        arr = this.shuffleArr(arr);

        for (var i = 0 ; i < arr.length ; i++) {
            this.addColBloInHTML(arr[i][1], arr[i][0]);
        }
    }
}

var setColBloManager = new SetColBloManager;

setColBloManager.getColArrShuffAndAdd();


function GameOneStorageBackup() {

    var self = this;
    var colDataArr = [];
    var colRgb, colName, colAnsw;

    this.getColDataArr = function() {
        for ( var i = 0 ; i < Sel.colBlo.length ; i++) {
            colRgb = getComputedStyle(Sel.colBlo[i].children[0]).backgroundColor.trim();
            colName = Sel.colBlo[i].children[0].getAttribute('data-col-name').trim();
            colAnsw = Sel.colBlo[i].children[1].value.trim();
            colDataArr.push([colRgb, colName, colAnsw]);
        }
        return colDataArr;
    }

    this.stockColDataArr = function() {
        sessionStorage.clear();
        colDataArr = JSON.stringify(self.getColDataArr());
        sessionStorage.setItem('game-one-col-data', colDataArr);
    }

    this.sdGameDirect = function() {
        window.location.replace("/play/game-two");
    }

    this.stockColDataArrAndRed = function() {
        self.stockColDataArr();
        self.sdGameDirect();
    }

    this.init = function() {
        Sel.lauButt.addEventListener('click', this.stockColDataArrAndRed);
    }
}

var gameOneStorageBackup = new GameOneStorageBackup;

gameOneStorageBackup.init();