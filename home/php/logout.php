<?php

  session_start();

  try {
    // セッション情報がない場合
    if (!isset($_SESSION["name"])) {
      throw new Exception("Session is TimeOut");
    }
    
    //セッション変数のクリア
    $_SESSION = array();
    
    //セッションクッキーも削除
    if (ini_get("session.use_cookies")) {
        $params = session_get_cookie_params();
        setcookie(session_name(), '', time() - 42000,
            $params["path"], $params["domain"],
            $params["secure"], $params["httponly"]
        );
    }

    //セッションクリア（ログアウト）
    @session_destroy();

    echo 'Logoutしました。';
    header("Location: ../../index.html");

  } catch (Exception $e) {
    echo $e->getMessage();
  }
    

?>