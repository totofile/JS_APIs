// Option pour la requête fetch 
const init = {
    mode: "cors"
}

// Récupération des ID HTML  
const addressInput = document.querySelector("#address");
const postalCodeInput = document.querySelector("#postalCode");
const cityInput = document.querySelector("#city");

// Écoute de l'événement d'entrée sur le champ d'adresse
addressInput.addEventListener("input", (event) => {
    if (event.target.value.length > 2) {
        //On appelle l'API pour rechercher des adresses françaises basées sur la saisie
        fetch('https://api-adresse.data.gouv.fr/search/?q=' + event.target.value, init).then((response) => {
            response.json().then((data) => {
                // Récupération de la liste déroulante
                const dataList = document.querySelector("#addressList");
                dataList.innerHTML = "";

                // on parcours des résultats de l'API
                data.features.forEach((address) => {
                    // Création d'une option pour chaque adresse trouvée
                    const option = new Option("", address.properties.label);
                    // Ajout des attributs personnalisés pour le code postal et la ville
                    option.setAttribute("data-postalCode", address.properties.postcode);
                    option.setAttribute("data-city", address.properties.city);
                    // Ajout de l'option à la liste déroulante
                    dataList.appendChild(option);
                });
            });
        });
    }
});

// Écoute de l'événement de perte de focus(blur) sur le champ d'adresse 
document.querySelector("#address").addEventListener("blur", (event) => {
    console.log("blur");
    // Recherche de l'option correspondant à la valeur saisie
    const option = document.querySelector(`option[value="${event.target.value}"]`);
    if (option) {
        console.log("blur");// Pour savoir si le blur n'occure qu'une fois (optimisation)
        // Remplissage automatique des champs de code postal et de ville
        postalCodeInput.value = option.getAttribute("data-postalCode");
        cityInput.value = option.getAttribute("data-city");
    }
});
