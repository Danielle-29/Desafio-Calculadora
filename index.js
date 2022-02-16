const operacoes = require("./resultado");
const inquirer = require("inquirer")
const soma = operacoes.soma;
const subtracao = operacoes.subtracao;
const multiplicacao = operacoes.multiplicacao;
const divisao = operacoes.divisao;

inquirer.prompt([
    {
        type: 'list',
        name: 'operacao',
        message: `Escolha uma operação`,
        choices: [
            'soma',
            'subtração',
            'multiplicação',
            'divisão'
        ]
    },
    {
        name: 'n1',
        message: 'Digite o primeiro número'
    },
    {
        name: 'n2',
        message: 'Digite o segundo número'
    }
]).then((answers) => {
     let operacoes = answers.operacao
     let n1 = parseFloat(answers.n1)
     let n2 = parseFloat(answers.n2)

        switch(operacoes) {
            case 'soma':
                soma(n1, n2);
            break;
            case 'subtração':
                subtracao(n1,n2);
            break;
            case 'multiplicação':
                multiplicacao(n1,n2);
            break;
            case 'divisão':
                divisao(n1,n2);
            break;
        }
    }).catch((err) => console.log(err))
