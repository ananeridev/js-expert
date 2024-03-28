// o objetivo do fluent api eh executar tarefas como uma pipeline, step by step
// e no final chama o build... similar ao padrao Builder
// Diferenca: fluent api eh focado em processos e o Builder sobre construcao de objetos
class TextProcessorFluentAPI {

    // propriedade privada!
    #content
    constructor(content) {
        this.#content = content;
    }

    extractPeopleData() {  
        // ?<= fala que vai extrair os dados que virao depois desse grupo
        // [contrantante|contratada] ou um ou outro, (e tem a flag no fim da expressao para pegar maiusculo ou minusculo )
        // :\s{1} vai procurar o caracter literal dos dois pontos seguindo de um espaco
        // tudo acima fica dentro de um parenteses para falar "vamos pegar dai pra frente"

        // (?!\s) negaitve look around, vai ignorar os contratantes no fim do documento (que tem so espaco a frente deles)
        // .*\n pega qualquer coisa ate o primeiro \n
        // .*? non greety, esse ? faz com que ele pare na primeira recorrencia, assim ele evitar ficar em loop

        // $ informar que a pesquisa acaba fim da linha
        // g -> global
        // m -> multiline
        // i -> case insensitive

         const matchPerson = /(?<=[contrante|contratada]:\s{1})(?!\s)(.*\n.*?)$/gmi
         const onlyPerson = this.#content.match(matchPerson)
        //  console.log('onlyPerson', matchPerson.test(this.#content))
        this.#content = onlyPerson

        return this
    }
    divideTextInColumns() {
        return this
    }
    build() {
        return this.#content;
    }
}

module.exports = TextProcessorFluentAPI;