//全ユーザーを表示する関数
function showOtherUsers(users) {
  users.forEach(function (user) {
    // 自分の出席を通知するユーザーを表示
    const notice_id = document.getElementById("notice_id");

    const ul = document.createElement("ul");
    const li = document.createElement("li");

    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("id", user.id);
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
  const slack_id = document.getElementById("slack_id");
  const input_slack_id = document.createElement("input");
  input_slack_id.setAttribute("type", "slack_id");
  input_slack_id.setAttribute("name", "slack_id");
  input_slack_id.setAttribute("placeholder", user.slack_id);
  slack_id.appendChild(input_slack_id);

  // パスワード入力欄1を表示
  const pswd = document.getElementById("password");
  const input_pswd1 = document.createElement("input");
  input_pswd1.setAttribute("type", "password");
  input_pswd1.setAttribute("name", "password1");
  input_pswd1.setAttribute("placeholder", "Password");
  pswd.appendChild(input_pswd1);

  // パスワード入力欄2を表示
  const input_pswd2 = document.createElement("input");
  input_pswd2.setAttribute("type", "password");
  input_pswd2.setAttribute("name", "password2");
  input_pswd2.setAttribute("placeholder", "Password");
  pswd.appendChild(input_pswd2);

  // 通知がONであればon, OFFであればNoにチェックを入れる
  const notice = document.getElementById("notice");

  const ul = document.createElement("ul");

  const li1 = document.createElement("li");
  const input_attend1 = document.createElement("input");
  input_attend1.setAttribute("type", "radio");
  input_attend1.setAttribute("name", "notice");
  input_attend1.setAttribute("id", "on");
  input_attend1.setAttribute("value", "1");
  li1.appendChild(input_attend1);

  const label1 = document.createElement("label");
  label1.setAttribute("for", "on");
  label1.textContent = "ON";
  li1.appendChild(label1);
  ul.appendChild(li1);

  const li2 = document.createElement("li");
  const input_attend2 = document.createElement("input");
  input_attend2.setAttribute("type", "radio");
  input_attend2.setAttribute("name", "notice");
  input_attend2.setAttribute("id", "off");
  input_attend2.setAttribute("value", "0");
  li2.appendChild(input_attend2);

  const label2 = document.createElement("label");
  label2.setAttribute("for", "off");
  label2.textContent = "OFF";
  li2.appendChild(label2);
  ul.appendChild(li2);

  notice.appendChild(ul);

  // ログインユーザーが設定している方の通知設定ボタンにチェックを入れる
  const on = document.getElementById("on");
  const off = document.getElementById("off");
  if (user.notice == 0) {
    off.checked = true;
  } else if (user.notice == 1) {
    on.checked = true;
  }

  // ログインユーザーが設定している通知ユーザーにチェックを入れる
  const notice_user = document.getElementById(user.notice_id);
  notice_user.checked = true;
}

// 出席を通知できる他のユーザーを表示
callApi("other_user_api.php", showOtherUsers);

// ログインユーザーの個人情報を表示
callApi("login_user_api.php", showLoginInfo);
