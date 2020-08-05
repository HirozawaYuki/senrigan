// 全ユーザーの名前・在室状況を表示する関数
function showUsers(users){
  
    /*在室者と不在者に一旦リストを分ける*/
    var attendance_list = [];
    var attend_num = 0;
    var absent_list = [];
    var absent_num = 0;
  
    var check_attendance = "square_attendance";
    for (var human = 0; human < users.length; human++) {
  
      const attend = users[human].attend;
      console.log(attend);
  
      if (attend == 1) {
        check_attendance === "square_attendance";
        attendance_list[attend_num] = users[human].name;
        attend_num += 1;
      } else {
        check_attendance === "square_absent";
        absent_list[absent_num] = users[human].name;
        absent_num += 1;
      }
    }

    var color_list=["red","green","blue","red","blue","green"];
    
    var member_concat = attendance_list.concat(absent_list); //在室者がリストの先頭に来るようにリストを結合
    
    for (var num = 0; num < member_concat.length; num++) {
      // createElement:タグの生成　<button></button>
      var div = document.createElement("div");
      var p0 = document.createElement("p");
      var p1 = document.createElement("p");
      var p2 = document.createElement("p");
      var b1 = document.createElement("button");
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
      b1.innerHTML="";

      p0.setAttribute("class","user_color");
      p0.setAttribute("style","background-color:"+color_list[num]+"");

      //appendChild:HTMLに設定済みのタグを挿入
      document.getElementById("main").appendChild(div);
      div.appendChild(p0);
      div.appendChild(p1);
      div.appendChild(p2);
      div.appendChild(b1);
      // document.getElementById("main").appendChild(p1);
      // document.getElementById("main").appendChild(p2);
      // document.getElementById("main").appendChild(b1);
      var left_pos = 5;
      var top_pos = 100;
      document.getElementById(num).style.left = "" + left_pos + "%";
      document.getElementById(num).style.top = "" + top_pos + "px";
    }
    
  }
  //a
  // Ajaxでデータベース内のユーザーをディスプレイに表示する
  callApi("all_user_api.php",showUsers);