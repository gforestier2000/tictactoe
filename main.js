console.log("Mon programme de Morpion");

// SPECIFICATION
// Jouer au morpion 

// O X O
// X O O
// X O X

// Analyser => Questionner le client ou se questionner 
// 1) Comment afficher le plateau rempli ?
// 2) Quelle structure de donnée pour représenter un tableau = array 

let ligneHaut = [' ', ' ', ' '];
let ligneMilieu = [' ', ' ', ' '];
let ligneBas = [' ', ' ', ' '];

console.log(ligneHaut);
console.log(ligneMilieu);
console.log(ligneBas);

console.log("... le tableau de tableau");
let morpionBoard = [ligneHaut,ligneMilieu,ligneBas];

morpionBoard[0][0] = 'X';

console.log(morpionBoard);

function afficheMorpionBoard(morpionBoard){
    for(ligne = 0; ligne < morpionBoard.length; ligne++){
        let lineString ='';
        for (colonne = 0; colonne < morpionBoard[ligne].length; colonne++){
            lineString += morpionBoard[ligne][colonne] + " | ";
        }
        console.log(lineString);
        console.log("------------");
    }
}

function positionnePiece(morpionBoard, ligne, colonne, piece){
    morpionBoard[ligne][colonne] = piece;
}

afficheMorpionBoard(morpionBoard);
positionnePiece(morpionBoard, 1, 1, 'O');
positionnePiece(morpionBoard, 0, 0, 'X');
positionnePiece(morpionBoard, 2, 1, 'O');
positionnePiece(morpionBoard, 0, 1, 'X');
positionnePiece(morpionBoard, 0, 2, 'O');
afficheMorpionBoard(morpionBoard);

console.log('Plateau de fin de partie');
console.log('O | X | O');
console.log('---------');
console.log('X | O | O');
console.log('---------');
console.log('X | O | X');

console.log('Plateau de début de partie');
console.log('  |   |  ');
console.log('---------');
console.log('  |   |  ');
console.log('---------');
console.log('  |   |  ');

console.log('Premier coup de "O" au milieu');
console.log('  |   |  ');
console.log('---------');
console.log('  | O |  ');
console.log('---------');
console.log('  |   |  ');

console.log('coup de "X" en haut à gauche');
console.log('X |   |  ');
console.log('---------');
console.log('  | O |  ');
console.log('---------');
console.log('  |   |  ');

console.log('coup de "O" au milieu tout en bas');
console.log('X |   |  ');
console.log('---------');
console.log('  | O |  ');
console.log('---------');
console.log('  | O |  ');

console.log('coup de "X" au milieu haut');
console.log('X | X |  ');
console.log('---------');
console.log('  | O |  ');
console.log('---------');
console.log('  | O |  ');

console.log('coup de "O" en haut à droite');
console.log('X | X | O');
console.log('---------');
console.log('  | O |  ');
console.log('---------');
console.log('  | O |  ');

console.log('coup de "X" en bas à gauche');
console.log('X | X | O');
console.log('---------');
console.log('  | O |  ');
console.log('---------');
console.log('X | O |  ');

console.log('coup de "O" au milieu à gauche');
console.log('X | X | O');
console.log('---------');
console.log('O | O |  ');
console.log('---------');
console.log('X | O |  ');

console.log('coup de "X" au milieu à droite');
console.log('X | X | O');
console.log('---------');
console.log('O | O | X');
console.log('---------');
console.log('X | O |  ');

console.log('coup de "O" en bas à droite');
console.log('X | X | O');
console.log('---------');
console.log('O | O | X');
console.log('---------');
console.log('X | O | O');

console.log('Fin de programme');