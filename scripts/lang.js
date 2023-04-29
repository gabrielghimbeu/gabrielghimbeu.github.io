let langIndex = 0;
var language = {

    en:{

        aboutCategory: "About me",
        animCategory: "3D Animations",
        otherCategory: "Other personnal stuff"

    },
    fr:{

        aboutCategory: "A propos de moi",
        animCategory: "Animations 3D",
        otherCategory: "Autres trucs personnels"

    },
    ro:{
        aboutCategory: "Despre mine",
        animCategory: "Animatii 3D",
        otherCategory: "Alte chesti personale"

    }

};


function changeLanguage(){

    switch(langIndex){

        default:
            document.querySelector(".about").innerText = language.en.aboutCategory;
            document.querySelector(".animation").innerText = language.en.animCategory;
            document.querySelector(".other").innerText = language.en.otherCategory;
            break;
        case 0:
            document.querySelector(".about").innerText = language.en.aboutCategory;
            document.querySelector(".animation").innerText = language.en.animCategory;
            document.querySelector(".other").innerText = language.en.otherCategory;
            break;
        case 1:
            document.querySelector(".about").innerText = language.fr.aboutCategory;
            document.querySelector(".animation").innerText = language.fr.animCategory;
            document.querySelector(".other").innerText = language.fr.otherCategory;
            break;
        case 2:
            document.querySelector(".about").innerText = language.ro.aboutCategory;
            document.querySelector(".animation").innerText = language.ro.animCategory;
            document.querySelector(".other").innerText = language.ro.otherCategory;
            break;
        
    }


}

document.addEventListener("keydown", function(event) {


    if(event.key == "ArrowUp"){

        changeLanguage();
        langIndex += 1;


    }

});