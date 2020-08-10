function Decision_parasol(users) {
  const umb = document.getElementById("parasol_image");
  umb.setAttribute("src", "img/umbrella"+users[0].weather+".png");
}