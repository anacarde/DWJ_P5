<?php

namespace Src\Manager;

use App\Manager;
use src\Model\Color;

class ColorManager extends Manager
{
    public function getTotColNb(){
        $req = Manager::dbConnect()->query('SELECT COUNT(*) AS colTotNb FROM color_ls');
        $rep = $req->fetch(\PDO::FETCH_ASSOC); 
        return $rep['colTotNb'];
    }

    public function getColNbByFam($colFam){
        $req = Manager::dbConnect()->prepare('SELECT COUNT(*) AS colFamNb FROM color_ls WHERE color_group = :colFam');
        $req->bindValue("colFam", $colFam);
        $req->execute();
        $rep = $req->fetch(\PDO::FETCH_ASSOC); 
        return $rep['colFamNb'];
    }

    public function getColNameList(){
        $req = Manager::dbConnect()->query('SELECT DISTINCT color_group FROM color_ls');
        $req->setFetchMode(\PDO::FETCH_CLASS | \PDO::FETCH_PROPS_LATE, 'Src\Model\Color');
        $rep = $req->fetchAll();
        return $rep;
    }

    public function getColByFam(Array $arr){
        $req = Manager::dbConnect()->prepare('SELECT color_hex_code, color_name FROM color_ls WHERE color_group = :colFam ORDER BY RAND() LIMIT :colNb');
        $req->bindValue(":colFam", $arr["col-fam"]);
        $req->bindValue(":colNb", $arr["col-nb"], \PDO::PARAM_INT);
        $req->execute();
        $req->setFetchMode(\PDO::FETCH_CLASS | \PDO::FETCH_PROPS_LATE, 'Src\Model\Color');
        $rep = $req->fetchAll();
        return $rep;
    }

    public function getRandCol(Array $arr){
        $req = Manager::dbConnect()->prepare('SELECT color_hex_code, color_name FROM color_ls ORDER BY RAND() LIMIT :colNb');
        $req->bindValue("colNb", $arr["col-nb"], \PDO::PARAM_INT);
        $req->execute();
        $req->setFetchMode(\PDO::FETCH_CLASS | \PDO::FETCH_PROPS_LATE, 'Src\Model\Color');
        $rep = $req->fetchAll();
        return $rep;
    }
}