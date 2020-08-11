//全ユーザーを表示する関数
function showOtherUsers(users) {
  users.forEach(function (user) {
    // 自分の出席を通知するユーザーを表示
    const notice_id = document.getElementById("notice_id");

    const div = document.createElement("div");
    div.classList.add("form-check");
    div.setAttribute("style","margin-bottom:10px");

    // ラジオボタン
    const input = document.createElement("input");
    input.classList.add("form-check-input");
    input.setAttribute("type", "radio");
    input.setAttribute("name", "notice_id");
    input.setAttribute("id", user.id);
    input.setAttribute("value", user.id);

    // ユーザー名
    const label = document.createElement("label");
    label.classList.add("form-check-label");
    label.setAttribute("for", user.id);
    label.textContent = user.name;
    
    // divの下にラジオボタンとユーザー名を取得
    div.appendChild(input);
    div.appendChild(label);
    notice_id.appendChild(div);
  });
}