const { Readline } = require('readline/promises');
const { boolean } = require('yargs');
const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')

const command = process.argv[2]

const argv =
    yargs
    .command({
        command: 'current',
        describe: 'current',
        handler() {
            console.clear()
            console.log('format in ISO format: ' + new Date().toISOString())
        }
    })
    .command({
        command: 'sub',
        description: 'sub date',
        handler() {
            console.log('sub date')
        }
    })
    .command({
        command:'add',
        describe: 'add date',
        handler() {
            //console.log('adding date')
        }
    })
    .option('current', {
        type: 'string',
        description: 'current ISO date',
        default: new Date().toISOString()
    })
    .option('year', {
        type: 'string',
        description: 'current year',
        default: new Date().getFullYear()    
    })
    .option('month', {
        type: 'string',
        description: 'current months',
        default: (new Date().getMonth() + 1)   
    })
    .option('date', {
        type: 'string',
        describe: 'current date',
        default: new Date().getDate()
    })
    .argv


if (command === 'current') {

    if (process.argv[3] === 'year') {
        console.clear()
        console.log(argv.year)
    }

    if (process.argv[3] === 'month') {
        console.clear()
        console.log(argv.month)
    }

    if (process.argv[3] === 'date') {
        console.clear()
        console.log(argv.date)
    }
}


if(command === 'add') {

    let year = argv.year
    let month = argv.month
    let date = argv.date
    console.log( '[' + 'Год: ' + year, ' Месяц: ' + month, ' День: ' + date + ']')

    if(process.argv[3] === 'year') {
        console.log( 'Полученная дата: ', 'Год по счету: ' + `${year}`, ' => ',  year + ' + ' + parseInt(process.argv[4]), ' = ', year + parseInt(process.argv[4]))
    }

    if(process.argv[3] === 'month') {
        console.log( 'Полученная дата: ', 'Месяц по счету: ' + `${month}`, ' => ',  month + ' + ' + parseInt(process.argv[4]), ' = ', month + parseInt(process.argv[4]))
    }

    if(process.argv[3] === 'date') {
        console.log( 'Полученная дата: ', 'День по счету: ' + `${date}`, ' => ',  date + ' + ' + parseInt(process.argv[4]), ' = ', date + parseInt(process.argv[4]))
    }

}

if(command === 'sub') {

    let year = argv.year
    let month = argv.month
    let date = argv.date
    console.log( '[' + 'Год: ' + year, ' Месяц: ' + month, ' День: ' + date + ']')

    if(process.argv[3] === 'year') {
        console.log( 'Полученная дата: ', 'Год по счету: ' + `${year}`, ' => ',  year + ' - ' + parseInt(process.argv[4]), ' = ', year - parseInt(process.argv[4]))
    }

    if(process.argv[3] === 'month') {
        console.log( 'Полученная дата: ', 'Месяц по счету: ' + `${month}`, ' => ',  month + ' - ' + parseInt(process.argv[4]), ' = ', month - parseInt(process.argv[4]))
    }

    if(process.argv[3] === 'date') {
        console.log( 'Полученная дата: ', 'День по счету: ' + `${date}`, ' => ',  date + ' - ' + parseInt(process.argv[4]), ' = ', date - parseInt(process.argv[4]))
    }
}

console.log(argv)
