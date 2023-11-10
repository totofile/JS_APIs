const addressInput = document.querySelector("#address");
const postalCodeInput = document.querySelector("#postalCode");
const cityInput = document.querySelector("#ville");

addressInput.addEventListener("input", (event)=>{
    if(event.target.value.length > 2) {
        fetch('https://api-adresse.data.gouv.fr/search/?q='+ event.target.value).then((response)=>{
            response.json().then((data)=>{
                
                const dataList = document.querySelector("#addressList");
                dataList.innerHTML = "";
                data.features.forEach((address)=>{
                    const option = new Option("", address.properties.label);
                    dataList.appendChild(option);
                    addressInput.addEventListener("blur", ()=>{
                        console.log("blur");
                        postalCodeInput.value = address.properties.postcode;
                        cityInput.value = address.properties.city;
                        addressInput.value = address.properties.name;
                        
                    });

                });
            });
        });
    }
});

