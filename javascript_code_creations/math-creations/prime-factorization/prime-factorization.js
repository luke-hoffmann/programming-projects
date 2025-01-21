function IsPrime(n){
  
  for (let i =2 ; i<= Math.sqrt(n); i++) {
    if (n % i==0) {
      return false;
    }
  }
  return true;
}
function GetPrimeFactorsOf(n){
  if (IsPrime(n)) {
    return [n];
  }
  let primeBucket = [];
  let firstPrime = 2;
  for (let i =2;i <= Math.sqrt(n);i++) {
    if (n % i == 0 && IsPrime(i)) {
      firstPrime = i;
      break;
    }
  }

  primeBucket.push(firstPrime);
  let factors = GetPrimeFactorsOf(n/firstPrime);
  for (let j =0; j < factors.length;j++) {
    primeBucket.push(factors[j]);
  }

  return primeBucket;
  
}

function CountListOfEachItem(array){
  let map = new Map()
  let keys = [];
  let lengths = []
  for (let i =0; i < array.length;i++) {
    if (map.get(array[i]) == undefined) {
      
      lengths.push(1);
      keys.push([array[i],lengths.length-1])
      map.set(array[i],lengths.length-1);
      continue
    }
    lengths[map.get(array[i])]++;
    
  }
  let out = [];


  for (let i =0 ; i < keys.length;i++) {
    out.push([keys[i][0],lengths[keys[i][1]]])
  }
  return out
}

function GetDivisorsOf(n) {
  primeFactors = GetPrimeFactorsOf(n);
  lengths = CountListOfEachItem(primeFactors);
  
  
}


function MultRestOfArray(array){
  // array in form of [/*[value, timesValueShowedUp]   */ [10,2],[4,5],[5,2]]
  if (array.length == 1) {
    return array[0]
  }
  return array[0] * MultRestOfArray(array.slice(1));
}

function ArrayOfArraysContainingDecrementingNumbers(n,e) {
  let array = [];

  for (let i = e; i >= 0;i--) {
    let temp = [];
    for (let j = 0;j < i ;j++) {
      temp.push(n)
    }
    array.push(temp)
  }
  return array;
}

function CombineArrays(array1,array2){
  out = [];
  for (let k =0 ; k < array1.length;k++) {
    out.push(array1[k]);
  }
  for (let k =0 ; k < array2.length;k++) {
    out.push(array2[k]);
  }
  return out;
}
function CombineArrayOfArrays(a1,a2){
  var out = [];

  for (let i =0 ; i< a1.length;i++) {
    
    for (let j =0; j < a2.length;j++) {
      
      var temp =CombineArrays(a1[i],a2[j])
      
      out.push(temp);
    }
  }
  return out;
}


let twoer = ArrayOfArraysContainingDecrementingNumbers(2,4)
let threeer = ArrayOfArraysContainingDecrementingNumbers(3,4)

console.log(CombineArrayOfArrays(twoer,threeer));