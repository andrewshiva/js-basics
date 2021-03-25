function factorial(x) 
{ 

  if (x === 0)
 {
    return 1;
 }
  num = x * factorial(x-1);
  return num;
         
}

//call back function
function logFactorial(num , mycallback){
  var b = mycallback(num);
   console.log(b);
 }
 logFactorial(4, factorial);
