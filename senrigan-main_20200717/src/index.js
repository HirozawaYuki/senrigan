import "./styles.css";

/*仮のメンバー表(後々データベースに置き換え)*/
var virtual_db_list = [
  "山口太郎",
  "宇部花子",
  "常盤学",
  "琴芝誠",
  "岩国勝男",
  "和木絵里",
  "広島紅葉",
  "呉隆司",
  "徳山明"
];

/*在室者と不在者に一旦リストを分ける*/

var attendance_list = [];
var attend_num = 0;
var absent_list = [];
var absent_num = 0;
for (var human = 0; human < virtual_db_list.length; human++) {
  var check_attendance = decision_class(); //データベース接続までは在室不在はランダムで決定
  if (check_attendance === "square_attendance") {
    attendance_list[attend_num] = virtual_db_list[human];
    attend_num += 1;
  } else {
    absent_list[absent_num] = virtual_db_list[human];
    absent_num += 1;
  }
}

var member_concat = attendance_list.concat(absent_list); //在室者がリストの先頭に来るようにリストを結合

for (var num = 0; num < member_concat.length; num++) {
  // createElement:タグの生成　<button></button>
  var p1 = document.createElement("p");
  var p2 = document.createElement("p");
  // innerHTMLを用いることで要素の中身を変更することができる
  p1.innerHTML = member_concat[num];
  // setAttribute:タグの属性の設定
  p1.setAttribute("id", num);
  // var check_attendance = decision_class();

  /*在室者は前半に置いてあるはずなので、総在室者の数に達するまでは在室として定義*/
  if (attend_num > num) {
    p1.setAttribute("class", "square_attendance");
    p2.innerHTML = "在室";
    p2.setAttribute("id", "attendance");
  } else {
    p1.setAttribute("class", "square_absent");
    p2.innerHTML = "不在";
    p2.setAttribute("id", "absent");
  }
  //appendChild:HTMLに設定済みのタグを挿入
  document.getElementById("main").appendChild(p1);
  document.getElementById("main").appendChild(p2);
  var left_pos = 5;
  var top_pos = 100;
  document.getElementById(num).style.left = "" + left_pos + "%";
  document.getElementById(num).style.top = "" + top_pos + "px";
}

/*ランダムでクラスを決定するための関数　データベース接続処理が出来たら使わない*/
function decision_class() {
  var class_name;
  var circle_class = Math.floor(Math.random() * 2);
  if (circle_class === 0) {
    class_name = "square_attendance";
  } else {
    class_name = "square_absent";
  }
  return class_name;
}
