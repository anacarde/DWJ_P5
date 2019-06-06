<?php $style = '<link rel="stylesheet" href="css/result_style.css">' ?>
<?php $js = '<script src="js/result_js.js"> </script>' ?>

<?php ob_start(); ?>
    <div id="res-blo">
        <p id="res-note"></p>
        <p id="end-ln" class="res-tit-ln"></p>

        <div id="rep-but-div">
            <button> Je veux rejouer, je veux rejouer ! </button>
        </div>
        <p id="res-hea" class="res-tit-ln"> <strong> Vos résultats : </strong> </p>
        <div id="sco-div">
            <p> <span class="sco-ln"> Jeu n°1 : </span> <span id="gam-on-sco" class="score"></span> </p> 
            <p> <span class="sco-ln"> Jeu n°2 : </span> <span id="gam-two-sco" class="score"></span> </p> 
            <p> <span class="sco-ln"> Total : </span> <span id="tot-sco" class="score"></span> </p> 
            <p> <span class="sco-ln"> Moyenne : </span> <span id="ave-sco" class="score"></span> </p> 
        </div>
        <hr>
        <p class='err-leg-ln'> Premier exercice </p>
        <div class="err-blo" id="err-blo-1">

        </div>
        <p class='err-leg-ln'> Deuxième exercice </p>
        <div class="err-blo" id="err-blo-2">

        </div>
    </div>

<?php $content = ob_get_clean(); ?>

<?php require('template/vis_template.php'); ?>




<!--             <div class='err-ln-div'>
                <span class="col-squ" style="background-color: blue;"> </span>
                <p> était la couleur <span class="col-name"> bleu </span>, vous avez écrit <span class="col-name"> vert </span>. </p>
            </div>


            <div class='err-ln-div'>
                <span class="col-squ" style="background-color: blue;"> </span>
                <p> était la couleur <span class="col-name"> bleu </span>, vous avez écrit <span class="col-name"> vert </span>. </p>
            </div> -->