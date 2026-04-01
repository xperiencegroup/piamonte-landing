export default function chunkArray(data, chunkSize) {
  let matrix = [];

  data.map((item, index) => {
    if (index % chunkSize === 0) {
      matrix.push([]);
    }

    matrix[matrix.length - 1].push(item);
  });

  return matrix;
}
