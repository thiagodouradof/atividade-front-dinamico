const botaoEnviar = document.querySelector<HTMLButtonElement>('#botaoEnviar');

botaoEnviar?.addEventListener('click', (evento) => {
    evento.preventDefault(); 

    const nome = document.querySelector<HTMLInputElement>('#nome')?.value;
    const email = document.querySelector<HTMLInputElement>('#email')?.value;
    const idade = document.querySelector<HTMLInputElement>('#idade')?.value;
    const senha = document.querySelector<HTMLInputElement>('#senha')?.value;

    const erros: string[] = [];

    if (!nome) {
        erros.push('O campo Nome é obrigatório.');
    }

    if (!email) {
        erros.push('O campo E-mail é obrigatório.');
    } else if (!email.includes('@')) {
        erros.push('E-mail inválido. Deve conter "@"');
    }

    if (!idade || Number(idade) < 0) {
        erros.push('Idade inválida.');
    }

    if (!senha || senha.length < 6) {
        erros.push('A senha deve ter pelo menos 6 caracteres.');
    }

    if (erros.length > 0) {
        console.error('Erros encontrados:', erros.join(' | '));
    } else {
        console.log('Dados enviados com sucesso!');
    }
});
