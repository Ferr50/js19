matriz1 = [[0,1],[2,3]];
matriz2 = [[0,1,2],[3,4,5],[6,7,8]];
matriz3 = [[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15]];


function recursiveMatriz(matriz) {
  if (matriz.length > 0) {
    console.log(matriz.shift());
    recursiveMatriz(matriz);
  }
}

recursiveMatriz(matriz2);
console.log( );
recursiveMatriz(matriz3);