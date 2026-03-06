let the = sessionStorage.getItem('saeNum');
let acNum = 0;

document.querySelector(".saeTitle").innerText = "SAE 10" + (parseInt(the)+1) + " : " + SAE['SAE1.0' + (parseInt(the)+1)]["titre"];
document.querySelector(".saeComp").innerText = "Compétences : " + SAE['SAE1.0' + (parseInt(the)+1)]["compétences"];
document.querySelector(".saeDesc").innerHTML = SAE['SAE1.0' + (parseInt(the)+1)]["description"];

let acDict = SAE['SAE1.0' + (parseInt(the)+1)]['AC'];
let acList = "";

for (let key in acDict){

    acList += `<h3 onclick='selectAC(this.id)' id='${Object.keys(acDict)[acNum]}'>` + key + " : " + acDict[key] + "</h3>";
    acNum++;

}

let ressources = SAE['SAE1.0' + (parseInt(the)+1)]['ressources'];
let ressourceList = "<h3>Ressources mobilisées : </h3>";

for (let key in ressources){

    ressourceList += "<div>" + ressources[key] + "</div>";

}

document.querySelector('.saeAC').innerHTML = acList;
document.querySelector('.saeRessources').innerHTML = ressourceList;
document.querySelector('.saeSemester').innerText = 'Semestre : ' + SAE['SAE1.0' + (parseInt(the)+1)]["semestre"];

function back(){

    location.href = 'index.html';

}

function selectAC(clicked_id){
    
    sessionStorage.setItem('acNum', clicked_id);
    location.href = 'page3.html';

}

