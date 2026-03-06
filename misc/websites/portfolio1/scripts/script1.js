let charNum = 0;
let bgMusic = new Audio('audio/bg.ogg');
let isPlaying = false; 

document.querySelector('.saeName').innerText = character[0]["name"];
document.querySelector('.saeDescription').innerText = character[0]["desc"];
document.querySelector('.stat1bar').style = 'flex:' + character[0]["stat1"];
document.querySelector('.stat2bar').style = 'flex:' + character[0]["stat2"];
document.querySelector('.stat3bar').style = 'flex:' + character[0]["stat3"];
document.querySelector('.charImage').src = 'images/' + character[0]["charImg"];
document.querySelector('.charImage').style = 'max-width:' + character[0]["maxWidth"] + 'px';
document.querySelector('.charImage').style = 'max-height:' + character[0]["maxHeight"] + 'px';


function rightClick(){

    if (charNum >= 5)
    {

        console.log('list limit reached');

    }
    else{

        charNum++;
        updateChar();

    }

}

function leftClick(){

    if (charNum <= 0){

        console.log('list limit reached');

    }
    else{

        charNum--;
        updateChar();

    }
}

function updateChar(){

    document.querySelector('.saeName').innerText = character[charNum]["name"];
    document.querySelector('.saeDescription').innerText = character[charNum]["desc"];
    document.querySelector('.stat1bar').style = 'flex:' + character[charNum]["stat1"];
    document.querySelector('.stat2bar').style = 'flex:' + character[charNum]["stat2"];
    document.querySelector('.stat3bar').style = 'flex:' + character[charNum]["stat3"];
    document.querySelector('.charImage').src = 'images/' + character[charNum]["charImg"];
    document.querySelector('.charImage').style = 'max-width:' + character[charNum]["maxWidth"] + 'px';
    document.querySelector('.charImage').style = 'max-height:' + character[charNum]["maxHeight"] + 'px';

}

function selectButton(){

    sessionStorage.setItem('saeNum', charNum);
    location.href = 'page2.html';

}

function showDesc(){

    document.querySelector('.profileDesc').style.display = 'block';

}

function soundManager(){

    let speakerIcon = document.querySelector('#sound');
    
    if (isPlaying == true){

        speakerIcon.src = 'svg/sound0.svg';
        bgMusic.pause();
        bgMusic.loop = false;
        isPlaying = false;
    }
    else{

        speakerIcon.src = 'svg/sound1.svg';
        bgMusic.play();
        bgMusic.loop = true;
        isPlaying = true;
    }

}

/* function easterEgg(){



}
 */

