const { evaluateRegex } = require('./utils')

class Person {
    // (\w+):\s.*
    // $1,
    constructor([
        nome,
        nacionalidade,
        estadoCivil,
        documento,
        rua,
        numero,
        bairro,
        estado,
    ]) {
        
        // ^ -> começo da string
        //  + -> um ou mais ocorrencias
        // (\w{1}) -> pega só a primeira letra e deixa em um grupo
        // (a-zA-Z) encontra letras maiusculas ou minusculas, adicionamos o + pra ele pegar todas até o caracter especial
        // g -> todas as ocorrencias que encontrar
        
        const firstLetterExp = evaluateRegex(/^(\w{1})([a-zA-Z]+$)/g)
        const formatFirstLetter = (prop) => {
            return prop.replace(firstLetterExp, (fullMatch, group1, group2, index) => {
                return `${group1.toUpperCase()}${group2.toLowerCase()}`
            })
        }

        // (\w+),
        // this.$1 = $1
        this.nome = nome
        this.nacionalidade = formatFirstLetter(nacionalidade)
        this.estadoCivil = formatFirstLetter(estadoCivil)
        // tudo que nao for digito vira vazio
        // /g serve para remover todas as ocorrencias que encontrar
        this.documento = documento.replace(evaluateRegex(/\D/g ), "")
        // começa a procurar depois do " a " e pega tudo que tem a frente
        // (?<= faz com que ignore tudo que tiver antes desse match)
        // conhecido como positive lookBehind
        this.rua = rua.match(evaluateRegex(/(?<=\sa\s).*$/)).join()
        this.numero = numero
        // começa a buscar depois do espaço, pega qualquer letra ou digito até o fim da linha (poderia ser o .* tbm)
        this.bairro = bairro.match(evaluateRegex(/(?<=\s).*$/)).join()
        // remove o ponto literal (.) do fim da frase
        this.estado = estado.replace(evaluateRegex(/\.$/), "")
    }
}

module.exports = Person