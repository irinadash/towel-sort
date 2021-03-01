
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
  if (matrix !== undefined && matrix.length > 0) {
    for (let i = 0; i < matrix.length; i++) {
      i % 2 === 1 ? res = res.concat(matrix[i].reverse())
      : res = res.concat(matrix[i]);
    }
  }
  return res;
}