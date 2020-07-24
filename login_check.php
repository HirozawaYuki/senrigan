<?php
    require "dbconnect.php";

    session_start();
    
    // ログインボタンを押した後の処理
    if(isset($_POST["txtID"])){

        //DB内でPOSTe-mailを検索
        try {
          $stmt = exeSQL("SELECT * FROM user_table WHERE email = ?");
          $stmt->execute([$_POST["txtID"]]);
          $row = $stmt->fetch(PDO::FETCH_ASSOC);
        } catch (\Exception $e) {
          echo $e->getMessage() . PHP_EOL;
        }
        
        //名前がDB内に存在しているか確認
        if (!isset($row['email'])) {
          header("Location: incorrect.html");
        } else {
          //パスワード確認後sessionにメールアドレスを渡す
          if (password_verify($_POST['txtPassWord'], $row['password'])) {
            session_regenerate_id(true); //session_idを新しく生成し、置き換える
            $_SESSION['name'] = $row['name'];
            header("Location: home");
          } else {
            header("Location: incorrect.html");
          }
        }
    } else {
      header("Location: incorrect.html");
    }
?>