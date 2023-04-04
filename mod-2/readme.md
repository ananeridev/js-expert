# Anotações do módulo pt-br

# Lifecycle JS 

### useStrict mode

- 2015 veio uma nova diretiva no JS, ajuda a evitar erros em produção.
- criar uma string no inicio do codigo que o compilador ira avaliar o código

### Call Stack e Memory Heap

- usa mecanismos pra guardar dados em memória e realizar operações
- Diferença dos dois é que o Call stack guarda tipos de dados primitivos e o memory heap tipos de referencia (arrays, funçoes… etc)
- **Call Stack →** é uma pilha de operações one é armazenado sequencia de ações que um programa irá execuar
    - é usado pra pra guardar estrutuda de dados futura, usando FIFO - adiciona a chamada função no topo da fila, assim que é executada é removida
    - erros aqui são apresentados de forma assíncrona
    - erro stackoverflow acontece aqui
- **Memory Hea**p → onde são armazenados os endereços de memória apontados pelo call stack
    
    

### Tipo de Valor vs Tipo e Referência(Immutability vs Mutability)

- [https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)
    - tem armazenamentos diferentes
    - quando joga uma variavel e um lado por outro rola divergencia dos valores
    - cópia e clone e objetos Object.clone
    

### Coerção e tipos & Objects Lifecycle: toString, valueOf e Symbol.toPrimitive

- Usado pra explicar os comportamentos bizarros do JS
- Coerção é a conversão pra qualquer outro tipo [String → number]
- Lógica de converrsão e objetcs e numbers é diferente
- Coersão implicita
    - [https://dorey.github.io/JavaScript-Equality-Table/](https://dorey.github.io/JavaScript-Equality-Table/)
    - === loose equality operator
    - é aquela geralmenet usada com operadores
    - somar string com number
- OU sempre vai retornar o prrimeiro argumento se os dois argumentos utilizados forem verdadeiros
- JS tem objetos com suas proprias propriedades
- Se numa validação de objetos nem o valueOf ou nem o toString retornarem um resultado primitivo, vai retornar um typeError
    - se for um tipo numerio, vai tentar chamar primeiro o valueOf
    - ES6
