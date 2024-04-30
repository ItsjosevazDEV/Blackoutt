//Implémenter le JS de ma page

const inputNom = document.getElementById("NonInput");

inputNom.addEventListener("keyup", validateForm); 

//Function permettant de valider tout le formulaire

function validateForm(){
    validateRequired(inputNom);
}

function validateRequired(inputNom){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
    }
}


