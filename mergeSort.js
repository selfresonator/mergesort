var mergeSort = function(array) {
  // so a merge sort is the process of breaking an array down into smaller subarrays,
  // and combing each array, and creating bigger arrays(merging them together).
  // then every array  has to have the first element compared to the first element
  // of the next array also, if the lenth of the array is smaller than 2, return
  // that array.
  var mid = Math.floor(array.length/2);
  var left = array.slice(0,mid);
  var right = array.slice(mid,array.length);

  if (array.length <= 2) {
    return array;
  }

  while (condition) {

  }

  mergeSort(merge(left), merge(right));

};

// this merge function will be recusively called for every subaaray until they can be
// merged together again
function merge(left, right) {
  var result = [];

  // while (left.length <= 0 || right.length <= 0) {
  //
  // }
}
