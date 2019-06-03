var user = [];
var password = [];

function cadastrar() {

    semnome.innerHTML = '';
    sememail.innerHTML = '';
    semsenha.innerHTML = '';
    semconfirmarsenha.innerHTML = '';
    semcpf.innerHTML = '';
    semidade.innerHTML = '';

    user.push(email.value);

    sessionStorage.login = user;
    console.log(sessionStorage.login);

    password.push(senha.value);

    sessionStorage.senha = password;
    console.log(sessionStorage.senha);

    // RESTRIÇÕES DO CADASTRO
    if (nome.value == '' || email.value == '' || senha.value == '' || confirmarsenha.value == '' ||
        (senha.value).length < 6 || cpf.value == '' || (cpf.value).length < 11 || idade.value == '' ||
        (idade.value).lenght < 10 || senha.value != confirmarsenha.value) {

        if (nome.value == '') {
            semnome.innerHTML = '*NOME OBRIGATORIO';
        }
        if (email.value == '') {
            sememail.innerHTML = '*EMAIL OBRIGATORIO';
        }
        if (senha.value == '') {
            semsenha.innerHTML = '*SENHA OBRIGATORIO';
        }
        else if ((senha.value).length < 6) {
            semsenha.innerHTML = '*SENHA DEVE HAVER NO MÍNIMO 6 CARACTERES';
        }
        if (confirmarsenha.value == '') {
            semconfirmarsenha.innerHTML = '*SENHA DEVE SER CONFIRMADA';
        }
        if (idade.value == '') {
            semidade.innerHTML = '*DATA DE NASCIMENTO<br>OBRIGATORIA';
        }
        else if ((idade.value).length < 10) {
            semidade.innerHTML = '*PREENCHA O CAMPO DE <br>DATA DE NASCIMENTO';
        }
        if (cpf.value == '') {
            semcpf.innerHTML = '*CPF OBRIGATORIO';
        }
        else if ((cpf.value).length < 11) {
            semcpf.innerHTML = '*CPF INVÁLIDO';
        }

        if (senha.value != confirmarsenha.value) {
            alert('É NECESSARIO CONFIRMAR SENHA CORRETAMENTE')
        }

    }

    else {
        alert('cadastrado');
    }

}

function logar() {

    console.log(sessionStorage.login);
    console.log(sessionStorage.senha);

    if (sessionStorage.login == email_login.value && sessionStorage.senha == senha_login.value) {
        alert('Bem Vindo');
    }
    else {
        alert('email ou senha incorretos');
    }

}