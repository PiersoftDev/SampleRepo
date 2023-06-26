function fun1(s)
 {
    var arr = [];
    var str = { '(': ')',
                    '{': '}',
                    '[': ']' 
                }
    for (let i=0 ; i < s.length ; i++) 
    {   
        if (str[s[i]]) 
        {
            arr.push(s[i]);
        }
        else if(s[i] !== str[arr.pop()])
        {
            return false;
        }
    }
    return arr.length ===  0 ;
  }
  console.log(fun1("{[]}()"));

