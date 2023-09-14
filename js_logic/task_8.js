function combos(num) {
    const result = [];
    
    function findCombinations(remaining, currentCombo) {
      if (remaining === 0) {
        result.push(currentCombo.slice());
        return;
      }
      
      if (remaining < 0) {
        return;
      }
      
      for (let i = 1; i <= remaining; i++) {
        if (currentCombo.length === 0 || i >= currentCombo[currentCombo.length - 1]) {
          currentCombo.push(i);
          findCombinations(remaining - i, currentCombo);
          currentCombo.pop();
        }
      }
    }
    
    findCombinations(num, []);
    
    return result;
  }
  
  console.log(combos(3));
  console.log(combos(10));
  