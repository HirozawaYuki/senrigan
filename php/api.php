<?php
  /*+
  * データベースsenriganから取得したレコードをJSON形式で出力する。
  * 取得できない場合はエラー文を出力する
  * 
  * @return json
  * @throws Exception
  * @throws Runtime Exception
  */

  // SQL文を実行する関数exeSQLを呼び出すためにdbconnect.phpを呼び出す
  require "dbconnect.php";

  // ログインしているユーザー情報を保持
  session_start();

  try {
    if (!isset($_GET["type"])){
      throw new Exception("parameter is not defined");
    }

    switch ($_GET["type"]) {
      // ユーザーに関する全情報を取得する
      case "user":
        $stmt = exeSQL("SELECT * FROM (id_color_table a
        INNER JOIN user_table c ON a.id = c.id) INNER JOIN last_login_table d ON a.id = d.id ORDER BY attend DESC");
      break;
      // ユーザーid・名前・出席数を取得する
      case "count":
        if (!isset($_GET["id"])){
          throw new Exception("parameter id is not defined");
        }
        $id = (int)($_GET["id"]);
        $stmt = exeSQL("SELECT * FROM id_count_table INNER JOIN user_table ON id_count_table.id = user_table.id WHERE user_table.id = ".$id."");
        break;
      // 直近7日間の色と出席数を取得する
      case "color_and_count":
        $stmt = exeSQL("SELECT * FROM date_color_table INNER JOIN date_count_table ON date_color_table.date = date_count_table.date ORDER BY date_color_table.date DESC");
        break;
      // ユーザーidとそのユーザーの最終ログイン時間を取得する
      case "time":
        $stmt = exeSQL("SELECT * FROM login_time_table");
        break;
      // ログインしているユーザー以外のユーザーを取得する
      case "other_user":
        $stmt = exeSQL("SELECT * FROM user_table WHERE name != '".$_SESSION["name"]."' ORDER BY id");
        break;
      // ログインユーザーのid、パスワード、通知ON/OFFを取得する
      case "login_user":
        $stmt = exeSQL("SELECT * FROM user_table WHERE name = '".$_SESSION["name"]."'");
        break;
      case "umbrella":
        $stmt = exeSQL("SELECT * FROM weather_table");
        break;
      default:
        throw new RuntimeException("invalid parameter");
        break;
    }

    $all_data = array();

    while($rec = $stmt->fetch(PDO::FETCH_ASSOC)){
        $all_data[] = $rec;
    }
    //JSON_UNESCAPED_UNICODEは文字化け対策
    header('Content-type:application/json; charset=utf8');

    // 取得したデータベースのレコードをJSON形式で返す
    echo json_encode($all_data, JSON_UNESCAPED_UNICODE);

  } catch (Exception $e) {
    echo $e->getMessage();
  }
?>