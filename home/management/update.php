<?php
    require "../../dbconnect.php";

    session_start();

    // OKボタンが押された時に実行する
    if (isset($_POST["ok"])) {

        // 名前変更
        if(!empty($_POST["name"])){
            $name = htmlspecialchars($_POST["name"]); //変更後のname
            $stmt = exeSQL("UPDATE user_table SET name = '".$name."' WHERE name = '".$_SESSION["name"]."'");
            $_SESSION["name"] = $name;
        }

        // e-mail変更
        if(!empty($_POST["email"])){
            $email = htmlspecialchars($_POST["email"]); //変更後のname
            $stmt = exeSQL("UPDATE user_table SET email = '".$email."' WHERE name = '".$_SESSION["name"]."'");
        }

        // パスワード変更
        if(!empty($_POST["password1"])){
            $password1 = htmlspecialchars($_POST["password1"]); //1つ目のパスワード
            $password2 = htmlspecialchars($_POST["password2"]); //2つ目のパスワード
            if($password1 == $password2){
                // 管理者にパスワードが漏洩しないように、パスワードをハッシュ化してデータベースに保存
                $password1 = password_hash(htmlspecialchars($_POST['password']), PASSWORD_DEFAULT);
                $stmt = exeSQL("UPDATE user_table SET password = '".$password1."' WHERE name = '".$_SESSION["name"]."'");
            } else {
                echo("同じパスワードを入力してください");
            }
        }

        // 通知ON/OFFの変更
        // emptyを使うとnoを送信したときにif文に入れないのでissetを使用
        if(isset($_POST["attend"])){
            $attend = htmlspecialchars($_POST["attend"]);
            $stmt = exeSQL("UPDATE user_table SET attend = '".$attend."' WHERE name = '".$_SESSION["name"]."'");
        }

        // 通知するユーザーの変更
        if(!empty($_POST["notice_id"])){
            $notice_id = htmlspecialchars($_POST["notice_id"]); //変更後のname
            $stmt = exeSQL("UPDATE user_table SET notice_id = '".$notice_id."' WHERE name = '".$_SESSION["name"]."'");
        }

        header("Location: index.html");
    }
    
?>