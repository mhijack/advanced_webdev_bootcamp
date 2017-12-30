// Default Parameters
function add(a, b) {
  return a + b;
}
add(); // NaN - a & b are not defined

// setting default parameters
function add2(a = 10, b = 20) {
  return a + b;
}
add2(); // 30
