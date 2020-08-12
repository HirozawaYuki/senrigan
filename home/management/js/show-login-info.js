//ログインユーザーのアカウント情報を表示する関数
function showLoginInfo(users) {
  const user = users[0];

  // ユーザー名を表示
  const name = document.getElementById("name");
  name.setAttribute("placeholder", user.name);

  // メールアドレスを表示
  const slack_id = document.getElementById("slack_id");
  slack_id.setAttribute("placeholder", user.slack_id);

  // 通知がONであればon, OFFであればNoにチェックを入れる
  const notice = document.getElementById("notice");
  if (user.notice == 0) {
    notice.checked = false;
  } else if (user.notice == 1) {
    notice.checked = true;
  }

  // ログインユーザーが設定している通知ユーザーにチェックを入れる
  const notice_user = document.getElementById(user.notice_id);
  console.log(notice_user);
  console.log(user.notice_id);
  notice_user.checked = true;
}
