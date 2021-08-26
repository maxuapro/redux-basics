import {compose, pipe} from 'lodash/fp'

let input = '      JavaScript        '

function word(str){
    return str.trim()
}

const wrap = type => str => `<${type}>${str}</${type}>`

const toLowerCase = str => str.toLowerCase()

const transform = pipe(word, toLowerCase, wrap('span'))


console.log(transform(input))