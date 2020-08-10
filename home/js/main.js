// APIを叩いて全ユーザーの出席情報を取得し、表示する
callApi("../php/api.php?type=user",showUsers);

// 頻度グラフを表示
callApi("../php/api.php?type=count",drowCountGraph);