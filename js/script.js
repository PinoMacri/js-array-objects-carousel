/*
//*Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: 
costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
//*Milestone 1:
Ora rimuoviamo i contenuti statici 
e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, 
l'immagine attiva diventerà visibile assieme al suo titolo e testo.
//*Milestone 2:
Aggiungere il "ciclo infinito" del carosello. 
Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, 
la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura
se l'utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sotto forma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop  del meccanismo di autoplay.
*/
const carosello = document.getElementById("carosello")
const buttonNext = document.getElementById("buttonNext")
const buttonBack = document.getElementById("buttonBack")
const padreImages = document.getElementById("padreImg")
const thumb = document.getElementById("thumb")

const prova = document.getElementById("prova")
const data =
    [{
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
    ];



let currentActiveIndex = 0;
for (i = 0; i < data.length; i++) {
    const currentImage = data[i]
    padreImages.innerHTML += `<img src="${currentImage.image}"alt="1"> <h2>${currentImage.title}</h2> <p>${currentImage.text}</p>`
    thumb.innerHTML += `<img class="opacity" src="${currentImage.image}"alt="2">`
}
const thumbImages = document.querySelectorAll(".thumbles img")
thumbImages[currentActiveIndex].classList.add("personalizzazioneThumb")




const allImages = document.querySelectorAll(".padreImages img")
allImages[currentActiveIndex].classList.add("active")

const allTitle = document.querySelectorAll("h2")
allTitle[currentActiveIndex].classList.add("active")

const allText = document.querySelectorAll("p")
allText[currentActiveIndex].classList.add("active")



buttonNext.addEventListener("click", function () {
    thumbImages[currentActiveIndex].classList.remove("personalizzazioneThumb")
    allText[currentActiveIndex].classList.remove("active")
    allTitle[currentActiveIndex].classList.remove("active")
    allImages[currentActiveIndex].classList.remove("active")
    currentActiveIndex++;
    if (currentActiveIndex === allImages.length) {
        currentActiveIndex = 0;
    }
    thumbImages[currentActiveIndex].classList.add("personalizzazioneThumb")
    allText[currentActiveIndex].classList.add("active")
    allTitle[currentActiveIndex].classList.add("active")
    allImages[currentActiveIndex].classList.add("active")
    console.log(currentActiveIndex)
})

buttonBack.addEventListener("click", function () {
    thumbImages[currentActiveIndex].classList.remove("personalizzazioneThumb")
    allText[currentActiveIndex].classList.remove("active")
    allTitle[currentActiveIndex].classList.remove("active")
    allImages[currentActiveIndex].classList.remove("active")
    currentActiveIndex--;
    if (currentActiveIndex < 0) {
        currentActiveIndex = allImages.length - 1;
    }
    thumbImages[currentActiveIndex].classList.add("personalizzazioneThumb")
    allText[currentActiveIndex].classList.add("active")
    allImages[currentActiveIndex].classList.add("active")
    allTitle[currentActiveIndex].classList.add("active")
    console.log(currentActiveIndex)
})





