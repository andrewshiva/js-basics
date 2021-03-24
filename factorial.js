function factorial(x) 
{ 

  if (x === 0)
 {
    return 1;
 }
  num = x * factorial(x-1);
  return num;
         
}
console.log(factorial(6));
//call back function
function logFactorial(num){
  console.log(num);
}
factorial(num, logFactorial);
