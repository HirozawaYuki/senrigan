// 全ユーザーの名前・在室状況を表示する関数
function showUsers(users){
  
  /*在室者と不在者に一旦リストを分ける*/
  var attendance_list = [];
  var attend_num = 0;
  var absent_list = [];
  var absent_num = 0;

  //現在時刻の取得
  var date=new Date();
  //現在の日
  //var day=date.day();
  //現在の時間
  var hour=date.getHours();

  //時間を保存するリスト
  var attend_time_list=[];
  var absent_time_list=[];

  //色を保存するリスト
  var attend_color_list_r=[];
  var absent_color_list_r=[];
  var attend_color_list_g=[];
  var absent_color_list_g=[];
  var attend_color_list_b=[];
  var absent_color_list_b=[];


  var check_attendance = "square_attendance";
  for (var human = 0; human < users.length; human++) {

    const attend = users[human].attend;

    //時間の計算
    var time=users[human].last_login;
    var last_hour=time[11]+time[12];
    var show_hour=hour-last_hour;

    if (attend == 1) {
      check_attendance === "square_attendance";
      attendance_list[attend_num] = users[human].name;
      attend_time_list[attend_num]=show_hour;
      attend_color_list_r[attend_num]=users[human].r;
      attend_color_list_g[attend_num]=users[human].g;
      attend_color_list_b[attend_num]=users[human].b;
      attend_num += 1;
    } else {
      check_attendance === "square_absent";
      absent_list[absent_num] = users[human].name;
      absent_time_list[absent_num]=show_hour;
      absent_color_list_r[absent_num]=users[human].r;
      absent_color_list_g[absent_num]=users[human].g;
      absent_color_list_b[absent_num]=users[human].b;
      absent_num += 1;
    }
  }

  var color_list=["red","green","blue","red","blue","green"];
  
  var member_concat = attendance_list.concat(absent_list); //在室者がリストの先頭に来るようにリストを結合
  
  var tiem_list=attend_time_list.concat(absent_time_list);

  var color_list_r=attend_color_list_r.concat(absent_color_list_r);

  var color_list_g=attend_color_list_g.concat(absent_color_list_g);

  var color_list_b=attend_color_list_b.concat(absent_color_list_b);

  for (var num = 0; num < member_concat.length; num++) {
    
    // createElement:タグの生成　<button></button>
    var div = document.createElement("div");
    var p0 = document.createElement("p");
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var b1 = document.createElement("button");
    

    var p_time=document.createElement("p");

    // innerHTMLを用いることで要素の中身を変更することができる
    p1.innerHTML = member_concat[num];
    // setAttribute:タグの属性の設定
    p1.setAttribute("id", num);
    // var check_attendance = decision_class();
    div.setAttribute("class","flex_container");

    /*在室者は前半に置いてあるはずなので、総在室者の数に達するまでは在室として定義*/
    if (attend_num > num) {
      p1.setAttribute("class", "square_attendance");
      // p2.innerHTML = "在室";
      p2.setAttribute("id", "attendance");
    } else {
      p1.setAttribute("class", "square_absent");
      // p2.innerHTML = "不在";
      p2.setAttribute("id", "absent");
    }
    b1.setAttribute("id","button");
    //b1.innerHTML="";

    //時間の表示
    p_time.innerHTML=(tiem_list[num].toString())+"時間前";
    p_time.setAttribute("class","log_time");

    p0.setAttribute("class","user_color");
    p0.setAttribute("style","background-color:rgb("+color_list_r[num]+","+color_list_g[num]+","+color_list_b[num]+"); border:thin solid rgb("+color_list_r[num]+","+color_list_g[num]+","+color_list_b[num]+")");

    //appendChild:HTMLに設定済みのタグを挿入
    document.getElementById("main").appendChild(div);
    div.appendChild(p0);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(b1);
    div.appendChild(p_time);
    // document.getElementById("main").appendChild(p1);
    // document.getElementById("main").appendChild(p2);
    // document.getElementById("main").appendChild(b1);
    var left_pos = 5;
    var top_pos = 100;
    document.getElementById(num).style.left = "" + left_pos + "%";
    document.getElementById(num).style.top = "" + top_pos + "px";
  }
  //document.getElementById("main").appendChild(p_time);
  
}