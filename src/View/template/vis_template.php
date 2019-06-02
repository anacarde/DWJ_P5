<!DOCTYPE html>
<html lang="fr">
    <head>
        <title> Quelques noms de couleurs </title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link href="https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap" rel="stylesheet">
        <link rel="shortcut icon" href="img/logo_mini.ico">
        <link rel="stylesheet" href="css/vis_temp_style.css">
        <?= $style ?? null ?>
    </head>
    <body>
        <div id="hea-blo">
            <div id="hea-top-blo">
                <div id="hea-logo">
                    <img src="img/logo.png" alt="logo-quelques-noms-de-couleur" />
                </div>
                <div id="hea-tit-div">
                    <h1> <span> &lt;&lt; Quelques noms de couleurs &gt;&gt; </span> </h1>
                </div>
            </div>
            <div id="hea-med-blo">
                <em> Un site pour apprendre des noms de couleurs</em>
            </div>
            <div id="hea-bot-blo">
                <nav id="hea-nav">
                    <ul id="hea-nav-ul">
                        <li> <button class="nav-butt"> Accueil </button> </li>
                        <li> <button class="nav-butt"> Jouer </button> </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div id="cont-blo">
            <?= $content ?? "hello" ?>
        </div>
            <?= $js ?? null ?>
    </body>
</html>