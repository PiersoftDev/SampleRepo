function pattren3(n){
    for(let i= n-0 ; i>0 ; i--)
{
    let x="";

    for (let j=1 ; j<=n-i+1 ; j++)
    {
        x+="* ";
    }
    for(let k=1; k<= 2 * i - 2 ; k++)
    {
        x+="  ";
    }
    for(let j=1 ; j<=n-i+1 ; j++)
    {
        x+="* "
    }
    console.log(x);
}
for(let i=1 ; i<=n ; i++ )
{
    let x="";
    for(let j=1 ; j<=n-i+1 ; j++)
    {
        x+="* ";
    }
    for (let k=1 ; k<=2*i-2 ; k++)
    {
        x+="  ";
    }
    for(let j=1 ; j<=n-i+1 ; j++)
    {
        x+="* "
    }
    console.log(x);
}
}
pattren3(5);