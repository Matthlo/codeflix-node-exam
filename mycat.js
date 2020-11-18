const fs = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

//1 pour la partie 1 de l'exo 2
  readline.on('line', (input) => {
    console.log(input);
  });

//2 (Pour la partie 2)

const filename = process.argv[2]
const file = (filename) => {
    const readFile = fs.createReadStream(filename);

    readFile.on('data', function(chunk) {
        console.log(chunk.toString());
    });
}
file(filename)

//3
