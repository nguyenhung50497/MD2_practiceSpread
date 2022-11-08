let testArray = [1, 2, 100, 100, 6]

function replace(array, from, to, elements) {

    array.splice(...[from, to - from].concat(elements))
  
  } 
  
  replace(testArray, 2, 4, [3, 4, 5])  
  
  console.log(testArray)
  
  let arr = [...testArray];
  function copyReplace(array, from, to, elements) {
    
    return [...array].slice(0, from).concat(elements).concat([...array].slice(to))
   
  }
  
  console.log(copyReplace(arr, 2, 4, [3, 4, 5]))
  
 
  let customerOrder = [] 
  
  function recordOrders(time) { 
  
    customerOrder.push({time, birds: [...arguments].slice(1)})  
  
  }  
  
  recordOrders(new Date, "coffee", "yaourt", "pizza")  
  
  console.log(customerOrder)