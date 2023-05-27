'use strict'

const { watch, promises: {readFile} } = require('fs')


class File {
    watch(event, filename) {
        console.log('this', this)
        console.log('arguments', Array.prototype.slice.call(arguments))
        this.showContent(filename)
    }

    async showContent(filename) {
        console.log((await readFile(filename)).toString())
    }

}

//visualuzacao de arquivos
// watch(__filename, async (event, filename) => {
//     console.log((await readFile(filename)).toString())
// })

const file = new File()
// dessa forma, ele ignora o 'this' da classe File
// acaba herdando o 'this' do metodo watch
// watch(__filename, file.watch)

// alternativa para nao herdar this na funcao eh usando arrow function
// its not nice-- nao fica bonito
// watch(__filename, (event, filename) => file.watch(event, filename))

// podemos deixar explicito qual e o contexto que a funcao deve fazer
// quando eu for delegar uma funcao para que outra execute, passar o .bind com o contexto que quero this la dentro
// bind retorna uma funcao com o 'this' que se mantem no file, ignorando o watch
// watch(__filename, file.watch.bind(file))


file.watch.call({showContent: () => console.log('call: hey sinon') }, null, __filename )

// mostra os argumentos dentro de um array
file.watch.apply({showContent: () => console.log('call: hey sinon') }, null, __filename )