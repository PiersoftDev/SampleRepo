function Pattern1(n) {
    for (let i = 1; i <= n; i++) {
      let row = "";
      for (let j = 1; j <= n - i + 1; j++) {
        row += "* ";
      }
      for (let k = 1; k <= 2 * i - 2; k++) {
        row += "  ";
      }
      for (let j = 1; j <= n - i + 1; j++) {
        row += "* ";
      }
      console.log(row);
    }
    for (let i = n - 0; i >= 1; i--) {
      let row = "";
      for (let j = 1; j <= n - i + 1; j++) {
        row += "* ";
      }
      for (let k = 1; k <= 2 * i - 2; k++) {
        row += "  ";
      }
      for (let j = 1; j <= n - i + 1; j++) {
        row += "* ";
      }
      console.log(row);
    }
  }
  Pattern1(7);