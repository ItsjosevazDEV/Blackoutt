
const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    if (mailInput.value == "blackout@gmail.fr" && passwordInput.value == "Teste1234@"){
        alert("Vous êtes connecté");

        const token = "qdbdkjqhbshqblkcblKCBQLSBshjdahfbbfkqkqkcqkhdiqd";
        
        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}


