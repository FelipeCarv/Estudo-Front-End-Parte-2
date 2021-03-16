/**
 * Objeto literal é recomendado em situações onde não podem existir mais de uma instância do objeto,
 * como por exemplo, objetos de configurações do projeto ou coleções de objetos.
 */

let carro = {
    'Tipo de Combustível': 'Gasolina',
    cor: 'prata',
    potencia: 115
};

//console.log(carro); //imprimindo informações do objeto carro.

//----------------------------------------------------------------------------------------------------------
//Acessando as informações de um objeto

let naveEspacial = {
    planetaOrigem: 'Terra',
    tripulacao:  5,
    'Missão Ativa': true,
    cor: 'prata',
    'Tipo de Combustível': 'Hidrogênio',
    trajeto: ['Vênus', 'Marte', 'Saturno']
}

var tamanhoTripulacao = naveEspacial.tripulacao; // notação ponto final
var missaoAndamento = naveEspacial['Missão Ativa']; // notação colchetes

//console.log(tamanhoTripulacao);
//console.log(missaoAndamento);

//Podemos atribuir valores aos objetos-----------------------------

naveEspacial.cor = 'branca'; // como a propriedade 'cor' já existe, somente o valor foi atualizado.
naveEspacial['Nome do piloto'] = 'Bob'; // como a propriedade 'Nome do piloto' não existe, ela foi criada.

//Além disso, podemos remover elementos e/ou objetos.

delete naveEspacial.planetaOrigem;
delete naveEspacial.trajeto;

//console.log(naveEspacial); // { tripulacao: 5, 'Missão Ativa': true, cor: 'branca', 'Nome do piloto': 'Bob' }
//----------------------------------------------------------------------------------------------------------
/**
 * Métodos são funções declaradas dentro dos objetos. Normalmente métodos são utilizados para representar
 * funcionalidades que aqueles objetos possuem. Dependendo do método, o mesmo pode 'obrigar', por exemplo, que
 * alguns dados sejam inseridos dentro do objetos durante o ato de instanciamento do objeto (constutor).
 */

 let nave = {
    tripulacao: 5,
    'Missão Ativa': true,
    decolar: function () {
        console.log('Decolando...');
    },
    pousar() {
        console.log('Pousando!');
    }
}

//nave.decolar(); // Decolando...
//nave.pousar(); // Pousando!
//----------------------------------------------------------------------------------------------------------
/**
 * Em aplicações reais, é comum que exista um objeto que recebe como valor, outro objeto e assim sucessivamente.
 * A esse tipo de situação, chamamos de 'Aninhamento de Objetos'.
*/

let Espacial = {
    passageiros: [{nome: 'cachorro espacial'}, {nome: 'gato espacial'}],
    tripulacao: {
        capitao: {
            nome: 'Daniel',
            especialidade: 'Engenharia da Computação',
            'comidas favoritas': ['bolo', 'cuscuz', 'pipoca'],
            cumprimentar() {
                 console.log('Olá pessoal, sou o Cap. Daniel.'); 
            }
        }
    },
    motor: {
        modelo: 'RocketDyne F1',
        ano: 2017,
        potencia: 4400
    }
}

//Espacial.tripulacao.capitao.cumprimentar();

//----------------------------------------------------------------------------------------------------------

/**
 * Objetos podem ser passados como referência para funções.
 */

 let naveEsp = {
    tripulacao:  5,
    'Missão Ativa': true,
    trajeto: ['Vênus', 'Marte', 'Saturno']
}

//Aqui são funções comuns, pois não estão declaradas dentro do objeto, que neste caso seriam métodos.
function desativarMissao(obj) {
    obj['Missão Ativa'] = false;
}

let adicionarJupiterNoTrajeto = (obj) => {
    obj.trajeto.push('Júpiter');
}

desativarMissao(naveEsp);
adicionarJupiterNoTrajeto(naveEsp);
//console.log(naveEsp); // { tripulacao: 5, 'Missão Ativa': false, trajeto: [ 'Vênus', 'Marte', 'Saturno', 'Júpiter' ] }

//----------------------------------------------------------------------------------------------------------

/**
 * A estrutura 'For...in' permite que tenhamos um comportamento semelhante ao laço 'for()', porem na tratativa
 * de objetos.
 */

 let naveEspaci = {
    tripulacao: {
        capitao: {
            nome: 'Daniel',
            especialidade: 'Engenharia da Computação',
            cumprimentar() { console.log('Olá pessoal, sou o Cap. Daniel.') }
        },
        medico: {
            nome: 'Alice',
            especialidade: 'Medicina',
            anunciar() { console.log('Realizando exames periódicos na tripulação!') }
        },
        cientista: {
            nome: 'Carla',
            especialidade: 'Física',
            pesquisar() { console.log('Iniciando pesquisa sobre a teoria da relatividade...') }
        }
    }
}

//for (let membro in naveEspaci.tripulacao) {
    //console.log(`${membro}: ${naveEspaci.tripulacao[membro].nome}`);
//}

//----------------------------------------------------------------------------------------------------------

/**
 * A palavra chave 'this' serve para realizar referencia ao objeto.
 * 
 */

 const robo = {
    modelo: 'T-800',
    nivelEnergia: 90,
    pegarInfo() {
        return `Eu sou o ${this.modelo} e meu atual nível de energia é ${this.nivelEnergia}%.`;
    },
    carregarBateria() {
        this.nivelEnergia = 100;
    }
};

//console.log(robo.pegarInfo()); // Eu sou o T-800 e meu atual nível de energia é 90%.

//----------------------------------------------------------------------------------------------------------

/**
 * A definição literal de um objeto permite que a gente crie um unico objeto, entretanto, se for necessário
 * criar mais de um objeto da mesma classe, se faz muito importante que possamos ter um método contrutor.
 *  
 * - São nomeados com a primeira letra em maiúsculo.
 * - Eles devem ser executados junto com o operador new.
 */

 function FabricaDeRobos(modelo, material) {
    this.modelo = modelo;
    this.material = material;
    this.nivelEnergia = 100;
    this.pegarInfo = () => `Eu sou o ${this.modelo} e meu atual nível de energia é ${this.nivelEnergia}%.`;
}

let robo1 = new FabricaDeRobos('R2D2', 'Liga de Titânio');
let robo2 = new FabricaDeRobos('C3PO', 'Latão');

//console.log(robo1.pegarInfo()); // Eu sou o R2D2 e meu atual nível de energia é 100%.
//console.log(robo2.pegarInfo()); // Eu sou o C3PO e meu atual nível de energia é 100%.

//----------------------------------------------------------------------------------------------------------

/**Métodos nátivos:
 * 
 * O método keys() retorna um array contendo os identificadores de atributos do objeto.
 * 
 * O método entries() retorna uma matriz para os pares chaves e valor de cada atributo do objeto.
 * 
 * O método assign(x,y) copia todos os objetos de origem(x) e transfere ao objeto de origem(y).
 */

//keys()
const r = {
    modelo: 'T-800',
    nivelEnergia: 85,
    ativo: true
};

const chavesRobo = Object.keys(r);
//console.log(chavesRobo); // [ 'modelo', 'nivelEnergia', 'ativo' ]


//entries()
const ro = {
    modelo: 'T-800',
    nivelEnergia: 85,
    ativo: true
};

const valoresRobo = Object.values(robo);
//console.log(valoresRobo); // [ 'T-800', 85, true ]


//assign()
const rob = {
    modelo: 'T-800',
    nivelEnergia: 85,
    ativo: true
};

const novoRobo = Object.assign({'Reconhecimento de Voz': true, versao: '1.3.1'}, robo);
//console.log(novoRobo); // { 'Reconhecimento de Voz': true, versao: '1.3.1', modelo: 'T-800', nivelEnergia: 85, ativo: true }

