var mergeSort = function(array) {
  // so a merge sort is the process of breaking an array down into smaller subarrays,
  // and combing each array, and creating bigger arrays(merging them together).
  // then every array  has to have the first element compared to the first element
  // of the next array also, if the lenth of the array is smaller than 2, return
  // that array.
  var mid = Math.floor(array.length/2);
  var left = array.slice(0,mid);
  var right = array.slice(mid,array.length);

  if (array.length < 2) {
    return array;
  }

  return merge(mergeSort(left), mergeSort(right));

};

// this merge function will be recusively called for every subaaray until they can be
// merged together again
var merge = function(left, right) {
  var result = [];

  while (left.length > 0 && right.length > 0) {
    if(left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length > 0) {
    result.push(left.shift());
  }
  while (right.length > 0) {
    result.push(right.shift());
  }

  return result;

}
