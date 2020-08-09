<?php
    require "php/dbconnect.php";

    session_start();
    
    // ログインボタンを押した後の処理
    if(isset($_POST["txtName"])){

        //DB内でPOSTe-mailを検索
        try {
          $txtName = htmlspecialchars($_POST["txtName"]);
          $stmt = exeSQL("SELECT * FROM user_table WHERE name = ?");
          $stmt->execute([$txtName]);
          $row = $stmt->fetch(PDO::FETCH_ASSOC);
        } catch (\Exception $e) {
          echo $e->getMessage() . PHP_EOL;
        }
        
        //名前がDB内に存在しているか確認
        if (!isset($row['name'])) {
          header("Location: incorrect.html");
        } else {
          //パスワード確認後sessionに名前を渡す
          $password = htmlspecialchars($_POST["txtPassWord"]);
          if (password_verify($password, $row['password'])) {
            session_regenerate_id(true); //session_idを新しく生成し、置き換える
            $_SESSION['name'] = $row['name'];
            $_SESSION['id'] = $row['id'];
            header("Location: home");
          } else {
            header("Location: incorrect.html");
          }
        }
    } else {
      header("Location: incorrect.html");
    }
?>