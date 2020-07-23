<?php

    function exeSQL($sql){
        try {
            $dsn = 'mysql:dbname=senrigan;host=localhost';
            $username = 'super_user';
            $password = 'antipg0246';
            $dbh = new PDO($dsn, $username, $password); //データベースに接続
            $dbh->query('SET NAMES utf8'); //文字コードのための設定
            $stmt = $dbh->prepare($sql); //sql文を実行する準備
            $stmt->execute();
            $dbh = null; //データベースから切断
            return $stmt;
        } catch (Exception $e) {
            echo $e -> getMessage();
        }
    }
    
?>