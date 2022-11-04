const { error } = require('./src/constants')
const File =  require('./src/file')
const { rejects, deepStrictEqual } = require('assert')

;
(async () => {

    {
        const filePath = './mocks/emptyFile-invalid.csv'
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await rejects(result, rejection)
    }

    {
        const filePath = './mocks/fourItems-invalid.csv'
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await rejects(result, rejection)
    }
    {
        const filePath = './mocks/threeItems-valid.csv'
        const result = await File.csvToJson(filePath)
        const expected = [
            {
              "id": 123,
              "name": "Ana Neri",
              "profession": "Javscript Instructor",
              "age": 22
            },
            {
              "id": 321,
              "name": "Jane Doe",
              "profession": "Java Developer",
              "age": 30
            },
            {
              "id": 231,
              "name": "John Doe",
              "profession": "Java Speclist",
              "age": 50
            }
          ]

          deepStrictEqual(result, expected)

    }
})()