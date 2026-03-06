let langIndex = 0;
var language = {

    en:{
        
        aboutCategory: "About me",
        animCategory: "3D animations",
        otherCategory: "Other personnal creations",

        hi: "Hi, I'm Gabriel!",
        
        aboutSection: "I am currently in my 2nd year of University Bachelor of Technology, in Multimedia and Internet professions at the IUT of Mulhouse.<br>I love creating things, learning and discovering new passions. I am an ambitious and creative person, who tries his best to make his dreams come true.<br>In this portfolio, you will find all the creations that I have made, whether it is in the context of my studies or on my free time."
        

    },
    fr:{

        aboutCategory: "À propos de moi",
        animCategory: "Animations 3D",
        otherCategory: "Autres créations personnelles",

        hi: "Salut, moi c'est Gabriel !",
        aboutSection: "Je suis actuellement en 2ème année de BUT en Métiers du Multimédia et de l'Internet à l'IUT de Mulhouse<br>J'adore créer, apprendre et me découvrir de nouvelles passions. Je suis quelqu'un d'ambitieux et de créatif, qui n'hésite pas à faire de ses rêves une réalité<br>À travers ce portfolio, vous allez retrouver toutes les créations que j'ai pu réaliser, que ce soit dans le cadre de mes études ou en dehors."

    },
    ro:{
        aboutCategory: "Despre mine",
        animCategory: "Animații 3d",
        otherCategory: "Alte creații personale",

        hi: "Salut, eu sunt Gabriel!",
        aboutSection: "în acest moment, sunt în al doilea an de licență în multimedia și internet la IUT din Mulhouse. Îmi place să creez, să învăț și să descopăr noi pasiuni. Sunt o persoană ambițioasă și creativă care nu ezită să își îndeplinească visele. În acest portofoliu, veți găsi toate creațiile pe care le-am realizat, atât în cadrul studiilor mele, cât și în afara lor."

    }

}

function changeLanguage(){

    switch(langIndex){

        case 0:
            document.querySelector(".about").innerText = language.en.aboutCategory;
            document.querySelector(".animation").innerText = language.en.animCategory;
            document.querySelector(".other").innerText = language.en.otherCategory;

            document.querySelector(".aboutSection>p").innerHTML = language.en.aboutSection; 
            document.querySelector(".aboutSection>h3").innerHTML = language.en.hi; 
            break;
        case 1:
            document.querySelector(".about").innerText = language.fr.aboutCategory;
            document.querySelector(".animation").innerText = language.fr.animCategory;
            document.querySelector(".other").innerText = language.fr.otherCategory;

            document.querySelector(".aboutSection>p").innerHTML = language.fr.aboutSection;
            document.querySelector(".aboutSection>h3").innerHTML = language.fr.hi; 
            break;
        case 2:
            document.querySelector(".about").innerText = language.ro.aboutCategory;
            document.querySelector(".animation").innerText = language.ro.animCategory;
            document.querySelector(".other").innerText = language.ro.otherCategory;
            
            document.querySelector(".aboutSection>p").innerHTML = language.ro.aboutSection; 
            document.querySelector(".aboutSection>h3").innerHTML = language.ro.hi; 
            break;
        
    }


}

function en(){

    langIndex = 0;
    changeLanguage();
    

}

function fr(){

    langIndex = 1;
    changeLanguage();
    

}

function ro(){

    langIndex = 2;
    changeLanguage();
    

}