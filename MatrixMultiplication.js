function matrixMultiply(A, B) {
  const result = new Array(A.length)
    .fill(0)
    .map(() => new Array(B[0].length).fill(0));

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B[0].length; j++) {
      for (let k = 0; k < B.length; k++) {
        result[i][j] += A[i][k] * B[k][j];
      }
    }
  }

  return result;
}
const matrixA = [
  [1, 2],
  [3, 4],
];
const matrixB = [
  [5, 6],
  [7, 8],
];

const result = matrixMultiply(matrixA, matrixB);
console.log(result); // Output: [[19, 22], [43, 50]]
