<?php $style = '<link rel="stylesheet" href="css/col_table_style.css">' ?>
<?php /*$js = '<script src="js/menu-js.js"> </script>'*/ ?>

<?php ob_start(); ?>
    <div id='ind-blo'>
        <p class="main-ind-ln"> <strong> Retenez bien les couleurs et leur nom </strong> </p>
        <div id="gam-ind-ln">
            <p> Dans le premier jeu, les mêmes couleurs vont s'afficher dans un ordre aléatoire et ce sera à vous de réécrire leur nom. </p>
            <p> Dans le deuxième jeu, une couleur à la fois sera affichée et vous aurez 10 seconde par couleur pour répondre. (vous pouvez vous servir des raccourcis clavier "entrée" ou "échap" pour valider ou passer.) </p>
        </div>
        <p class="main-ind-ln"> <strong> Lorsque vous êtes prêt, appuyez sur le bouton "lancer le premier jeu" au bas. </strong> </p>
    </div>
    <div id="col-blo-cont">
        <div class="col-blo">
            <div class="col-squ" style="background-color: blue;"> </div>
            <div class="col-name">
                <span> Bleu </span>
            </div>
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: blue;"> </div>
            <div class="col-name">
                <span> Bleu </span>
            </div>
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: blue;"> </div>
            <div class="col-name">
                <span> Bleu </span>
            </div>
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: blue;"> </div>
            <div class="col-name">
                <span> Bleu </span>
            </div>
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: blue;"> </div>
            <div class="col-name">
                <span> Bleu </span>
            </div>
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: blue;"> </div>
            <div class="col-name">
                <span> Bleu </span>
            </div>
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: blue;"> </div>
            <div class="col-name">
                <span> Bleu </span>
            </div>
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: blue;"> </div>
            <div class="col-name">
                <span> Bleu </span>
            </div>
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: blue;"> </div>
            <div class="col-name">
                <span> Bleu </span>
            </div>
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: blue;"> </div>
            <div class="col-name">
                <span> Bleu </span>
            </div>
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: blue;"> </div>
            <div class="col-name">
                <span> Bleu </span>
            </div>
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: blue;"> </div>
            <div class="col-name">
                <span> Bleu </span>
            </div>
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: blue;"> </div>
            <div class="col-name">
                <span> Bleu </span>
            </div>
        </div>
    </div>
    <div id='lau-butt'>
        <button> Lancer le premier jeu </button>
    </div>

<?php $content = ob_get_clean(); ?>

<?php require('template/vis_template.php'); ?>