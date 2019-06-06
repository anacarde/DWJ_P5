<?php $style = '<link rel="stylesheet" href="css/col_table_style.css">' ?>
<?php $js = '<script src="js/game_one_js.js"> </script>' ?>

<?php ob_start(); ?>
    <div id="col-blo-cont">
    </div>
    <div id='lau-butt-div'>
        <button id="lau-butt"> Valider mes réponses et lancer le deuxième jeu </button>
    </div>

<?php $content = ob_get_clean(); ?>

<?php require('template/vis_template.php'); ?>