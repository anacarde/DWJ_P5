<?php $style = '<link rel="stylesheet" href="css/col_table_style.css">' ?>
<?php /*$js = '<script src="js/menu-js.js"> </script>'*/ ?>

<?php ob_start(); ?>
    <div id="col-blo-cont">
        <div class="col-blo">
            <div class="col-squ" style="background-color: blue;"> </div>
            <input type="text" class="col_inp" />
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: blue;"> </div>
            <input type="text" class="col_inp" />
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: blue;"> </div>
            <input type="text" class="col_inp" />
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: blue;"> </div>
            <input type="text" class="col_inp" />
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: blue;"> </div>
            <input type="text" class="col_inp" />
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: blue;"> </div>
            <input type="text" class="col_inp" />
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: blue;"> </div>
            <input type="text" class="col_inp" />
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: blue;"> </div>
            <input type="text" class="col_inp" />
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: blue;"> </div>
            <input type="text" class="col_inp" />
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: blue;"> </div>
            <input type="text" class="col_inp" />
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: blue;"> </div>
            <input type="text" class="col_inp" />
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: blue;"> </div>
            <input type="text" class="col_inp" />
        </div>
        <div class="col-blo">
            <div class="col-squ" style="background-color: blue;"> </div>
            <input type="text" class="col_inp" />
        </div>
    </div>
    <div id='lau-butt'>
        <button> Valider mes réponses et lancer le deuxième jeu </button>
    </div>

<?php $content = ob_get_clean(); ?>

<?php require('template/vis_template.php'); ?>