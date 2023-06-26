function numPattren(n){
    for (let i=n; i>=0 ;i--){
        let x="";
        for(let j=i;j>=0;j--){
            x+=j+" ";
        }
        console.log(x);
    }
}
numPattren(6);