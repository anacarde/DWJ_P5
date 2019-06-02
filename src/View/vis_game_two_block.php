<?php $style = '<link rel="stylesheet" href="css/game_two_style.css">' ?>
<?php /*$js = '<script src="js/menu-js.js"> </script>'*/ ?>

<?php ob_start(); ?>
    <div id="gam-two-cont">
        <div id="timer-div">
            <div id="tim-tube">
                <div id="tim-sand"> </div> 
            </div>
        </div>
        <div id="resp-box">
<!--             <div id="resp-lab-div">
                
            </div> -->
            <div id="resp-inp-div" class="resp-div">
                <input type="text" id="resp-inp" placeholder="couleur"/>
            </div>
            <div id="resp-butt-div" class="resp-div">
                <button> Valider </button>
                <button> Passer </button>
            </div>
        </div>
    </div>
<?php $content = ob_get_clean(); ?>

<?php require('template/vis_template.php'); ?>