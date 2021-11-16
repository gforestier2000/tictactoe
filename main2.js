const { exit } = require('process');
const process = require('process');

process.on('beforeExit',() => {
    console.log("beforeExit");
});

// ctrl + c
process.on('SIGINT',() => {
    console.log("SIGINT");
    process.exit(0);
});
process.on('SIGTERM',() => {
    console.log("SIGTERM");
    process.exit(0);
});
// ctrl + \ 
process.on('SIGQUIT',() => {
    console.log("SIGQUIT");
    process.exit(0);
});
// ctrl + z 
process.on('SIGTSTP',() => {
    console.log("SIGTSTP");
    process.exit(0);
});

console.log("En attente d'un signal de votre part");

setTimeout(() => {
    console.log('timeout completed'); 
    exit(0);
}, 3000); 


process.on('uncaughtException', function (err) {
    console.log("C'est moi qui ai attrapé l'exception !!!")
    //console.log('Caught exception: ', err);
    console.log('Stack:', err.stack); 
    console.log("C'est moi qui ai attrapé l'exception !!! FIN")
    process.exit(1); 
 
 }); 
 // Intentionally cause an exception, but don't try/catch it. 
 // nonexistentFunc(); 
 console.log('This line will not run.'); 

 
/*let i=0;
while(true){
    console.log(i++);
}*/