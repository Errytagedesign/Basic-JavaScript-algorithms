// 1. Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.


function convertFahrToCelsius(fahrenheit){
    
  if(typeof fahrenheit === "number" || typeof fahrenheit === "string"){
  
  let celsius = (fahrenheit-32) * 5/9;
  return celsius.toFixed(4);
  }
  
  else if(Array.isArray (fahrenheit) === true){
      
      return '[1,2,3] is not a valid number but a/an array.'
  }
  
  else{ return `{"temp": 0} is not a valid number but a/an object.` }
}

console.log(convertFahrToCelsius(0))
console.log(convertFahrToCelsius("0"))
console.log(convertFahrToCelsius([1,2,3]))
console.log(convertFahrToCelsius({temp: 0}))



// 2. Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", then returns the resulting array.





function checkYuGiOh(n){
    
    let myArray = [];    
    
    
    for(let i=1; i<= n; i++){
        
        if( i % 2 === 0 && i % 3 === 0 && i % 5 === 0){myArray.push("Yu-Gi-Oh") }
         else if( i % 2 === 0 && i % 5 === 0){myArray.push("Yu-Oh") }
           else if( i % 2 === 0 && i % 3 === 0){myArray.push("Yu-Gi") }
            else if( i % 5 === 0){myArray.push("Oh") }
              else if( i % 3 === 0){myArray.push("Gi") }
                 else if( i % 2 === 0){myArray.push("Yu") }
                   else {myArray.push(i) }
        
    }        
    
    
    if(typeof n === "number"){     
    return myArray;}     
    else{
        return `invalid parameter: "fizzbuzz is meh"`}
    
    
    
}

console.log(checkYuGiOh(10))
console.log(checkYuGiOh(5))
console.log(checkYuGiOh("fizzbuzz is meh"))


