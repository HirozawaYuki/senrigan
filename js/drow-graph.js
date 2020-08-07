// 直近7日間のカラーグラフを表示
function drowGraph(colors) {

  for (let i = 0;  i < 7;  i++) {
    const bar = document.getElementById("bar");
    // なんでか知らんけどこれでいけた
    const rect = document.createElementNS("http://www.w3.org/2000/svg","rect");
    rect.classList.add("Header__shape");
    rect.classList.add("myRect");
    rect.setAttribute("x",(i)*15+"%");
    rect.setAttribute("y","0%");
    rect.setAttribute("width","10%");
    rect.setAttribute("height",colors[i].count+"%");
    rect.setAttribute("fill","rgb("+colors[i].r+","+colors[i].g+","+colors[i].b+")");
    bar.appendChild(rect);
  }
}