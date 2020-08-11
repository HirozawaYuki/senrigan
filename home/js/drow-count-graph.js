/**
 * 頻度グラフを表示する関数
 * @param {array} user 
 */
function drowCountGraph(users) {

  users.forEach(user => {
      // グラフ名をつける（ユーザー名）
      const modal = document.getElementById("graph_name");
      modal.innerHTML = user.name;
      
      google.load("visualization", "1", { packages: ["corechart"] });
      google.setOnLoadCallback(function () {
        var data = new google.visualization.DataTable();
        data.addColumn("string", "Attend");
        data.addColumn("number", "Date");
        data.addRow(["月", parseInt(user.mon)]);
        data.addRow(["火", parseInt(user.tue)]);
        data.addRow(["水", parseInt(user.wed)]);
        data.addRow(["木", parseInt(user.thu)]);
        data.addRow(["金", parseInt(user.fri)]);
        data.addRow(["土", parseInt(user.sat)]);
        data.addRow(["日", parseInt(user.sun)]);
    
        var options = {
          title: "出席データ",
          colors: ["ba55d3"],
        };
    
        var chart = new google.visualization.ColumnChart(
          document.getElementById("gct_sample_column")
        );
        chart.draw(data, options);
      });
  });
}