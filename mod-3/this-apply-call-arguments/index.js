'use strict'

const { watch, promises: {readFile} } = require('fs')

watch(__fileName, async (event, filename) => {
    console.log('index.js', event, filename)
})