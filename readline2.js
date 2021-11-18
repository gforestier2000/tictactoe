function positionerPiece(ligne, colonne, piece){
    console.log(`Positionner un ${piece} sur la ligne ${ligne} et la colonne ${colonne}`);
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'MORPION > '
});

rl.prompt();

rl.on('line', (line) => {
    if(line === null|| line.trim().length === 0 ){
        console.log('line === null || line.trim().length === 0');
        rl.prompt();
        return;
    }
    if(line[0] === 'X' || line[0] === 'O'){
        //console.log("line[0] === 'X' || line[0] === 'O'");
        let items = line.split(' ');
        if(items.length !== 2){
            console.log("Usage : {X|O} [012],[012]");
            rl.prompt();
            return;
        }
        let coordonnees = items[1].split(',');
        if(coordonnees.length !== 2){
            console.log("Usage : {X|O} [012],[012]");
            rl.prompt();
            return;
        }
        positionerPiece(coordonnees[0], coordonnees[1], items[0]);

        //items.forEach()
        /*for(let i = 0; i < items.length; i++){
            console.log(items[i]);

          }
        */
        rl.prompt();
        return;       
    }
  switch (line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    case 'X':
        console.log(line);
        break;
    default:
      console.log(`Say what? I might have heard '${line.trim()}'`);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});