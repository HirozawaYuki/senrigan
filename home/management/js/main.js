// ログインユーザーの登録情報を表示
callApi("../../php/api.php?type=other_user", showOtherUsers);

// ログインユーザー以外の他のユーザーをラジオボタンで表示
callApi("../../php/api.php?type=login_user", showLoginInfo);