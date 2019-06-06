<?php $style = '<link rel="stylesheet" href="css/col_table_style.css">' ?>
<?php $js = '<script src="js/model_js.js"> </script>' ?>

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
            <div class="col-squ" style="background-color: yellow;"> </div>
            <div class="col-name">
                <span> jaune </span>
            </div>
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: green;"> </div>
            <div class="col-name">
                <span> vert </span>
            </div>
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: violet;"> </div>
            <div class="col-name">
                <span> violet </span>
            </div>
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: white;"> </div>
            <div class="col-name">
                <span> blanc </span>
            </div>
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: black;"> </div>
            <div class="col-name">
                <span> noir </span>
            </div>
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: red;"> </div>
            <div class="col-name">
                <span> rouge </span>
            </div>
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: blue;"> </div>
            <div class="col-name">
                <span> bleu </span>
            </div>
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: orange;"> </div>
            <div class="col-name">
                <span> orange </span>
            </div>
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: brown;"> </div>
            <div class="col-name">
                <span> marron </span>
            </div>
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: gray;"> </div>
            <div class="col-name">
                <span> gris </span>
            </div>
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: pink;"> </div>
            <div class="col-name">
                <span> rose </span>
            </div>
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: beige;"> </div>
            <div class="col-name">
                <span> beige </span>
            </div>
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: chartreuse;"> </div>
            <div class="col-name">
                <span> chartreuse </span>
            </div>
        </div>
    </div>
    <div id='lau-butt-div'>
        <button id="lau-butt"> Lancer le premier jeu </button>
    </div>

<?php $content = ob_get_clean(); ?>

<?php require('template/vis_template.php'); ?>