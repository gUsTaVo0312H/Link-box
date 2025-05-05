// if (html.classList.contains("light")) {
//   html.classList.remove("light")
// } else {
//   html.classList.add("light")
// }

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar tag img//
  const img = document.querySelector("#profile img")
  //substituir a imagem//
  if (html.classList.contains("light")) {
    // se tiver light, add a imagem light
    img.setAttribute("src", "./autoescola/Desktop/avatar.png")
    //se nao tiver light continuar com a imagem normal//
  } else {
    img.setAttribute("src", "./autoescola/logo lider black.png")
  }
}
