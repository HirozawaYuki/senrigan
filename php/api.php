<?php

  require "../dbconnect.php";

  session_start();

  try {
    if (!isset($_GET["type"])){
      throw new Exception("不正なアクセスです!");
    }

    switch ($_GET["type"]) {
      // ユーザーに関する全情報を取得する
      case "user":
        $stmt = exeSQL("SELECT * FROM (personal_color_table a
        INNER JOIN user_table c ON a.id = c.id) INNER JOIN last_login_table d ON a.id = d.id");
        // INNER JOIN personal_count_table b ON a.id = b.id) 
      break;
      case "personal_count":
        $stmt = exeSQL("SELECT * FROM date_count_table ORDER BY date DESC");
        break;
      case "color_and_count":
        $stmt = exeSQL("SELECT * FROM date_color_table INNER JOIN date_count_table ON date_color_table.date = date_count_table.date ORDER BY date_color_table.date DESC");
        break;
      case "time":
        $stmt = exeSQL("SELECT * FROM login_time_table");
        break;
      case "other_user_name":
        $stmt = exeSQL("SELECT * FROM user_table WHERE name != '".$_SESSION["name"]."' ORDER BY id");
        break;
      case "login_user":
        $stmt = exeSQL("SELECT * FROM user_table WHERE name = '".$_SESSION["name"]."'");
        break;
      default:
        throw new RuntimeException("invalid value...");
        break;
    }

    $all_data = array();

    while($rec = $stmt->fetch(PDO::FETCH_ASSOC)){
        $all_data[] = $rec;
    }
    //JSON_UNESCAPED_UNICODEは文字化け対策
    header('Content-type:application/json; charset=utf8');

    echo json_encode($all_data, JSON_UNESCAPED_UNICODE);

  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>