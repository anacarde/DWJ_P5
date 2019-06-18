<?php

namespace Src\Manager;

use App\Manager;
use src\Model\Color;

class ActionManager extends Manager
{
    public function add(Color $colObj) {
        $req = Manager::dbConnect()->prepare('INSERT INTO color_ls(color_name, color_hex_code, color_group) VALUES (:colName, :colHex, :colGrp)');
        $req->bindValue(':colName', $colObj->getColorName());
        $req->bindValue(':colHex', $colObj->getColorHexCode());
        $req->bindValue(':colGrp', $colObj->getColorGroup());
        $rep = $req->execute();
        return $rep;
    }

    public function delete($id)
    {
        $req = Manager::dbConnect()->prepare('DELETE FROM color_ls WHERE id = :id');
        $req->bindValue(":id", $id, \PDO::PARAM_INT);
        $rep = $req->execute();
        return $rep;
    }
}