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
              "name": "Ana Neri",
              "id": 123,
              "profession": "Javscript Instructor",
              "birthDay": 2000
            },
            {
              "name": "Jane Doe",
              "id": 321,
              "profession": "Java Developer",
              "birthDay": 1990 
            },
            {
              "name": "John Doe",
              "id": 231,
              "profession": "Java Speclist",
              "birthDay": 1971
            }
          ]

          deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))

    }
})()