const readline = require('readline');

const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });


rl.question('What do you think of Node.js? ', (answer) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer}`);
    if (answer === ".exit") {
        console.log("Bye");
        rl.close();
        process.exit(0);
    }

    rl.close();
});
