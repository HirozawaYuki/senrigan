<?php
    require "../../../php/dbconnect.php";

    session_start();

    try {

        // 更新ボタンを押した場合、エラーメッセージを出力して終了
        if (!isset($_POST["update"])) {
            throw new Exception("Invalid access");
        }

        // 名前変更
        if(!empty($_POST["name"])){
            $name = htmlspecialchars($_POST["name"]);
            $stmt = exeSQL("UPDATE user_table SET name = '".$name."' WHERE name = '".$_SESSION["name"]."'");
            $_SESSION["name"] = $name;
        }
        // slack ID変更
        if(!empty($_POST["slack_id"])){
            $slack_id = htmlspecialchars($_POST["slack_id"]);
            $stmt = exeSQL("UPDATE user_table SET slack_id = '".$slack_id."' WHERE name = '".$_SESSION["name"]."'");
        }
        // パスワード変更
        if(!empty($_POST["password1"])){
            $password1 = htmlspecialchars($_POST["password1"]); //1つ目のパスワード
            $password2 = htmlspecialchars($_POST["password2"]); //2つ目のパスワード
            if($password1 != $password2){
                throw new Exception("Please enter same password");
            }
            // 管理者にパスワードが漏洩しないように、パスワードをハッシュ化してデータベースに保存
            $password1 = password_hash(htmlspecialchars($password1), PASSWORD_DEFAULT);
            $stmt = exeSQL("UPDATE user_table SET password = '".$password1."' WHERE name = '".$_SESSION["name"]."'");
            
        }
        // 通知ON/OFFの変更
        // emptyを使うとnoを送信したときにif文に入れないのでissetを使用
        if(isset($_POST["notice"])){
            $notice = htmlspecialchars($_POST["notice"]);
            $stmt = exeSQL("UPDATE user_table SET notice = '".$notice."' WHERE name = '".$_SESSION["name"]."'");
        }
        // 通知するユーザーの変更
        if(!empty($_POST["notice_id"])){
            $notice_id = htmlspecialchars($_POST["notice_id"]);
            $stmt = exeSQL("UPDATE user_table SET notice_id = '".$notice_id."' WHERE name = '".$_SESSION["name"]."'");
        }

        header("Location: ../../index.html");
        
    } catch (Exception $e) {
        echo $e->getMessage();
    }
?>