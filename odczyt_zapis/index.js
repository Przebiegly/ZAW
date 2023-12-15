const fs = require('fs')

const randomNumber = Math.round(Math.random() * 100)

fs.writeFileSync('random.txt', randomNumber.toString())

const fileContent = fs.readFileSync('random.txt', 'utf-8')
console.log('Wylosowana liczba to', fileContent)

fs.readFile('random.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('Cos nie dziala', err)
    } else {
        const doubledNumber = parseInt(data) * 2
        fs.writeFile('.txt', doubledNumber.toString(), (err) => {
        if (err) {
            console.log('Cos nie działa', err)
        } else {
            console.log('Pomnozona liczba to', doubledNumber)
        }
        })
    }
    }
)