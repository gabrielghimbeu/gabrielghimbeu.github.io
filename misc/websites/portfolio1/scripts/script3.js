let item = sessionStorage.getItem('acNum');

/* Merci a Mr Graef pour son aide <3 */
fetch("content.html")
.then((reponse) => reponse.text())
.then((contenu) => {
  let parser = new DOMParser();
  let htmlDocument = parser.parseFromString(contenu, "text/html");
  let info = htmlDocument.documentElement.querySelector("." + item.replace('.', '-')).innerHTML;
  document.querySelector("body").innerHTML = info;
});

function back(){

  location.href = 'page2.html';

}

