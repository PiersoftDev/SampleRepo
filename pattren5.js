function Pattern6(n){
    let a=-1;
    for(let i=0;i<=n;i++){
      a=i;
      temp="";
      for(let j=i;j>0;j--){
        let x=0,l=n;
        for (let k=1;k<j;k++){
          x+=l;
          l--;
        }
        temp+=(x+i+1-a)+" ";
        a--;
      }
      console.log(temp)
    }
  }
    Pattern6(7);