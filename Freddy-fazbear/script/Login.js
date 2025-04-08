function mostrar() {
    const inputPass = document.getElementById('senhao')
    const ShowPass = document.getElementById('icone')

    if (inputPass.type === 'password') {
        inputPass.setAttribute('type', 'text')
        ShowPass.classList.replace('bi-eye', 'bi-eye-slash')
    } else {
        inputPass.setAttribute('type', 'password')
        ShowPass.classList.replace('bi-eye-slash', 'bi-eye')
    }
}
function irtela(senhaodigitada) {
    const eeep = document.getElementById('eeep').value;
    
    if (senhaodigitada === eeep) {
        window.location.href = "http://pt.stackoverflow.com";

    } else {
        alert("Senha incorreta");
    }

}
