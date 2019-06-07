<?php $style = '<link rel="stylesheet" href="css/gameTwoStyle.css">' ?>
<?php $js = '<script src="js/gameTwoJs.js"> </script>' ?>

<?php ob_start(); ?>
    <div id="gam-two-cont">
        <div id="timer-div">
            <div id="tim-tube">
                <div id="tim-sand"> </div> 
            </div>
        </div>
        <div id="resp-box">
            <div id="resp-inp-div" class="resp-div">
                <input type="text" id="resp-inp" placeholder="couleur" autofocus/>
                <p id="end-ln" class="disp-mode hidden"> La partie est terminée </p>
            </div>
            <div id="resp-butt-div" class="resp-div">
                <button id="val-butt"> Valider </button>
                <button id="pass-butt"> Passer </button>
                <button id="res-butt" class="hidden"> Passer aux résultats </button>
            </div>
        </div>
    </div>
<?php $content = ob_get_clean(); ?>

<?php require('template/visTemplate.php'); ?>