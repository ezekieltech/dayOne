function findMinMax(array) {
  var leni = array.length; 
  var min = 1000000000;
  while (leni--) {
    if (array[leni] < min) {
      min = array[leni];
    }
  }
  
  var len = array.length; 
  var max = 0;
  while (len--) {
    if (array[len] > max) {
      max = array[len];
    }
  }
  
  return max == min ? [max] : [min, max];
}
