const fs = require('fs');
const path = require('path');
const args = process.argv.splice(2);

if(args.length === 2)
    cpFiles(args[0], args[1]);
else if(args.length === 3 && args[0] === '-r')
    cpDirectory(args[1], args[2]);

function cpFiles(file, target) {

    fs.readFile(file, (err, data) => {
        const content = data.toString();

        fs.writeFile(target, content, () => {
        });
    });
}

function cpDirectory(directory, target) {

    const isDirectory = fs.statSync(directory).isDirectory();

    if(isDirectory) {

        fs.mkdir(target, () => {

        });

        fs.readdir(directory, (err, files) => {

            files.forEach((file) => {

                const newDirectory = path.join(directory, file);
                const newTarget = path.join(target, file);

                cpDirectory(newDirectory, newTarget);
            });
        });

    } else
        cpFiles(directory, target);
}