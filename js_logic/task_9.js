function add(a) {

    let currentSum = a;
  
    function f(b) {
      currentSum += b;
      return f;
    }
  
    f.toString = function() {
      return currentSum;
    };
  
    return f;
  }
  
  console.log( add(1)(2) ); // 3
  console.log( add(1)(2)(5) ); // 8
  console.log( add(1)(2)(-3)(4) ); // 4
  console.log( add(1)(2)(3)(4)(-5) ); // 5
  