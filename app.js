const redbtn = document.querySelector("#redButton")
const orangebtn = document.querySelector("#orangeButton")
const greenbtn = document.querySelector("#greenButton")
const offbtn = document.querySelector("#offButton")
const autobtn = document.querySelector("#autoButton")

const redLight = document.querySelector("#redLight")
const orangeLight = document.querySelector("#orangeLight")
const greenLight = document.querySelector("#greenLight")

blinkOrange2 = null
auto2 = null
// exercice 1 feu de signalisation allumer le bon feu en fonction du bouton de couleur cliqué
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

// exercice 2 du feu de signalisation boutton off et feu orange clignoottant

OrangeOn = "text-center my-1 bg-warning border border-dark rounded-circle"
    OrangeOff = "text-center my-1 bg-dark border border-dark rounded-circle"

function blinkOrange (){
    orangeLight.className = orangeLight.className === OrangeOn ? 
    OrangeOff : OrangeOn
}

offbtn.addEventListener("click", function(){
    orangebtn.click()
    blinkOrange2 = setInterval(blinkOrange, 1000)
    
})

function StopBlinkOrange() {
    clearInterval(blinkOrange2)
}
// exercice 3 feu de signalisation automatique
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
async function auto() {
    greenbtn.click()
    await sleep(3000)
    orangebtn.click()
    await sleep(1000)
    redbtn.click()
    await sleep(1000)
    
}

autobtn.addEventListener("click", function () {
    Stopauto()
    auto()
    auto2 = setInterval(auto, 5000)
})

function Stopauto() {
    clearInterval(auto2)
}






   



