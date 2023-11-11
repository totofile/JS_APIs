// On récupère les ID des boutons et  feux de signalisation 
const redbtn = document.querySelector("#redButton")
const orangebtn = document.querySelector("#orangeButton")
const greenbtn = document.querySelector("#greenButton")
const offbtn = document.querySelector("#offButton")
const autobtn = document.querySelector("#autoButton")

const redLight = document.querySelector("#redLight")
const orangeLight = document.querySelector("#orangeLight")
const greenLight = document.querySelector("#greenLight")

// Initialisation de variables pour les fonctions StopBlinkOrange et Stopauto
blinkOrange2 = null
auto2 = null

// Exercice 1 feu de signalisation allumer le bon feu en fonction du bouton de couleur cliqué
redbtn.addEventListener("click", function TurnOnRed() {
    Stopauto()
    StopBlinkOrange()
    if (redLight.classList.contains('bg-dark')) {
        redLight.classList.replace('bg-dark', 'bg-danger')
    }
    StopBlinkOrange()
    orangeLight.classList.replace('bg-warning', 'bg-dark')
    greenLight.classList.replace('bg-success', 'bg-dark')
});

orangebtn.addEventListener("click", function TurnOnOrange() {
    Stopauto()
    StopBlinkOrange()
    if (orangeLight.classList.contains('bg-dark')) {
        orangeLight.classList.replace('bg-dark', 'bg-warning')
    }
    redLight.classList.replace('bg-danger', 'bg-dark')
    greenLight.classList.replace('bg-success', 'bg-dark')
});

greenbtn.addEventListener("click", function TurnOnRed() {
    Stopauto()
    StopBlinkOrange()
    if (greenLight.classList.contains('bg-dark')) {
        greenLight.classList.replace('bg-dark', 'bg-success')
    }
    
    redLight.classList.replace('bg-danger', 'bg-dark')
    orangeLight.classList.replace('bg-warning', 'bg-dark')
});

// Exercice 2 du feu de signalisation boutton off et feu orange clignoottant

// On définit les classes CSS pour le feu orange allumé et éteint
OrangeOn = "text-center my-1 bg-warning border border-dark rounded-circle"
OrangeOff = "text-center my-1 bg-dark border border-dark rounded-circle"

// On définit la fonction pour faire clignoter le feu orange
function blinkOrange (){
    orangeLight.className = orangeLight.className === OrangeOn ? 
    OrangeOff : OrangeOn
}

// On ajoute un événement au bouton off pour faire clignoter le feu orange
offbtn.addEventListener("click", function(){
    orangebtn.click()
    blinkOrange2 = setInterval(blinkOrange, 1000)
    
})

// On définit la fonction pour arrêter le clignotement du feu orange
function StopBlinkOrange() {
    clearInterval(blinkOrange2)
}

// Exercice 3 feu de signalisation automatique

// On définit une fonction pour faire une pause
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * On définit une fonction pour allumer les feux de signalisation dans l'ordre
 * @async
 * @function auto
 * @returns {Promise<void>}
 */
async function auto() {
    greenbtn.click()
    await sleep(3000)
    orangebtn.click()
    await sleep(1000)
    redbtn.click()
    await sleep(1000)
    
}

// On ajoute un événement au bouton auto pour lancer le feu de signalisation automatique
autobtn.addEventListener("click", function () {
    Stopauto()
    auto()
    auto2 = setInterval(auto, 5000)
})

// On définit la fonction pour arrêter le feu de signalisation automatique
function Stopauto() {
    clearInterval(auto2)
}






   



