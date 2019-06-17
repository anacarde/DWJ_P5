var Sel = {
    resNote: document.getElementById('res-note'),
    gamOnSco: document.getElementById('gam-on-sco'),
    gamTwoSco: document.getElementById('gam-two-sco'),
    totSco: document.getElementById('tot-sco'),
    aveSco: document.getElementById('ave-sco'),
    endLn: document.getElementById('end-ln'),
    errBlo1: document.getElementById('err-blo-1'),
    errBlo2: document.getElementById('err-blo-2'),
}

function ResultManager() {

    this.gameOneArr = null;
    this.gameTwoArr = null;
    this.gameOneRes = 0;
    this.gameTwoRes = 0;
    this.numTot = null;
    this.denTot = null;
    this.aveNum = null;
    this.aveDen = 20;

    this.getJSONSessDataInArr = function(key) {
        var gameArr = JSON.parse(sessionStorage.getItem(key));
        return gameArr;
    }

    this.dispResGame = function(num, den, div) {
        div.textContent = String(num) + '/' + String(den);
    }

    this.combineTwoVal = function(val1, val2) {
        var tot = val1 + val2;
        return tot; 
    }

    this.getNumWithFixDenFromFract = function(numEntr, denEntr, denRet) {
        var numRet = (denRet / (denEntr / numEntr));
        if (!Number.isInteger(numRet)) {
            numRet = numRet.toFixed(1);
        }
        return numRet;
    }

    this.getGameResFromArr = function(arr){
        var nb = 0;
        for (var i = 0 ; i < arr.length ; i++) {
            if (arr[i][1] === arr[i][2]) {
                nb++;
            }
        }
        return nb;
    }

    this.dispEndLine = function(resNum, div) {
        if (resNum === 0) {
            div.textContent = 'Distinguez-vous le blanc du noir ?';
        } else if (0 < resNum && resNum < 3) {
            div.textContent = 'Mais enfin ! Les couleurs c\'est essentiel dans la vie !';
        } else if ( 3 <= resNum && resNum < 7) {
            div.textContent = 'Vous pouvez dire jaune, rouge et bleu, mais ça s\'arrête là.';
        } else if ( 7 <= resNum && resNum < 10) {
            div.textContent = 'c\'est médiocre tout ça, c\'est médiocre..';
        } else if (10 <= resNum && resNum < 13) {
            div.textContent = 'Nous avons un élève en étude. Chuuut.'
        } else if (13 <= resNum && resNum < 17) {
            div.textContent = 'Hum... On commence à flairer les couleurs comme on flaire les odeurs hein ?';
        } else if (17 <= resNum && resNum < 20) {
            div.textContent = 'C\'est presque parfait !';
        } else if (resNum === 20) {
            div.textContent = 'Bon, ben vous n\'avez plus rien à faire ici. Continuez votre vie et bonne route.';
        }
    }

    this.dispGameErrBlo = function(div, colRGB, colName, colAns) {
        var inner;
        if(colAns === '') {
            inner = [
                '<div class="err-ln-div">',
                    '<span class="col-squ" style="background-color:' + colRGB + '"> </span>',
                    '<p> était la couleur <span class="col-name">' + colName + '</span>, vous n\'avez rien écrit. </p>',
                '</div>'
            ].join('');
        } else {
            inner = [
                '<div class="err-ln-div">',
                    '<span class="col-squ" style="background-color:' + colRGB + '"> </span>',
                    '<p> était la couleur <span class="col-name">' + colName + '</span>, vous avez écrit <span class="col-name">' + colAns + '</span>. </p>',
                '</div>'
            ].join('');
        }
        div.innerHTML += inner;
    }

    this.dispGameErrFromArr = function(arr, div) {
        for (var i = 0 ; i < arr.length ; i++) {
            if (arr[i][1] !== arr[i][2]) {
                this.dispGameErrBlo(div, arr[i][0], arr[i][1], arr[i][2]);
            }
        }
    }

    this.init = function() {
        this.gameOneArr = this.getJSONSessDataInArr('game-one-col-data');
        this.gameTwoArr = this.getJSONSessDataInArr('game-two-col-data');
        this.gameOneRes = this.getGameResFromArr(this.gameOneArr);
        this.gameTwoRes = this.getGameResFromArr(this.gameTwoArr);
        this.dispResGame(this.gameOneRes, this.gameOneArr.length, Sel.gamOnSco);
        this.dispResGame(this.gameTwoRes, this.gameTwoArr.length, Sel.gamTwoSco);
        this.numTot = this.gameOneRes + this.gameTwoRes;
        this.denTot = this.gameOneArr.length + this.gameTwoArr.length;
        this.dispResGame(this.numTot, this.denTot, Sel.totSco);
        this.aveNum = this.getNumWithFixDenFromFract(this.numTot, this.denTot, this.aveDen);
        this.dispResGame(this.aveNum, this.aveDen, Sel.aveSco);
        this.dispResGame(this.aveNum, this.aveDen, Sel.resNote);
        this.dispEndLine(this.aveNum, Sel.endLn);
        this.dispGameErrFromArr(this.gameOneArr , Sel.errBlo1);
        this.dispGameErrFromArr(this.gameTwoArr , Sel.errBlo2);
/*        console.log(this.gameOneRes);
        console.log(this.gameTwoRes);*/
    }

}

var resultManager = new ResultManager;

resultManager.init();












/*    this.dispResGamFromArr = function(arr, resVar, div) {
        resVar = this.getResGameFromArr(arr, resVar);
        div.textContent = String(resVar) + '/' + String(arr.length);
    }*/
