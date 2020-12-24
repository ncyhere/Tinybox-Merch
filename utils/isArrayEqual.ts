const isArrayEqual = (a, b) => {
  // if length is not equal
  if (a.length != b.length) return false;
  else {
    // comapring each element of array
    for (var i = 0; i < a.length; i++) if (a[i] != b[i]) return false;
    return true;
  }
};

export default isArrayEqual;
