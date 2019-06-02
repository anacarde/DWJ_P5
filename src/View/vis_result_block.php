<?php $style = '<link rel="stylesheet" href="css/result_style.css">' ?>
<?php /*$js = '<script src="js/menu-js.js"> </script>'*/ ?>

<?php ob_start(); ?>
    <div id="res-blo">
        <p id="end-ln" class="res-tit-ln"> <strong> Hum... On commence à flairer les couleurs comme on flaire les odeurs hein ? </strong> </p>
        <div id="rep-but-div">
            <button> Je veux rejouer, je veux rejouer ! </button>
        </div>
        <p id="res-hea" class="res-tit-ln"> <strong> Vos résultats : </strong> </p>
        <div id="sco-div">
            <p> <span class="sco-ln"> Jeu n°1 : </span> <span class="score"> 10/10 </span> </p> 
            <p> <span class="sco-ln"> Jeu n°2 : </span> <span class="score"> 0/10 </span> </p> 
            <p> <span class="sco-ln"> Total : </span> <span class="score"> 10/20 </span> </p> 
        </div>
        <hr>
        <div id="err-blo">
            <div class='err-ln-div'>
                <span class="col-squ" style="background-color: blue;"> </span>
                <p> était la couleur <span class="col-name"> bleu </span>, vous avez écrit <span class="col-name"> vert </span>. </p>
            </div>
            <div class='err-ln-div'>
                <span class="col-squ" style="background-color: blue;"> </span>
                <p> était la couleur <span class="col-name"> bleu </span>, vous avez écrit <span class="col-name"> vert </span>. </p>
            </div>
            <div class='err-ln-div'>
                <span class="col-squ" style="background-color: blue;"> </span>
                <p> était la couleur <span class="col-name"> bleu </span>, vous avez écrit <span class="col-name"> vert </span>. </p>
            </div>
            <div class='err-ln-div'>
                <span class="col-squ" style="background-color: blue;"> </span>
                <p> était la couleur <span class="col-name"> bleu </span>, vous avez écrit <span class="col-name"> vert </span>. </p>
            </div>
            <div class='err-ln-div'>
                <span class="col-squ" style="background-color: blue;"> </span>
                <p> était la couleur <span class="col-name"> bleu </span>, vous avez écrit <span class="col-name"> vert </span>. </p>
            </div>
            <div class='err-ln-div'>
                <span class="col-squ" style="background-color: blue;"> </span>
                <p> était la couleur <span class="col-name"> bleu </span>, vous avez écrit <span class="col-name"> vert </span>. </p>
            </div>
            <div class='err-ln-div'>
                <span class="col-squ" style="background-color: blue;"> </span>
                <p> était la couleur <span class="col-name"> bleu </span>, vous avez écrit <span class="col-name"> vert </span>. </p>
            </div>
            <div class='err-ln-div'>
                <span class="col-squ" style="background-color: blue;"> </span>
                <p> était la couleur <span class="col-name"> bleu </span>, vous avez écrit <span class="col-name"> vert </span>. </p>
            </div>
        </div>
    </div>

<?php $content = ob_get_clean(); ?>

<?php require('template/vis_template.php'); ?>