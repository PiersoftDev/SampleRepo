function Pattern4() {
    for (let i = 1; i <= 9; i++) {
      let row = '';
      for (let j = 1; j <= 9; j++) {
        if (i === j || j === 10 - i) {
          row += "\/";
        } else if (i < j && j < 10 - i) {
          row += '*';
        } else if (i > j && j > 10 - i) {
          row += '*';
        } else {
          row += '*';
        }
        
      }
      console.log(row);
    }
  }
  Pattern4();