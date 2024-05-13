
const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    if (mailInput.value == "blackout@gmail.fr" && passwordInput.value == "Teste1234@"){
        
        const token = "qdbdkjqhbshqblkcblKCBQLSBshjdahfbbfkqkqkcqkhdiqd";

        // Placer ce token en cookie
        setToken(token);
        
        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}


