const { readFile } = require('fs/promises')
// pattern to normalize the path
const { join} = require('path')
const { error } = require('./constants')

const DEFAULT_OPTION = {
    maxLines: 3,
    fields: ["id","name","profession","age"]
    
}

class File {
    static async csvToJson(filePath) {
        const content = await File.getfileContent(filePath)
        const validation = File.isValid(content)
        if(!validation.valid) throw new Error(validation.error)

        return content
    }

    // read the content according to the path
    static async getfileContent(filePath) {
        const fileName = join(__dirname, filePath)

        //encoding
        return (await readFile(fileName)).toString("utf8")
    }

    static isValid(csvString, options = DEFAULT_OPTION) {
        const [header, ...fileWithoutHeader] = csvString.split(/\r?\n/)
        const isHeaderValid = header === options.fields.join(',')
        if(!isHeaderValid) {
            return {
                error: error.FILE_FIELDS_ERROR_MESSAGE,
                valid: false
            }
        }

        const isContentLengthAccepted = (
            fileWithoutHeader.length > 0 &&
            fileWithoutHeader.length <= options.maxLines
        )
        if(!isContentLengthAccepted) {
            return {
                error: error.FILE_LENGTH_ERROR_MESSAGE,
                valid: false,
            }
        }

        return { valid: true }

    }
}
