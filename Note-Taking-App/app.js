const chalk = require('chalk');
const fs = require('fs');
const yargs = require('yargs');

//add
yargs.command({
    command: 'add',
    describe: 'Adds a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
        },
        body: {
            describe: 'Note body',
            type: 'string',
            demandOption: true,
        }
    },
    handler: (argv)=>{
        try {
            var data = fs.readFileSync('storage.txt');
            var node_storage = JSON.parse(data);
            if(node_storage[argv.title]){
                console.log(chalk.red('Note title taken'));
            }else{
                node_storage[argv.title] = argv.body;
                fs.writeFileSync('storage.txt', JSON.stringify(node_storage));
                console.log(chalk.green.inverse('Added the new note'));
            }
        } catch (e) {
            console.log(chalk.red.inverse('Error'));
        }
    }
});
//remove
yargs.command({
    command: 'remove',
    describe: 'removes the note with given title',
    builder: {
        title: {
            describe: 'Note title',
            type: 'string',
            demandOption: true
        }
    },
    handler: (argv)=>{
        try {
            var data = fs.readFileSync('storage.txt');
            var node_storage = JSON.parse(data);
            if(node_storage[argv.title]){
                delete node_storage[argv.title];
                fs.writeFileSync('storage.txt',JSON.stringify(node_storage));
                console.log(chalk.green.inverse(`Removed note`));
            }else{
                console.log(chalk.red('Note not found'));
            }
        } catch (e) {
            console.log(chalk.red.inverse('Error'));
        }
    }
});
//list
yargs.command({
    command: 'list',
    describe: 'Lists all notes',
    handler: (argv)=>{
        try {
            var data = fs.readFileSync('storage.txt');
            var node_storage = JSON.parse(data);
            if(Object.keys(node_storage).length == 0){
                console.log(chalk.red('Note list empty'));
            }else{
                for (const key in node_storage) {
                    console.log(`Title: ${key}--Body: ${node_storage[key]}`);
                }
                console.log(chalk.green.inverse('Done listing'));
            }
        } catch (e) {
            console.log(chalk.red.inverse('Error'));
        }
    }
});
//read
yargs.command({
    command: 'read',
    describe: 'Reads the note at given title',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=>{
        try {
            var data = fs.readFileSync('storage.txt');
            var node_storage = JSON.parse(data);
            if(node_storage[argv.title]){
                console.log(`Body of ${argv.title} : `,node_storage[argv.title]);
                console.log(chalk.green.inverse('Done reading'));
            }else{
                console.log(chalk.red('Note not found'));
            }
        } catch (error) {
            console.log(chalk.red.inverse('Error'));
        }
    }
});

yargs.parse();