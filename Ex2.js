const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let tryCount = 1
let randNum = Math.round(Math.random() * 100)

const game = () => {
    console.log("Загадоно число в диапазоне от 0 до 100")
    
    if(tryCount <= 10) {
        readline.question("Введите число ", input_number => {
            input_number = parseInt(input_number)
            console.log(`Попытка № ${tryCount}`)
            if(input_number > randNum) { console.log(`${input_number} больше\n`); tryCount += 1; game()}
            if(input_number < randNum) { console.log(`${input_number} меньше\n`); tryCount += 1; game() }
            if(input_number == randNum) {console.log(`Отгадано число: ${randNum}\n`); readline.close() } 
        })
    }
    else {
        console.log('Было загадано число: ' + `${randNum}`)
    }
}
game()