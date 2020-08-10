function drowCountGraph(user) {
  google.load("visualization", "1", { packages: ["corechart"] });
  google.setOnLoadCallback(function () {
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Attend");
    data.addColumn("number", "Date");
    data.addRow(["月", parseInt(user[0].mon)]);
    data.addRow(["火", parseInt(user[0].tue)]);
    data.addRow(["水", parseInt(user[0].wed)]);
    data.addRow(["木", parseInt(user[0].thu)]);
    data.addRow(["金", parseInt(user[0].fri)]);
    data.addRow(["土", parseInt(user[0].sat)]);
    data.addRow(["日", parseInt(user[0].sun)]);

    var options = {
      title: "出席データ",
      colors: ["ba55d3"],
    };

    var chart = new google.visualization.ColumnChart(
      document.getElementById("gct_sample_column")
    );
    chart.draw(data, options);
  });
}