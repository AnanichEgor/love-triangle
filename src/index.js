/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences) {
  let count = 0;
  let a, b, c;

  for (var i = 0; i < preferences.length; i++) {
    a = b = c = -1;

    if (preferences[i] != -1 && preferences[i] > 0) {
      a = preferences[i];
    }
    if (preferences[a - 1] != -1 && preferences[a - 1] > 0) {
      b = preferences[a - 1];
    }
    if (preferences[b - 1] != -1 && preferences[b - 1] > 0) {
      c = preferences[b - 1];
    }

    if (c - 1 == i && (a != b && b != c) && (a > 0 && b > 0 && c > 0)) {
      preferences[a - 1] = preferences[b - 1] = preferences[c - 1] = -1;
      count++;
    }
  }
  return count;
}
