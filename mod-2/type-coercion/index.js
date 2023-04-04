99999999999999999 // 16
// 100000000000000000

true + 2
// 3

'21' + true
// '21true'

'21' - true
// 20

'21' - - 1
// 22

0.1 + 0.2 === 0.3
// false

3 > 2 > 1
// false

3 > 2 >=1
// true


// ---------------------


console.assert(String(123) === '123', "explicit converttion to string")
console.assert(String(123 + '') === '123', "implicit converttion to string")

console.assert(String('hello' || 123) === 'hello', "|| return the first element")
console.assert(String('hello' && 123) === 123, "&& return the last element")


// ---------------------

const item = {
    name: 'Ana',
    age: 23,

    //strting: 1 se nao primitivo, chama o valueOf
    toString() {
        return `Name: ${this.name}, Age: ${this.age}`
    },
    // numer: 1 se nao for primitivo, chama o toString
    valueOf() {
        return {hey: 'guys'}
        // return 007
    },
    // o que tem prioridade
    [Symbol.toPrimitive](coercionType) {
        console.log('trying to convert to', coercionType)
        const types = {
            string: JSON.stringify(this),
            number: '007'
        }
        return types[coercionType] || types.String
    }
}

// console.log('toString', String(item))
// console.log('valueOf', Number(item))

// dedpois de aicionar o primitve
// console.log('String', String(item))
// console.log('Number', Number(item))
// chama a conversao default -- boolean
// console.log('Date', Date(item))

console.assert(item + 0 === '{"name":"Ana Neri","age":"23"}0')
console.assert(!!item)


// console.log('string.concat', 'Ae'.concat(item))
console.assert('Ae'.concat(item) === 'Ae{"name":"Ana","age":23}')

// console.log('implicit + explicit coercion (using ==)', item == String(item))
console.assert(item == String(item))

const item2 = {...item, name: "Bia", age: 20}
// console.log('New Object', item2)
console.assert(item2.name === "Bia" && item2.age === 20)