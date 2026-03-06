function loadAnimationPage(){

    location.href = 'pages/animation.html';

}

function loadOtherPage(){

    location.href = 'pages/other.html';

}

function loadAboutPage(){

    document.querySelector('.buttons').style = 'display:none';
    document.querySelector('.languages').style = 'display:none';
    document.querySelector('.aboutSection').style = 'display:block';
    


}

function back(){

    document.querySelector('.buttons').style = 'display:flex';
    document.querySelector('.languages').style = 'display:flex';
    document.querySelector('.aboutSection').style = 'display:none';

}