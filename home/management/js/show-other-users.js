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
    label.setAttribute("for", user.id);
    label.textContent = user.name;
    li.appendChild(label);

    ul.appendChild(li);
    notice_id.appendChild(ul);
  });
}