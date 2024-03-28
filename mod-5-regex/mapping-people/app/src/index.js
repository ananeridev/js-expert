'use strict';
const { readFile } = require('fs/promises')
const { join } = require('path')
const pdf = require('pdf-parse')

const TextProcessorFacade = require('./textProcessorFacade')
;(async () => {
    const dataBuffer = await readFile(join(__dirname, './../../../docs/contrato.pdf'))
    const data = await pdf(dataBuffer)
    // console.log(data.text)
    
    const instance = new TextProcessorFacade(data.text)
    const people = instance.getPeopleFromPDF()
    console.log('hey people', people)
})()