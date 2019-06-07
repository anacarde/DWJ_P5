<?php $style = '<link rel="stylesheet" href="css/homeStyle.css">' ?>
<?php $js = '<script src="js/homeJs.js"> </script>' ?>

<?php ob_start(); ?>
    <div id="cont_inn">
        <div id="carousel">
            <div id="pause_butt" class="car_butt"> || </div>
            <div id="arr_div">
                <div id="lef_arr" class="car_arr car_butt"> &lt; </div>
                <div id="rig_arr" class="car_arr car_butt"> &gt; </div>
            </div>
            <div id="container">
                <div id="car1" class="car_obj">
                    <p> Bienvenue sur &lt;&lt; Quelques noms de couleurs &gt;&gt; </p>
                    <div id="" class="car_img">
                        <img src="img/logo.png" alt="" />
                    </div>
                </div>
                <div id="car2" class="car_obj">
                    <p> Dans ce jeu, vous allez pouvoir apprendre des noms de couleurs, chouette hein ? </p>
                </div>
                <div id="car3" class="car_obj">
                    <p> Appuyez tout d'abord sur jouer. </p>
                    <div id="" class="car_img">
                        <img src="img/logo.png" alt="" />
                    </div>
                </div>
                <div id="car4" class="car_obj">
                    <p> Vous verrez apparaître un menu de sélection, choisissez vos préférences. </p>
                    <div id="" class="car_img">
                        <img src="img/logo.png" alt="" />
                    </div>
                </div>
                <div id="car5" class="car_obj">
                    <p> Les couleurs s'affichent. Mémorisez-les bien avant de passer à l'étape suivante. </p>
                    <div id="" class="car_img">
                        <img src="img/logo.png" alt="" />
                    </div>
                </div>
                <div id="car6" class="car_obj">
                    <p> Premier jeu: remplissez les zones de texte avec le bon nom de couleur. </p>
                    <div id="" class="car_img">
                        <img src="img/logo.png" alt="" />
                    </div>
                </div>
                <div id="car7" class="car_obj">
                    <p> Deuxième jeu : Une seule couleur à la fois, mais vous êtes limité par le temps. </p>
                    <div id="" class="car_img">
                        <img src="img/logo.png" alt="" />
                    </div>
                </div>
                <div id="car8" class="car_obj">
                    <p> La partie est finie, appréciez (ou pas) votre score. </p>
                    <div id="" class="car_img">
                        <img src="img/logo.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>





<?php $content = ob_get_clean(); ?>


<?php require('template/visTemplate.php'); ?>