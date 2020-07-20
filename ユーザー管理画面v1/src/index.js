async function callApi(url, fn) {
  const res = await fetch(url); //レスポンスを取得し、promiseを受け取る
  const users = await res.json(); //json形式に変換
  console.log(users);
  fn(users); //非同期関数は必ずpromiseで返すのでコールバック関数を使用
}

//全ユーザーを表示する関数
function showOtherUsers(users) {
  users.forEach(function (user) {
    // 自分の出席を通知するユーザーを表示
    const notice_id = document.getElementById("notice_id");

    const ul = document.createElement("ul");
    const li = document.createElement("li");

    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("id", user.name);
    input.setAttribute("name", "notice_id");
    input.setAttribute("value", user.id);
    li.appendChild(input);

    const label = document.createElement("label");
    label.setAttribute("for", user.name);
    label.textContent = user.name;
    li.appendChild(label);

    ul.appendChild(li);
    notice_id.appendChild(ul);
  });
}

//ログインユーザーのアカウント情報を表示する関数
function showLoginInfo(users) {
  const user = users[0];

  // ユーザー名を表示
  const name = document.getElementById("name");
  const input_name = document.createElement("input");
  input_name.setAttribute("type", "text");
  input_name.setAttribute("name", "name");
  input_name.setAttribute("placeholder", user.name);
  name.appendChild(input_name);

  // メールアドレスを表示
  const email = document.getElementById("email");
  const input_email = document.createElement("input");
  input_email.setAttribute("type", "email");
  input_email.setAttribute("name", "email");
  input_email.setAttribute("placeholder", user.email);
  email.appendChild(input_email);

  // パスワード入力欄1を表示
  const pswd = document.getElementById("password");
  const input_pswd1 = document.createElement("input");
  input_pswd1.setAttribute("type", "password");
  input_pswd1.setAttribute("name", "password1");
  pswd.appendChild(input_pswd1);

  // パスワード入力欄2を表示
  const input_pswd2 = document.createElement("input");
  input_pswd2.setAttribute("type", "password");
  input_pswd2.setAttribute("name", "password2");
  pswd.appendChild(input_pswd2);

  // 通知がONであればYes, OFFであればNoにチェックを入れる
  const attend = document.getElementById("attend");

  const ul = document.createElement("ul");

  const li1 = document.createElement("li");
  const input_attend1 = document.createElement("input");
  input_attend1.setAttribute("type", "radio");
  input_attend1.setAttribute("name", "attend");
  input_attend1.setAttribute("id", "yes");
  input_attend1.setAttribute("value", "1");
  li1.appendChild(input_attend1);

  const label1 = document.createElement("label");
  label1.setAttribute("for", "yes");
  label1.textContent = "yes";
  li1.appendChild(label1);
  ul.appendChild(li1);

  const li2 = document.createElement("li");
  const input_attend2 = document.createElement("input");
  input_attend2.setAttribute("type", "radio");
  input_attend2.setAttribute("name", "attend");
  input_attend2.setAttribute("id", "no");
  input_attend2.setAttribute("value", "0");
  li2.appendChild(input_attend2);

  const label2 = document.createElement("label");
  label2.setAttribute("for", "no");
  label2.textContent = "no";
  li2.appendChild(label2);
  ul.appendChild(li2);

  attend.appendChild(ul);

  const yes = document.getElementById("yes");
  const no = document.getElementById("no");
  if (user.attend == 0) {
    no.checked = true;
  } else if (user.attend == 1) {
    yes.checked = true;
  }
}

// 出席を通知できる候補ユーザー(全ユーザー)を表示
callApi("other_user_api.php", showOtherUsers);
callApi("login_user_api.php", showLoginInfo);
